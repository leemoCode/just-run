// https://leetcode-cn.com/problems/power-of-three/

const solution = (n) => {
  if (n === 1) return true;
  for (let i = 3; i <= n; i = 3 * i) {
    if (i === n) {
      return true;
    }
  }

  return false;
};

console.log(solution(1));

const solution1 = (n) => {
  while (n && n % 3 === 0) {
    n /= 3;
  }

  return n === 1;
};

console.log(solution1(1));
