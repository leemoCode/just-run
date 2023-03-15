const solution = (s) => {
  s = s
    .trim()
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, '');

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] === s[j]) {
      s++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};

const solution2 = (s) => {
  const s1 = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

  const s2 = s1.split('').reverse().join('');

  return s1 === s2;
};
