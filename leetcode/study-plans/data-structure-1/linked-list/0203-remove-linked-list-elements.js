/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function removeElements_1(head, val) {
	if (!head) return head;

	let list = new ListNode(),
		newHead = list;

	while (head) {
		if (head.val !== val) {
			let newNode = new ListNode(head.val);
			list.next = newNode;
			list = list.next;
		}
		head = head.next;
	}
	return newHead.next;
}

//  Two Pointers:

function removeElements_2(head, val) {
	let list = new ListNode(0, head),
		prev = list,
		cur = head;

	while (cur) {
		if (cur.val === val) prev.next = cur.next;
		else prev = cur;
		cur = cur.next;
	}
	return list.next;
}
