/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
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
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// const h1 = new ListNode(3);
// const l2 = new ListNode(2);
// const l3 = new ListNode(0);
// const l4 = new ListNode(-4);
// const l5 = new ListNode(5);
// const l6 = new ListNode(6);
// h1.next = l2;
// l2.next = l3;
// l3.next = l4;
// l4.next = l5;
// l5.next = l6;
// l6.next = l3;
// 这是一道数学题
// 快指针速度是慢指针速度的2倍，慢指针走一圈，快指针必定会相遇。
// 快指针先入环，所以快慢指针必定在第一圈环内相遇。
// 相遇后让快指针从头开始，速度和慢指针一样。二者再次相遇的位置是入环点。

var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast) {
        // 没有环
        if (!fast.next) return null;
        fast = fast.next.next;
        slow = slow.next;
        // 相遇
        if (slow === fast) {
            // 重新开始跑圈
            fast = head;
            while (true) {
                if(fast === slow) {
                    return fast;
                }
                fast = fast.next;
                slow = slow.next;
            }
        };
    }
    return null;
};
// console.log(detectCycle(h1));
// @lc code=end

