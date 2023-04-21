const solution = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
};
solution('keetdaojf');

const solution2 = (s) => {
  const hash = {};

  for (const item of s) {
    hash[item] = hash[item] || 0;
    hash[item] += 1;
  }

  console.log(hash);

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

solution2('loveleetcode');
