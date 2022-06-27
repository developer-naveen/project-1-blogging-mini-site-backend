import passwordUtils from "../utilities/passwordUtils"

test('PasswordUtils ==> GenerateSimplePassword==> case 1', () => {
    let testedMethodResult = passwordUtils.GenerateSimplePassword().length
    let myExpectations = 8
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> GenerateGoodPassword==> case 1', () => {
    let testedMethodResult = passwordUtils.GenerateGoodPassword().length
    let myExpectations = 18
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> GenerateStrongPassword==> case 1', () => {
    let testedMethodResult = passwordUtils.GenerateStrongPassword().length
    let myExpectations = 34
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> IsPasswordWeek ==> case 1', () => {
    let testedMethodResult = passwordUtils.IsPasswordWeek('asdfgh12')
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> IsPasswordWeek ==> case 2', () => {
    let testedMethodResult = passwordUtils.IsPasswordWeek('asdfghlikkl12356')
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> IsPasswordGood ==> case 1', () => {
    let testedMethodResult = passwordUtils.IsPasswordGood('asdfghlipyop1234#!')
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> IsPasswordGood ==> case 2', () => {
    let testedMethodResult = passwordUtils.IsPasswordGood('asdfghlipyopasdfghjkl123456789#!@@@')
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> IsPasswordStrong ==> case 1', () => {
    let testedMethodResult = passwordUtils.IsPasswordStrong('asdfghlipyopqwertyuio12345678#!**@@')
    let myExpectations = true
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> IsPasswordStrong ==> case 2', () => {
    let testedMethodResult = passwordUtils.IsPasswordStrong('asdfghlipyopqwertyuioaassddd12345678956#!**@@^&*@')
    let myExpectations = false
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStregth==> case 1', () => {
    let Options: any = {
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfgh12')
    let myExpectations = "week"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStrength==> case 2', () => {
    let Options: any = {
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfghlipyop1234#!')
    let myExpectations = "good"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStrength==> case 3', () => {
    let Options: any = {
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfghlipyopqwertyuio12345678#!**@@')
    let myExpectations = "strong"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStrength==> case 4', () => {
    let Options: any = {
        weekOptions: {
            minAlphabets: 4,
            minNumerics: 3,
            minSpecialChars: 0,
            maxAlphabets: 8,
            maxNumberics: 5,
            maxSpecialChars: 0
        },
        mediumOptions: {
            minAlphabets: 8,
            minNumerics: 4,
            minSpecialChars: 2,
            maxAlphabets: 15,
            maxNumberics: 6,
            maxSpecialChars: 4
        },
        strongOptions: {
            minAlphabets: 15,
            minNumerics: 6,
            minSpecialChars: 4,
            maxAlphabets: 20,
            maxNumberics: 8,
            maxSpecialChars: 4
        }
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdf123',Options)
    let myExpectations = "week"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStrength==> case 5', () => {
    let Options: any = {
        weekOptions: {
            minAlphabets: 4,
            minNumerics: 3,
            minSpecialChars: 0,
            maxAlphabets: 8,
            maxNumberics: 5,
            maxSpecialChars: 0
        },
        mediumOptions: {
            minAlphabets: 8,
            minNumerics: 4,
            minSpecialChars: 2,
            maxAlphabets: 15,
            maxNumberics: 6,
            maxSpecialChars: 4
        },
        strongOptions: {
            minAlphabets: 15,
            minNumerics: 6,
            minSpecialChars: 4,
            maxAlphabets: 20,
            maxNumberics: 8,
            maxSpecialChars: 4
        }
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfghjkf1234@#',Options)
    let myExpectations = "good"
    expect(testedMethodResult).toBe(myExpectations);
});

test('PasswordUtils ==> CheckpasswordStrength==> case 6', () => {
    let Options: any = {
        weekOptions: {
            minAlphabets: 4,
            minNumerics: 3,
            minSpecialChars: 0,
            maxAlphabets: 8,
            maxNumberics: 5,
            maxSpecialChars: 0
        },
        mediumOptions: {
            minAlphabets: 8,
            minNumerics: 4,
            minSpecialChars: 2,
            maxAlphabets: 15,
            maxNumberics: 6,
            maxSpecialChars: 4
        },
        strongOptions: {
            minAlphabets: 15,
            minNumerics: 6,
            minSpecialChars: 4,
            maxAlphabets: 20,
            maxNumberics: 8,
            maxSpecialChars: 4
        }
    }
    let testedMethodResult = passwordUtils.CheckPasswordStrength('asdfghjklqwertyf123456!@#$',Options)
    let myExpectations = "strong"
    expect(testedMethodResult).toBe(myExpectations);
});
