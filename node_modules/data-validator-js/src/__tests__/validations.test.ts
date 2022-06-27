import Validations from "./../utilities/validations";

test('Validations ==> IsValidEmail ==> case 1', () => {
    let testedMethodResult = Validations.IsValidEmail('mani@gmail.com');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidEmail ==> case 2', () => {
    let testedMethodResult = Validations.IsValidEmail('manikandan123');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidEmail ==> case 3', () => {
    let testedMethodResult = Validations.IsValidEmail('mani@gmail');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidEmail ==> case 4', () => {
    let testedMethodResult = Validations.IsValidEmail('mani@123');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidEmail ==> case 5', () => {
    let testedMethodResult = Validations.IsValidEmail('mani123@gmail.com');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidEmail ==> case 1', () => {
    let testedMethodResult = Validations.IsValidString('mani123');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidString ==> case 2', () => {
    let testedMethodResult = Validations.IsValidString('mani');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidString ==> case 3', () => {
    let testedMethodResult = Validations.IsValidString('123');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidString ==> case 4', () => {
    let testedMethodResult = Validations.IsValidString('@#$%');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidPhoneNumber ==> case 1', () => {
    let testedMethodResult = Validations.IsValidPhoneNumber('8801039225');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidPhoneNumber ==> case 2', () => {
    let testedMethodResult = Validations.IsValidEmail('mani123456');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidPhoneNumber ==> case 3', () => {
    let testedMethodResult = Validations.IsValidEmail('123456');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidNumber ==> case 1', () => {
    let testedMethodResult = Validations.IsValidNumber('123456');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidNumber ==> case 2', () => {
    let testedMethodResult = Validations.IsValidNumber('123456asd');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidNumber ==> case 3', () => {
    let testedMethodResult = Validations.IsValidNumber('');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsValidNumber ==> case 4', () => {
    let testedMethodResult = Validations.IsValidNumber('akshay');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumeric ==> case 1', () => {
    let testedMethodResult = Validations.IsValidAlphaNumeric('akshay');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumeric ==> case 2', () => {
    let testedMethodResult = Validations.IsValidAlphaNumeric('12');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumeric ==> case 3', () => {
    let testedMethodResult = Validations.IsValidAlphaNumeric('@123*/');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumeric ==> case 4', () => {
    let testedMethodResult = Validations.IsValidAlphaNumeric('akshay@');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumericWithSpecialChars ==> case 1', () => {
    let testedMethodResult = Validations.IsValidAlphaNumericWithSpecialChars('akshay');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumericWithSpecialChars ==> case 2', () => {
    let testedMethodResult = Validations.IsValidAlphaNumericWithSpecialChars('123');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumericWithSpecialChars ==> case 3', () => {
    let testedMethodResult = Validations.IsValidAlphaNumericWithSpecialChars('akshay@123');
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('Validations ==> IsAlphaNumericWithSpecialChars ==> case 4', () => {
    let testedMethodResult = Validations.IsValidAlphaNumericWithSpecialChars('*/--');
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});