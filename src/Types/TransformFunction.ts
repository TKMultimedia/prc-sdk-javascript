export type TransformFunction<T> = (data: string) => T;
export type GeneralResponseTransfomer<T> = (data: string, key: string) => T;
