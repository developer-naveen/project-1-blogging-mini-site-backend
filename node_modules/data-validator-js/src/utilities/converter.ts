import StringUtils from './stringUtils';
export default class ConverterUtils {
  /**
   * ConvertToCapitals - Convert the value to UpperCase
   * @param value String which we need to check
   */
  public static ConvertToCapitals(value: string): string {
    return value.toUpperCase();
  }

  /**
   * ConvertToLowerCase - Convert the value to LowerCase
   * @param value String which we need to check
   */
  public static ConvertToLowerCase(value: string): string {
    return value.toLowerCase();
  }

  /**
   * ConvertToCamelCase - Convert the value to CamelCase
   * @param value String which we need to check
   */
  public static ConvertToCamelCase(value: string): string {
    return (' ' + value).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => {
      return chr.toUpperCase();
    });
  }

  /**
   * ConvertToString - Convert the value to String
   * @param value String which we need to check
   */
  public static ConvertToString(value: number | string | object | null | undefined): string {
    if (typeof value === 'object') {
      return JSON.stringify(value);
    } else {
      return String(value);
    }
  }
  /**
   * ConvertToNumber - Convert the value to Number
   * @param value String which we need to check
   */
  public static ConvertToNumber(value: string): number {
    // let result = Number(value)
    return Number(value);
  }
  /**
   * ConvertToTitleCase - Convert the value to TitleCase
   * @param value String which we need to check
   */
  public static ConvertToTitleCase(value: string): string {
    return value.replace(/([^\W_]+[^\s-]*) */g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  /**
   * ConvertToLowerCamelCase - Convert the value to LowerCamelCase
   * @param value String which we need to check
   */
  public static ConvertToLowerCamelCase(value: string): string {
    return value.replace(/\w\S*/g, chr => {
      return chr.charAt(0).toLowerCase() + chr.charAt(1).toUpperCase() + chr.substr(2).toLowerCase();
    });
  }
  /**
   * ConvertToSnakeCase - Convert the value to SnakeCase
   * @param value String which we need to check
   */
  public static ConvertToSnakeCase(value: string): string {
    return value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_');
  }
  /**
   * ConvertToRandomCase - Convert the value to RandomCase
   * @param value String which we need to check
   */
  public static ConvertToRandomCase(value: string): string {
    return value
      .split('')
      .map(chr => {
        const chance = Math.round(Math.random());
        return (chr = chance ? chr.toUpperCase() : chr.toLowerCase());
      })
      .join('');
  }
  /**
   * ConvertToToggleCase - Convert the value to ToggleCase
   * @param value String which we need to check
   */
  public static ConvertToToggleCase(value: string): string {
    return value.replace(/([a-z]+)|([A-Z]+)/g, (match, chr) => {
      return chr ? match.toUpperCase() : match.toLowerCase();
    });
  }
  /**
   * ConvertToSentenceCase - Convert the value to SentenceCase
   * @param value String which we need to check
   */
  public static ConvertToSentenceCase(value: string): string {
    return value.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => {
      return c.toUpperCase();
    });
  }
}
