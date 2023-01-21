/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//  Floyd's Tortoise & Hare algorithm:

function hasCycle(head) {
	let fast = head,
		slow = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (fast == slow) return true;
	}
	return false;
}
