var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let result = new ListNode(-1)
    let dummy_list = result
    
    while(l1 || l2 || carry) {
        let l1_value = l1 ? l1.val : null
        let l2_value = l2 ? l2.val : null
        
        
        let nxtDigit = (l1_value + l2_value + carry) % 10
        result.next = new ListNode(nxtDigit)
        result = result.next
        
        carry = Math.floor((l1_value + l2_value + carry) / 10)
        
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        
    }
     console.log(dummy_list.next);
     return dummy_list.next
 };


class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
    }
}


    
 addTwoNumbers([2,4,3][5,6,4])