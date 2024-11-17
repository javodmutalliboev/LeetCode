/**
 *
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  //   if (!new.target) {
  //     return new ListNode(val, next);
  //   }
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;

  /*
  
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (!list1 && list2) {
    return null;
  }
  
  let head = list1;
  while (head.next) {
    head = head.next;
}
head.next = list2;

head = list1;
let length = 0;
while (head) {
    length++;
    head = head.next;
}

head = list1;
while (length--) {
    let h = head;
    let finished = true;
    while (h.next) {
      if (h.val > h.next.val) {
        finished = false;
        [h.val, h.next.val] = [h.next.val, h.val];
      }
      h = h.next;
    }
    if (finished) {
        break;
    }
}

return list1;
*/
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);
let output = "";
while (mergedList) {
  output += mergedList.val + " -> ";
  mergedList = mergedList.next;
}
console.log(output);
