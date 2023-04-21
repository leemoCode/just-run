// https://leetcode-cn.com/problems/roman-to-integer/

const solution = (s) => {
  s = s.replace('IV', 'a');
  s = s.replace('IX', 'b');
  s = s.replace('XL', 'c');
  s = s.replace('XC', 'd');
  s = s.replace('CD', 'e');
  s = s.replace('CM', 'f');

  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    a: 4,
    b: 9,
    c: 40,
    d: 90,
    e: 400,
    f: 900,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    res += hash[s[i]];
  }

  return res;
};
