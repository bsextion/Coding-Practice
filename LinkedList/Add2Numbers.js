
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    //set intiial values to num1 and num2 to 0
    let remainder = 0;
    let result = new ListNode(0);
    let curNode = result;
    while (l1 || l2 || remainder) {
        let sum = 0;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }


        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }


        sum += remainder;
        //set remainder to 0 ( this will be the carry)


        if (sum > 9) {

            remainder = Math.floor(sum/10);
            sum = sum%10;

        }
        else {
            remainder = 0;

        }

        curNode.next = new ListNode(sum);
        curNode = curNode.next;

    }
    return result.next;
    };
    let l1 = new ListNode(9);

    let l2 = new ListNode(1);


    addTwoNumbers(l1, l2);