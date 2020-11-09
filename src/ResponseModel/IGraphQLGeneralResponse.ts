import IGraphQLError from '../Model/IGraphQLError';

export default interface IGraphQLGeneralResponse {
  data: {
    [key: string]: any;
  };
  errors?: IGraphQLError[];
}
