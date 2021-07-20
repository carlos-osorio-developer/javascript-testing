import functs from "./functions";

test('stringLength of Wharever to equal 8', () => {
  expect(functs.stringLength('Wharever')).toBe(8);
});

test('stringLength of empty string returns an error', () => {
  expect(() => functs.stringLength('')).toThrow(Error);
});

test('expect to return reversed string', () => {
  expect(functs.reverseString('alagordadrogala')).toBe('alagordadrogala')
});

test('expect to return reversed string', () => {
  expect(functs.reverseString('animal')).toBe('lamina')
});