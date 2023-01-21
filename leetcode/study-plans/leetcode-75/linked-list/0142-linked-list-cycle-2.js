/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function detectCycle(head) {
	if (!head || !head.next) return null;

	let slow = head,
		fast = head,
		pointer = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
		if (slow === fast) break;
	}

	if (fast !== slow) return null;

	while (pointer !== slow) {
		pointer = pointer.next;
		slow = slow.next;
	}
	return pointer;
}
