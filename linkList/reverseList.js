// linklist reverse
// time complexity O(n)
// space complexity O(1)
// 1->2->3->4 
// 4->3->2->1

function reverseLinkList(head) {
    let prevNode = null;
    let nextNode 

    while (head !== null) {
        nextNode = head.next // nextNode = 2
        head.next = prevNode //head.next = null
        prevNode = head // prevNode = 1
        head = nextNode  // head = 2
    }

    return head
}