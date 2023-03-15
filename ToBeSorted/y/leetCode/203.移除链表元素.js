const remove = function (head, val) {
  if (head === null) {
    return;
  }
  if (head.val === val) {
    head.val = head.next.val;
    head.next = head.next.next;
  }

  remove(head.next, val);
};
