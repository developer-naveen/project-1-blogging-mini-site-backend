import Dictionary from './dictionary';

export class CachingUtility {
  private cache: Dictionary<string, any>;

  constructor() {
    this.cache = new Dictionary<string, any>();
  }

  /**
   * Performs upsert function in the cache Dictionary
   * @param key {string}
   * @param value {any}
   */
  public Add(key: string, value: any): void {
    this.cache.upsert(key, value);
  }

  /**
   * Gets the Value entry for a corresponding key the cache Dictionary
   * @param key {string}
   */
  public Get(key: string): any {
    return this.cache.getValue(key);
  }
}
