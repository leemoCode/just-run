function solution(nums1, m, nums2, n) {
  nums1 = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort();

  return nums1;
}

console.log(solution([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
