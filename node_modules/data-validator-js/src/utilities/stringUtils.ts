export default class StringUtilities {
  /**
   * Empty string
   */
  public static get EmptyString(): string {
    return '';
  }

  /**
   * Is True string
   */
  public static IsTrue(value: string): boolean {
    let returnValue: boolean = false;
    try {
      returnValue = eval(value.toLowerCase());
    } catch (e) {
      returnValue = false;
    }
    return returnValue;
  }

  /**
   * Whitespace
   */
  public static get WhiteSpace(): RegExp {
    return / /g;
  }

  public static get EnglishAndNumericCharacters(): RegExp {
    return /([a-z0-9A-Z]+)/g;
  }

  /**
   * Checks string is null,undefined or empty.
   * @param str string for which we need to check.
   */
  public static IsNullOrEmpty(str: string | null | undefined): boolean {
    return str === null || str === undefined || str === '';
  }

  /**
   * Checks if the main string ends with the sub string
   * @param mainString The main string, in which sub string needs to be searched
   * @param subString The smaller string that is to be searched
   */
  public static EndsWithString(mainString: string, subString: string): boolean {
    return mainString.indexOf(subString, mainString.length - subString.length) !== -1;
  }

  /**
   * Checks if string contains only spaces, tabs or line breaks.
   * @param str string for which we need to check
   */
  public static IsBlankString(str: string): boolean {
    return str.replace(/\s/g, '').length === 0;
  }
}
