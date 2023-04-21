interface ListNode {
  val: number;
  next: ListNode | null;
}

const question004 = (arr1: number[], arr2: number[]) => {
  let m = arr1.length - 1;
  let n = arr2.length - 1;
  let lastIndex = arr1.length + arr2.length - 1;

  while (n >= 0) {
    if (m < 0 && lastIndex >= 0) {
      arr1[lastIndex] = arr2[n];
      n--;
      lastIndex--;
    }
    if (arr1[m] < arr2[n]) {
      arr1[lastIndex] = arr2[n];
      n--;
      lastIndex--;

    } else {
      arr1[lastIndex] = arr1[m];
      m--;
      lastIndex--;
    }
  }

  console.log(arr1);

  return arr1.length % 2 === 1 ? arr1[(arr1.length - 1) / 2] : (arr1[arr1.length / 2] + arr1[arr1.length / 2 - 1]) / 2

}

const res = question004([1, 3], [1]);

console.log('res', res);
