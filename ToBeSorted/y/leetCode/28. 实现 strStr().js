const solution = (s1, s2) => {
  return s2 === '' ? 0 : s1.split(s2)[0] === s1 ? -1 : s1.split(s2)[0].length;
};

console.log(solution('asbbaa', 'bba'));

const solution2 = (s1, s2) => {
  if (!s2) {
    return 0;
  } else if (s1.length < s2.length) {
    return -1;
  } else if (s1.length === s2.length) {
    return s1 === s2 ? 1 : -1;
  } else {
    for (let i = 0; i <= s1.length - s2.length; i++) {
      console.log(s1[i], s2[0]);
      if (s1[i] !== s2[0]) {
        continue;
      }

      console.log(s1.substring(i, i + s2.length));

      if (s1.substring(i, i + s2.length) === s2) {
        return i;
      }
    }

    return -1;
  }
};

console.log(solution2('hello', 'll'));
