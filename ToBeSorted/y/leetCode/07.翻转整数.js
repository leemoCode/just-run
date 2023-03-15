// https://leetcode-cn.com/problems/reverse-integer/
const solution = (num) => {
  const result =
    num > 0
      ? num.toString().split('').reverse().join('')
      : num.toString().slice(1).split('').reverse().join('') * -1;

  if (result > 2147483647 || result < -2147483648) {
    return 0;
  }

  console.log(result);

  return result;
};

solution(655151);

// 欧几里得解法
const solution2 = (num) => {
  let abs = Math.abs(num);
  let reverseNum = 0;

  while (abs !== 0) {
    reverseNum = (abs % 10) + reverseNum * 10;

    abs = Math.floor(abs / 10);
  }

  if (reverseNum > 2147483647 || reverseNum < -2147483648) {
    return 0;
  }
  console.log(reverseNum);

  return num > 0 ? reverseNum : reverseNum * -1;
};

solution2(655151);
