import HashMap from "./../utilities/hashMap";
import Dictinary from "./../utilities/dictionary";

test('HashMap<V> ==> IsNullOrEmpty ==> case 1', () => {
    let myDictionary = new Dictinary();
    myDictionary.add(1, 'mani');


    expect(myDictionary.getValue(1)).toBe('mani');
    expect(myDictionary.count()).toBe(1);


    // myDictionary.add(2, 'asas');
    // myDictionary.add(3,'sddsd')

    // let data = myDictionary.getValue(1)
    // myDictionary.clear();
    // myDictionary.count()
    // myDictionary.containsKey(45) // false
    // myDictionary.getKeys()
    // myDictionary.remove(1)
    // myDictionary.update(1, '3434')
    // myDictionary.upsert(1,'3434343434')
    //let testedMethodResult = HashMap.;
    //let myExpectations = false
    // expect(data).toBe('mani');
});