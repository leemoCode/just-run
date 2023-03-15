// https://leetcode-cn.com/problems/count-and-say/submissions/
const solution2 = (n) => {
  if (n === 1) {
    return '1';
  }

  const lastResult = solution2(n - 1).split('');

  let curItemNum = 1;

  let curResult = [];

  for (let j = 0; j < lastResult.length; j++) {
    // core code
    if (lastResult[j + 1] === lastResult[j]) {
      curItemNum += 1;
    } else {
      curResult.push(curItemNum);
      curResult.push(lastResult[j]);

      curItemNum = 1;
    }
  }

  return curResult.join('');
};

solution2(2);
