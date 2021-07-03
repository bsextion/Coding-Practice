

//create a firstPointer, secondPointer, set to first Node
//create a new node and result Pointer

//while firstpointer and second pointer are NOT pointing to null
//if firstPointer is greater than secondPointer, store second pointer in result pointer, move resultpointer and secondPointer
//else, store firstPointer in the resultPointer and move to next



//while firstPointer is not pointing to null
//store firstPointer in the resultPointer and move to next


//while secondPointer is not pointing to null
//store secondPointer in the resultPointer and move to next

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var mergeTwoLists = function(l1, l2) {
    let resultNode = new ListNode(0, null);
  let currNode = resultNode;

  while(l1 != null && l2 != null){

      if(l1.val < l2.val){
       currNode.next = l1;
       l1 = l1.next;
      }
      else { 
       currNode.next = l2;
       l2 = l2.next;
       }
       currNode = currNode.next;
      }


      while(l1 != null){
       currNode.next = l1;
       l1 = l1.next;
       currNode = currNode.next;
      }

      while(l2 != null){
       currNode.next = l2;
       l2 = l2.next;
       currNode = currNode.next;
   }

   return resultNode.next;

};


let l1 = new ListNode(1);
let l11 = new ListNode(2)
let l12 = new ListNode(4)

l1.next = l11;
l11.next = l12

let l2 = new ListNode(1);
let l21 = new ListNode(3)
let l22 = new ListNode(4)

l2.next = l21;
l21.next = l22

mergeTwoLists(l1,l2);