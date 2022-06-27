import StringUtilities from "./../utilities/stringUtils";

test('StringUtilities ==> IsNullOrEmpty ==> case 1', () => {
    let testedMethodResult = StringUtilities.IsNullOrEmpty('mani');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> IsNullOrEmpty ==> case 2', () => {
    let testedMethodResult = StringUtilities.IsNullOrEmpty(null);
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('StringUtilities ==> IsNullOrEmpty ==> case 3', () => {
    let testMethodResult = StringUtilities.IsNullOrEmpty(undefined);
    let myExpectations = true
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> IsNullOrEmpty ==> case 4', () => {
    let testMethodResult = StringUtilities.IsNullOrEmpty('1');
    let myExpectations = false
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> IsEmpty ==> case 1', () => {
    let testMethodResult =StringUtilities.EmptyString;
    let myExpectations = ''
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> Istrue ==> case 1', () => {
    let testMethodResult =StringUtilities.IsTrue("true");
    let myExpectations = true
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> Istrue ==> case 2', () => {
    let testMethodResult =StringUtilities.IsTrue("error");
    let myExpectations = false
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> WhiteSpace ==> case 1', () => {
    let testMethodResult =StringUtilities.WhiteSpace;
    let myExpectations =' '
    RegExp(testMethodResult).exec(myExpectations);
});
test('StringUtilities ==> IsBlankString ==> case 1', () => {
    let testMethodResult =StringUtilities.IsBlankString("");
    let myExpectations = true
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> IsBlankString ==> case 2', () => {
    let testMethodResult =StringUtilities.IsBlankString("sdfs");
    let myExpectations = false
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> EndsWithString ==> case 1', () => {
    let testMethodResult =StringUtilities.EndsWithString('sjgdssad','sdfsh');
    let myExpectations = false
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> EndsWithString ==> case 2', () => {
    let testMethodResult =StringUtilities.EndsWithString('','');
    let myExpectations = true
    expect(testMethodResult).toBe(myExpectations);
});
test('StringUtilities ==> EndsWithString ==> case 2', () => {
    let testMethodResult =StringUtilities.EndsWithString('sjgdssad','sdfsh');
    let myExpectations = false
    expect(testMethodResult).toBe(myExpectations);
});
// StringUtilities.IsNullOrEmpty('mani') // false
// StringUtilities.IsNullOrEmpty(null) // true
// StringUtilities.IsNullOrEmpty(undefined) // true
// StringUtilities.IsNullOrEmpty("1") // false