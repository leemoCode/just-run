function delMiddleNode (node) {
    node.val = node.next.val;
    node.next = node.next.next;
}