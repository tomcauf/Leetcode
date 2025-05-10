/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let prevGroupEnd = dummy;

    function hasKNodes(start, k) {
        let count = 0;
        let current = start;
        while (current && count < k) {
            current = current.next;
            count++;
        }
        return count === k;
    }

    while (head && hasKNodes(head, k)) {
        let groupStart = head;
        let current = head;
        let prev = null;
        let next = null;

        for (let i = 0; i < k; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        prevGroupEnd.next = prev;

        groupStart.next = current;

        prevGroupEnd = groupStart;
        head = current;
    }

    return dummy.next;
};