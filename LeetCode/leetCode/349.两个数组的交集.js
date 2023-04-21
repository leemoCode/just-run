const solution = (nums1, nums2) => {
  const hash = {};
  const result = new Set();

  for (const item of nums1) {
    hash[item] = 1;
  }

  for (const item of nums2) {
    if (hash[item]) {
      result.add(item);
    }
  }

  return [...result];
};

console.log(solution([1, 2, 2, 1], [2, 2]));
