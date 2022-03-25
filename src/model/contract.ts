export enum ParamType {
  str = 'string',
  num = 'number',
  bool = 'boolean',
  invalid = 'invalid'
}


export type FunctionParam = {
  /**
   * UI display key
   */
  key: number,
  value?: any,
  type: ParamType
}
