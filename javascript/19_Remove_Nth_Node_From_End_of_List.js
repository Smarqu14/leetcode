/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let slow = dummyNode;
  let fast = dummyNode;
  
  for (let i = 0; i < n+1; i++) {
    fast = fast.next;
  }
  
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  
  slow.next = slow.next.next;
  
  return dummyNode.next;
};