const solution = (list1, list2) => {
  //
};

const changeCurNode = (node1, node2) => {
  if (node1 === null) {
    return node2;
  } else if (node2 === null) {
    return node1;
  }

  if (node1.val > node2.val) {
    node2.next = changeCurNode(node1, node2.next);
    return node2;
  } else {
    node1.next = changeCurNode(node1.next, node2);

    return node1;
  }
};
