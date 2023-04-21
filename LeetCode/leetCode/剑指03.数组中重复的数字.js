const solution = (nums) => {
  const hash = {};

  for (const item of nums) {
    if (hash[item]) {
      return item;
    } else {
      hash[item] = 1;
    }
  }
};

console.log(solution([2, 3, 1, 0, 2, 5, 3]));
