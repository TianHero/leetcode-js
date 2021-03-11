/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */

function getNext(n) {
    let str = n + "";
    let sum = 0;
    for (const v of str) {
        sum += v * v;
    }
    return sum
}
var isHappy = function(n) {
    let slow = n;
    let fast = getNext(n);
    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast))
    }
    return fast === 1;
};
console.log(isHappy(19));
// @lc code=end

