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

function getSize(head: ListNode | null) : number{
    let temp = head;
    let ans = 0;
    while(temp!=null){
        ans++;
        temp = temp.next;
    }
    return ans;
}

function getAt(head:ListNode | null,target:number) :  ListNode | null{
    let temp = head;
    let idx = 0;
    while(idx < target){
        idx++;
        temp = temp.next;
    }
    return temp;
}

function middleNode(head: ListNode | null): ListNode | null {
    let size = getSize(head);
    return getAt(head,Math.floor(size/2));
};