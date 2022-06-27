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

export default class Dictionary<K extends number | string, V> implements IDictionary<K, V> {

    private keys: K[];
    private values: V[];

    constructor() {
        this.keys = [];
        this.values = [];
    }

    public add(key: K, value: V): boolean {
        if (!this.containsKey(key)) {
            this.keys.push(key);
            this.values.push(value);
            return true;
        }

        return false;
    }

    public upsert(key: K, value: V): void {
        if (!this.update(key, value)) {
            this.add(key, value);
        }
    }

    /**
     * Update the dictionary if the entry exists, else add it at the right place such that it is in the sorted order based on the key
     * @param key Key for the dictionary entry
     * @param value Value for the dictionary entry
     */
    public sortedUpsert(key: K, value: V): void {
        if (!this.update(key, value)) {
            let insertIndex = 0;
            while (insertIndex < this.keys.length && this.keys[insertIndex] < key) {
                insertIndex++;
            }

            // Insert both key and value in their respective arrays at the identified index
            this.keys.splice(insertIndex, 0, key);
            this.values.splice(insertIndex, 0, value);
        }
    }

    public clear(): void {
        this.keys = [];
        this.values = [];
    }

    public containsKey(key: K): boolean {
        return (this.keys.indexOf(key) !== -1);
    }

    public containsValue(value: V): boolean {
        return (this.values.indexOf(value) !== -1);
    }

    public count(): number {
        return this.keys.length;
    }

    public getValue(key: K): V | boolean {
        const keyIndex = this.keys.indexOf(key);

        if (keyIndex !== -1) {
            return this.values[keyIndex];
        }
        return false;
    }

    public getKeys(): K[] {
        return this.keys.slice();
    }

    public getValues(): V[] {
        return this.values.slice();
    }

    public remove(key: K): boolean {
        const keyIndex = this.keys.indexOf(key);

        if (keyIndex !== -1) {
            this.keys.splice(keyIndex, 1);
            this.values.splice(keyIndex, 1);
            return true;
        }
        return false;
    }

    public update(key: K, value: V): boolean {
        const keyIndex = this.keys.indexOf(key);

        if (keyIndex !== -1) {              
            this.values[keyIndex] = value;
            return true;
        }
        return false;
    }
}

