/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;

    const oldToNew = new Map();

    for (let curr = head; curr; curr = curr.next) {
        oldToNew.set(curr, new Node(curr.val));
    }

    for (let curr = head; curr; curr = curr.next) {
        const newNode = oldToNew.get(curr);
        newNode.next = oldToNew.get(curr.next) || null;
        newNode.random = oldToNew.get(curr.random) || null;
    }

    return oldToNew.get(head);
};