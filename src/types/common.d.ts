export interface IGenericResponse<T = any> {
  map(arg0: (item: any) => string): unknown;
  status: number;
  isFlag: boolean;
  msg: string;
  data: T;
}
