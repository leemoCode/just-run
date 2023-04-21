const solution = (nums1, m, nums2, n) => {
  nums1 = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort();
};

console.log(solution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;
  m--;
  n--;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[i--] = nums1[m--];
    } else {
      nums1[i--] = nums2[n--];
    }
  }
};

const solution2 = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;

  m--;
  n--;

  while (n >= 0) {
    nums1[m] > nums2[n] ? (nums1[i--] = nums1[m--]) : (nums1[i--] = nums2[n--]);
  }
};
