import ConverterUtils from "./../utilities/converter";

test('ScriptUtilities ==> ConvertToCapitals ==> case 1', () => {
    let testedMethodResult = ConverterUtils.ConvertToCapitals('hai');
    let myExpectations = 'HAI';
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToLowerCase ==> case 2', () => {
    let testedMethodResult = ConverterUtils.ConvertToLowerCase('Hai');
    let myExpectations = 'hai';
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToCamelCase ==> case 3', () => {
    let testedMethodResult = ConverterUtils.ConvertToCamelCase('Hai hellohow are you');
    let myExpectations = 'HaiHellohowAreYou';
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToCamelCase ==> case 4', () => {
    let testedMethodResult = ConverterUtils.ConvertToCamelCase('hai hello Whatsup gUYS');
    let myExpectations = 'HaiHelloWhatsupGuys';
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToString ==> case 5', () => {
    let testedMethodResult = ConverterUtils.ConvertToString("hello");
    let myExpectations = "hello";
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToString ==> case 6', () => {
    let testedMethodResult = ConverterUtils.ConvertToString(null);
    let myExpectations = "null";
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToString ==> case 7', () => {
    let testedMethodResult = ConverterUtils.ConvertToString({name:"vishal"});
    let myExpectations = "{\"name\":\"vishal\"}";
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToString ==> case 8', () => {
    let testedMethodResult = ConverterUtils.ConvertToString(undefined);
    let myExpectations = "undefined";
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToString ==> case 9', () => {
    let testedMethodResult = ConverterUtils.ConvertToString(172);
    let myExpectations = "172";
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToNumber ==> case 10', () => {
    let testedMethodResult = ConverterUtils.ConvertToNumber('1234');
    let myExpectations = 1234;
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToNumber ==> case 11', () => {
    let testedMethodResult = ConverterUtils.ConvertToNumber('hai');
    let myExpectations = NaN;
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToTitleCase ==> case 12', () => {
    let testedMethodResult = ConverterUtils.ConvertToTitleCase('hai hEllo how are you');
    let myExpectations = 'Hai Hello How Are You'
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToLowerCamelCase ==> case 13', () => {
    let testedMethodResult = ConverterUtils.ConvertToLowerCamelCase('hello how are');
    let myExpectations = 'hEllo hOw aRe'
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToSnakeCase ==> case 14', () => {
    let testedMethodResult = ConverterUtils.ConvertToSnakeCase(' hai HOw are you ');
    let myExpectations = 'hai_how_are_you'
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToToggleCase ==> case 15', () => {
    let testedMethodResult = ConverterUtils.ConvertToToggleCase('HaI heLlO');
    let myExpectations = 'hAi HElLo'
    expect(testedMethodResult).toBe(myExpectations);
});
test('ScriptUtilities ==> ConvertToSentenceCase ==> case 16', () => {
    let testedMethodResult = ConverterUtils.ConvertToSentenceCase('HAI HELLO how ARE YOU');
    let myExpectations = 'Hai hello how are you'
    expect(testedMethodResult).toBe(myExpectations);
});
