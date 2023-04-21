// https://leetcode-cn.com/problems/palindrome-linked-list/

const solution = (head) => {
  let left = head;
  const solutionCurGroup = (right) => {
    if (right === null) {
      return true;
    }
    const resLast = solutionCurGroup(right.next);
    const curRes = resLast && left.val === right.val;
    left = left.next;
    return curRes;
  };

  return solutionCurGroup(head);
};

solution();
