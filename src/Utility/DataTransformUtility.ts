import * as camelCaseKeys from 'camelcase-keys';
import * as snakeCaseKeys from 'snakecase-keys';
import { forEach } from 'lodash';
import { AxiosResponse } from 'axios';

enum CONVERT_MODE {
  STRING_TO_DATE,
  DATE_TO_STRING
}

/**
 * List of property names that is date and need to be converted in request and response, vice-versa
 */
const dateProperties: string[] = [
  // 'pickupTime', // leave empty for now as we're directly to use string for now
  // 'returnTime',
  // 'expireDate'
];

/**
 * Transform property from camelCase to snake_case
 */
function transformRequest(data: {} | undefined): string {
  if (typeof data === 'undefined') {
    return '';
  }

  let convertedData: {} = convertDate(data, CONVERT_MODE.DATE_TO_STRING);
  convertedData = snakeCaseKeys(convertedData, { deep: true });

  return JSON.stringify(convertedData);
}

/**
 * Transform property from snake_case to camelCase
 */
function transformResponse(data: string | undefined): {} | undefined {
  if (typeof data === 'undefined') {
    return undefined;
  }

  let jsonObject: {} = JSON.parse(data); // convert string to object
  jsonObject = camelCaseKeys(jsonObject, { deep: true }); // convert snake_case to camelCase
  jsonObject = convertDate(jsonObject, CONVERT_MODE.STRING_TO_DATE);

  return jsonObject;
}

function convertDate(data: {}, mode: CONVERT_MODE): {} {
  forEach(data, (value: string | number, key: string) => {
    // @ts-ignore "any"
    if (typeof data[key] === 'object') {
      // @ts-ignore "any"
      convertDate(data[key], mode);
    }

    if (dateProperties.includes(key) === false) {
      return;
    }

    // @ts-ignore
    data[key] = mode === CONVERT_MODE.STRING_TO_DATE ? new Date(value) : value.toString();
  });

  return data;
}

type wrapperType = <DataType>(data: DataType) => AxiosResponse<DataType>;

export const wrapAxiosResponse: wrapperType = <DataType>(data: DataType): AxiosResponse<DataType> => ({
  data,
  status: 200,
  statusText: 'Done',
  headers: {},
  config: {}
});

export {
  transformRequest,
  transformResponse
};
