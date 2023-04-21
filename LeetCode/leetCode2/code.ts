interface ListNode {
  val: number;
  next: ListNode | null;
}

export const question344 = (s: string[]) => {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  return s;
}

export const question387 = (s: string) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1
}

export const question387_1 = (s: string) => {
  const hash: {
    [key: string]: number;
  } = {};
  for (const item of s) {
    hash[item] = (hash[item] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

export const question14 = (strs: string[]) => {
  // 取第一个字符串做初始最长子串
  let curRes = strs[0];

  for (const item of strs) {
    // 遍历每个字符串

    let i = 0;
    for (; i < item.length; i++) {
      // 逐位比较 不等于就退出循环
      if (curRes[i] !== item[i]) {
        break;
      }
    }
    curRes = curRes.slice(0, i);
  }

  return curRes;
}

export const question088 = (nums1: number[], m: number, nums2: number[], n: number) => {
  // 取两个数组要拼接范围的末位index值
  m--;
  n--;

  // nums1的初始长度为m+n 所以初始赋值位为nums1的最后一个元素位
  let curIndex = nums1.length - 1;

  // 只要nums2没有遍历结束就继续循环
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[curIndex] = nums1[m];

      curIndex--;
      m--;
    } else {
      nums1[curIndex] = nums2[n];

      curIndex--;
      n--;
    }
  }
  // 无需return 最后结果放在nums1内即可
}

export const questionO03 = (arr: number[]) => {
  // 建立哈希表
  const hash: { [key: number]: number } = {};

  for (const item of arr) {
    if (hash[item]) {
      return item;
    }

    hash[item] = 1;
  }
};


export const question349 = (arr1: number[], arr2: number[]) => {
  const hash: { [key: number]: number } = {};

  for (const item of arr1) {
    hash[item] = 1;
  }

  const res = new Set();

  for (const item of arr2) {
    // 出现交集
    if (hash[item]) {
      res.add(item);
    }
  }

  return [...res] as number[];
};

export const question021 = (curNode1: ListNode | null, curNode2: ListNode | null) => {
  if (curNode1 === null) {
    return curNode2;
  }

  if (curNode2 === null) {
    return curNode1;
  }

  // 返回值较小的节点，并将较小的节点指针向后移动
  if (curNode1.val > curNode2.val) {
    curNode2.next = question021(curNode1, curNode2.next);

    return curNode2;
  } else {
    curNode1.next = question021(curNode1.next, curNode2);

    return curNode1;
  }
};

export const question203 = (head: ListNode | null, val: number) => {
  if (head === null) {
    return null;
  }

  (head.next as ListNode | null) = question203(head.next, val);

  return head.val === val ? head.next : head;

};

export const question206 = (head: ListNode | null) => {
  if (head === null) {
    return head;
  }

  let cur = head;
  let prev = null;

  while (cur) {
    const next = cur.next;

    cur.next = prev;

    prev = cur;
    (cur as ListNode | null) = next;
  }

  return prev;
};

export const question206_1 = (head: ListNode | null) : (ListNode | null) => {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = question206_1(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};

export const question242 = (s1: string, s2: string) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const map1: { [key: string]: number } = {};

  for (const item of s1) {
    map1[item] = map1[item] ? map1[item] + 1 : 1;
  }

  for (const item of s2) {
    if (!map1[item]) {
      return false;
    }

    map1[item] = map1[item] - 1;

    if (map1[item] < 0) {
      return false;
    }
  }

  return true;
};


export const question169 = (arr: number[]) => {
  const hash: { [key: string]: number } = {};

  for (const item of arr) {
    hash[item] = hash[item] ? hash[item] + 1 : 1;

    if (hash[item] > arr.length / 2) {
      return item;
    }
  }
}

export const question136 = (arr: number[]) => {
  let res = 0;

  for (const item of arr) {
    res ^= item;
  }

  return res;
}

export const question011 = (arr: number[]) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let res = 0;

  while (leftIndex < rightIndex) {
    const lowerValue = arr[leftIndex] < arr[rightIndex] ? arr[leftIndex] : arr[rightIndex];

    res = Math.max(res, lowerValue * (rightIndex - leftIndex));

    arr[leftIndex] < arr[rightIndex] ? leftIndex++ : rightIndex--;
  }

  return res;

}
