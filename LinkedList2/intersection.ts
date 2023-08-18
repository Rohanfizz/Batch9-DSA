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
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let sz1 = getSize(headA);
    let sz2 = getSize(headB);

    let t1 = headA;
    let t2 = headB;

    while(sz1 != sz2){
        if(sz1>sz2){
            sz1--;
            t1 =t1.next;
        }else if(sz2 > sz1){
            sz2--;
            t2 = t2.next;
        }
    }

    while(t1!=t2){
        t1 = t1.next;
        t2 = t2.next;
    }
    return t1;
};











    