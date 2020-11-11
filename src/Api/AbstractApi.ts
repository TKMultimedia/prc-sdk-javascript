import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Environment from '../Enum/Environment';
import { TransformFunction } from '../Types/TransformFunction';

abstract class AbstractApi {

  // --------------------------------------------------------------------------------------------
  // Protected Properties
  // --------------------------------------------------------------------------------------------

  /**
   * The HTTP Client
   * Use this to init all HTTP functionality
   */
  protected readonly http: AxiosInstance;

  // --------------------------------------------------------------------------------------------
  // Private Properties
  // --------------------------------------------------------------------------------------------

  private readonly ENDPOINT_DEV: string = 'https://c9ec9cr93f.execute-api.us-east-1.amazonaws.com/dev';
  private readonly ENDPOINT_STAGING: string = 'https://cors-anywhere.herokuapp.com/http://13.251.129.57:8080';
  private readonly ENDPOINT_LIVE: string = 'https://cors-anywhere.herokuapp.com/http://13.251.129.57:8080';
  private readonly ENDPOINT_LOCAL: string = 'http://localhost:3002';

  // --------------------------------------------------------------------------------------------
  // Magic methods
  // --------------------------------------------------------------------------------------------

  /**
   * @since v2.0.0
   */
  public constructor(env: string, token?: string, transformResponse?: TransformFunction<{}>) {
    let baseUrl: string;

    switch (env) {
      case Environment.DEVELOPMENT:
        baseUrl = this.ENDPOINT_DEV;
        break;
      case Environment.STAGING:
        baseUrl = this.ENDPOINT_STAGING;
        break;
      case Environment.PRODUCTION:
        baseUrl = this.ENDPOINT_LIVE;
        break;
      case Environment.LOCAL:
        baseUrl = this.ENDPOINT_LOCAL;
        break;
      default:
        throw new Error(`Invalid env "${env}" value`);
    }

    let axiosConfig: AxiosRequestConfig = {
      baseURL: `${baseUrl}/`
    };

    if (typeof token !== 'undefined') {
      axiosConfig = {
        ...axiosConfig,
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }

    if (typeof transformResponse !== 'undefined') {
      axiosConfig = {
        ...axiosConfig,
        transformResponse
      };
    }

    this.http = Axios.create(axiosConfig);
  }
}

export default AbstractApi;
