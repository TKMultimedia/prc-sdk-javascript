import { get as _get } from 'lodash';
import IUserGroup from '../Model/IUserGroup';
import { TransformFunction } from '../Types/TransformFunction';

export const groupResponseTransformer: TransformFunction<IUserGroup[]> = (
  data: string
): IUserGroup[] =>
  _get(JSON.parse(data), 'data.groups', []);

export const transformSingleGroupResponse: TransformFunction<IUserGroup> = (
  data: string
): IUserGroup =>
  _get(JSON.parse(data), 'data.group', {});
