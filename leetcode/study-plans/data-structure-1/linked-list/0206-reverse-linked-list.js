/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative:

function reverseList_1(head) {
	let prev = null,
		next = null,
		current = head;
	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}

// Recursive:

function reverseList_2(head) {
	let newHead;
	if (!head) return null;
	newHead = head;
	if (head.next) {
		newHead = reverseList(head.next);
		head.next.next = head;
	}
	head.next = null;
	return newHead;
}
