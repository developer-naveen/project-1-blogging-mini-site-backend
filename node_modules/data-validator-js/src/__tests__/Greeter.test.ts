
 import { Greeter, Transaction, Customer, ScriptUtils } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('My transctions', () => {
  const cust = new Customer("1","mani", "kumar", 9700911)
  let trans = new Transaction("1",[],100, "card",0, "11", cust, new Date())
  expect(trans.id).toBe('1');
});
test('ScriptUtils => getNumericValue ==> positive', () => {
  expect(ScriptUtils.getNumericValue('12')).toBe(12);
});
test('ScriptUtils => getNumericValue ==> negative', () => {
  expect(ScriptUtils.getNumericValue('')).toBe(null);
});