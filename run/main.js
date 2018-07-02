/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let h = new ListNode(),
    p = h
    while (l1 || l2) {
        if (!l2 || (l1 && l1.val < l2.val)) {
            h.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            h.next = new ListNode(l2.val)
            l2 = l2.next
        }
        h = h.next
    }
    return p.next
};