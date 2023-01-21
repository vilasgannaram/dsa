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

function middleNode_1(head) {
	let length = 0,
		current = head;

	while (current) {
		length++;
		current = current.next;
	}

	let cur = head,
		mid = Math.floor(length / 2),
		idx = 0;

	while (idx !== mid) {
		cur = cur.next;
		idx++;
	}

	return cur;
}

//  Floyd's Tortoise & Hare algorithm:

function middleNode_2(head) {
	let fast = head,
		slow = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}
	return slow;
}
