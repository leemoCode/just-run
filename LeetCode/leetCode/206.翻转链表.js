// var reverseList = function (head) {
//   let prev = null;
//   let cur = head;

//   while (cur) {
//     const next = cur.next; // 暂存next

//     cur.next = prev; // core 改变指针指向

//     prev = cur;
//     cur = next;
//   }

//   return prev; // 注意不是返回cur
// };

// 用递归完成链表的遍历

// 何时结束：当前节点为空

// 本次递归返回什么：下一个节点

// 本次递归做什么： 使本节点head下一个节点head.next指向本节点，完成反转

const reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  const newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
};
