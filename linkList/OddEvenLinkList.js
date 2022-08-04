function oddEvenLinkList(head) {
    
    if (head === null) return null;

    let odd = head
    let even = odd.next
    let evenHead = even

    while (even !== null && even.next !== null) { 
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next

    }

    odd.next = evenHead
    return head
}
//  odd  even     odd  even odd
// [1,   2 ,     3,    4,    5]   output = 1 -> 3 -> 5 -> 2 -> 4
// head = 1 
// odd = 1
// evenHead = odd.next =  2
// time complexity O(n)
// space complexity O(1)
