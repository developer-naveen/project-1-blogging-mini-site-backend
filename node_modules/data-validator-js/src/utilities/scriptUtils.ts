import StringUtils from './stringUtils'
export default class ScriptUtilities {
  /**
   * Checks object is null or undefined.
   * @param obj Object for which we need to check
   */
  public static IsNullOrUndefined(obj: object| null| undefined): boolean {
    return obj === null || obj === undefined;
  }

  /**
   * Returns true if machine is a mac machine.
   */
  public static IsMacMachine(): boolean {
    return navigator.platform.indexOf('Mac') !== -1;
  }

  /**
   * Returns a  numeric value
   * @param value value of attribute
   */
  public static getNumericValue(value: string, radix : number = 10): number| null {
    if (!StringUtils.IsNullOrEmpty(value)) {
      return parseInt(value, radix);
    }
    return null;
  }
}
