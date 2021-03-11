/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
l1 = new ListNode(1);
l2 = new ListNode(2);
l3 = new ListNode(3);
l4 = new ListNode(4);
l1.next = l2;
l2.next = l3;
l3.next = l4;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;
    let pre = null;
    let cur = head;
    let next = head.next;
    while(cur) {
        // 这里断掉老链表
        cur.next = pre;
        // 连上新链表
        pre = cur;
        // 再连上老链表
        cur = next;
        next = cur ? cur.next : null;
        // if(cur) {
        //     next = cur.next
        // } else {
        //     next = null;
        // }
    }
    return pre
};
// console.log(reverseList(l1));
// @lc code=end

