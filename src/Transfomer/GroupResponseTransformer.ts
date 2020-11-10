import { get as _get } from 'lodash';
import IUserGroup from '../Model/IUserGroup';
import { GeneralResponseTransfomer, TransformFunction } from '../Types/TransformFunction';

export const groupResponseTransformer: TransformFunction<IUserGroup[]> = (
  data: string
): IUserGroup[] =>
  _get(JSON.parse(data), 'data.groups', []);

export const transformSingleGroupResponse: TransformFunction<IUserGroup> = (
  data: string
): IUserGroup =>
  _get(JSON.parse(data), 'data.group', {});

export const generalResponseTransformer: GeneralResponseTransfomer<any> = (data: string, key: string): any =>
  _get(JSON.parse(data), `data.${key}`, {});

export const awesomeTransfomer: TransformFunction<any> = (data: string): any =>
  _get(JSON.parse(data), 'data', {});
