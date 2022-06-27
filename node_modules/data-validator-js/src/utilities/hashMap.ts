export interface IDictionary<K extends number | string, V> {
  add(key: K, value: V): boolean;
  upsert(key: K, value: V): void;
  clear(): void;
  containsKey(key: K): boolean;
  containsValue(value: V): boolean;
  count(): number;
  getKeys(): K[];
  getValues(): V[];
  getValue(key: K): V | boolean;
  update(key: K, value: V): boolean;
  remove(key: K): boolean;
}
export default class HashMap<V> implements IDictionary<string, V> {
  private data: { [key: string]: V } = {};

  public add(key: string, value: V): boolean {
    if (!this.containsKey(key)) {
      this.data[key] = value;
      return true;
    }

    return false;
  }

  public upsert(key: string, value: V): void {
    this.data[key] = value;
  }

  public clear(): void {
    this.data = {};
  }

  public containsKey(key: string): boolean {
    return this.data.hasOwnProperty(key);
  }

  public containsValue(value: V): boolean {
    for (const k in this.data) {
      if (this.data[k] === value) {
        return true;
      }
    }
    return false;
  }

  public count(): number {
    return Object.keys(this.data).length;
  }

  public getValue(key: string): V | boolean {
    if (this.containsKey(key)) {
      return this.data[key];
    }
    return false;
  }

  public getKeys(): string[] {
    return Object.keys(this.data);
  }

  public getValues(): V[] {
    const values: V[] = [];

    for (const k in this.data) {
      if (this.data.hasOwnProperty(k)) {
        values.push(this.data[k]);
      }
    }

    return values;
  }

  public remove(key: string): boolean {
    if (!this.containsKey(key)) {
      return false;
    }
    return delete this.data[key];
  }

  public update(key: string, value: V): boolean {
    if (this.containsKey(key)) {
      this.data[key] = value;
      return true;
    }

    return false;
  }

  /**
   * Returns the internal object.
   * The current implementation returns data: { the actual key value pairs} as hashmap.
   * Wherever there is a need to pass only the key value pairs without data being appended along with it, return this.data.
   */
  public getInternalObject(): { [key: string]: V } {
    return this.data;
  }
}
