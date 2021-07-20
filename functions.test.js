import functs from "./functions";
import calc from "./calc";

describe('Functions checking', () => {

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
},

describe('Calculator operations', () => {

  test('expect return to be 9', () => {
    expect(calc.add(3, 6)).toBe(9);
  })

  test('expect return to be concatenation', () => {
    expect(calc.add('3', 6)).toBe("36");
  })

  test('expect return to be concatenation', () => {
    expect(calc.add(3, '7')).toBe('37');
  })

  test('expect return to be 3', () => {
    expect(calc.subs(9, 6)).toBe(3);
  })

  test('expect to convert from string to integer', () => {
    expect(calc.subs('7', 6)).toBe(1);
  })

  test('expect to return negative numbers', () => {
    expect(calc.subs(4, '7')).toBe(-3);
  })

  test('expect return to be 2', () => {
    expect(calc.divide(12, 6)).toBe(2);
  })

  test('expect to convert from string to integer', () => {
    expect(calc.divide('18', 6)).toBe(3);
  })

  test('expect to return Infinity if divided by 0', () => {
    expect(calc.divide(12, 0)).toBe(Infinity);
  })

  test('expect return to be 10', () => {
    expect(calc.mult(2, 5)).toBe(10);
  })

  test('expect to convert from string to integer', () => {
    expect(calc.mult('7', 5)).toBe(35);
  })

  test('expect return negative number when having one negative factor', () => {
    expect(calc.mult(-3, 8)).toBe(-24);
  })
}))