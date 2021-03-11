/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const h1 = new ListNode(3);
const l2 = new ListNode(2);
const l3 = new ListNode(0);
const l4 = new ListNode(-4);
h1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l3;
// 方法1，弄一个哈希表记录节点，缺点：会多开辟一个哈希表的内存空间。
// 方法2，快慢指针，快指针一次走2格，慢指针一次走1格，最终快慢指针会在环内某个节点相遇。
// 如果有环的话，那么近了环就出不来了，快慢指针进环后必定会相遇
// next为null的话就必然没没有环
var hasCycle = function(head) {
    if(!head) return false;
    let fast = head;
    let slow = head;
    while (fast) {
        if(!fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};
// @lc code=end

