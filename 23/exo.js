/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // Edge case: if lists is empty, return null
    if (lists.length === 0) return null;

    // Create a min-heap structure for JavaScript
    // Since JavaScript doesn't have a built-in priority queue/heap,
    // we'll use a simple array and maintain it as a min-heap
    const minHeap = [];

    // Helper function to maintain heap property (heapify-up)
    const heapifyUp = (index) => {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && minHeap[parentIndex].val > minHeap[index].val) {
            // Swap with parent
            [minHeap[parentIndex], minHeap[index]] = [minHeap[index], minHeap[parentIndex]];
            heapifyUp(parentIndex);
        }
    };

    // Helper function to maintain heap property (heapify-down)
    const heapifyDown = (index) => {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;

        if (leftChildIndex < minHeap.length && minHeap[leftChildIndex].val < minHeap[smallest].val) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < minHeap.length && minHeap[rightChildIndex].val < minHeap[smallest].val) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            // Swap with smallest child
            [minHeap[index], minHeap[smallest]] = [minHeap[smallest], minHeap[index]];
            heapifyDown(smallest);
        }
    };

    // Insert function for the heap
    const insert = (node) => {
        minHeap.push(node);
        heapifyUp(minHeap.length - 1);
    };

    // Extract minimum function for the heap
    const extractMin = () => {
        if (minHeap.length === 0) return null;

        const min = minHeap[0];
        const last = minHeap.pop();

        if (minHeap.length > 0) {
            minHeap[0] = last;
            heapifyDown(0);
        }

        return min;
    };

    // Add the first node of each list to the min-heap
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            insert(lists[i]);
        }
    }

    // Create a dummy head for the result list
    const dummy = new ListNode(0);
    let current = dummy;

    // Process the min-heap until it's empty
    while (minHeap.length > 0) {
        // Extract the minimum node
        const minNode = extractMin();

        // Add it to the result list
        current.next = minNode;
        current = current.next;

        // If the extracted node has a next node, add it to the heap
        if (minNode.next !== null) {
            insert(minNode.next);
        }
    }

    return dummy.next;
};