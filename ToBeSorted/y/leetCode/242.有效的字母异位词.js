// https://leetcode-cn.com/problems/valid-anagram/

const solution = (string1, string2) => {
  const arr1 = string1.split('');
  const arr2 = string2.split('');

  const sortFn = (a, b) => {
    return a.charCodeAt() - b.charCodeAt();
  };

  arr1.sort(sortFn);
  arr2.sort(sortFn);

  return arr1.join('') === arr2.join('');
};

console.log(solution('asoij', 'oasji'));

// 计数累加法
const solution2 = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  let hash = {};
  for (const item of s1) {
    hash[item] = hash[item] || 0;
    hash[item] += 1;
  }

  console.log(hash);

  for (const item of s2) {
    if (!hash[item]) {
      return false;
    }

    hash[item] -= 1;
  }

  return true;
};

console.log(solution2('aacc', 'ccac'));
