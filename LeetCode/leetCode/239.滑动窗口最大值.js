// https://leetcode-cn.com/problems/sliding-window-maximum/

const solution = (nums, k) => {
  let deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i - k >= deque[0]) {
      deque.shift();
    }

    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  console.log(result);

  return result;
};

solution([9, 11], 2);
