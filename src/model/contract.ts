export enum ParamType {
  str = 'string',
  num = 'number',
  bool = 'boolean'
}


export type FunctionParam = {
  /**
   * UI display key
   */
  key: number,
  value?: any,
  paramType: ParamType
}
