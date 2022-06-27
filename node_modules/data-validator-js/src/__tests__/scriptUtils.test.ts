import ScriptUtilities from "./../utilities/scriptUtils";
test('ScriptUtilities ==> IsNullOrEmpty ==> case 1', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined(null);
    let myAssumptions = true
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsNullOrEmpty ==> case 2', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined(undefined);
    let myAssumptions = true
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsNullOrEmpty ==> case 3', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined({});
    let myAssumptions = false
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsNullOrEmpty ==> case 4', () => {
    let testedResult = ScriptUtilities.IsNullOrUndefined({sdsgf:[]});
    let myAssumptions = false
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> IsMacMachine ==> case 1', () => {
    let testedResult = ScriptUtilities.IsMacMachine();
    let myAssumptions = false
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> getNumericValue ==> case 1', () => {
    let testedResult = ScriptUtilities.getNumericValue('name');
    let myAssumptions = NaN
    expect(testedResult).toBe(myAssumptions);
});
test('ScriptUtilities ==> getNumericValue ==> case 2', () => {
    let testedResult = ScriptUtilities.getNumericValue('123');
    let myAssumptions = 123
    expect(testedResult).toBe(myAssumptions);
});

