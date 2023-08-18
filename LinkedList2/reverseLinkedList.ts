/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function reverseList(head: ListNode | null): ListNode | null {
    if(head == null) return null;
    if(head.next == null) return head;

    let prev = null;
    let curr = head;
    let next = head.next;

    while(curr != null){
        curr.next = prev;

        prev = curr;
        curr = next;
        if(next != null) next = next.next;
    }

    return prev;
};









