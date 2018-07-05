/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let i = 0,
        j = nums.length - 1,
        mid
    if (nums[i] === target) return i
    if (nums[j] === target) return j
    while (i < j) {
        mid = parseInt((i + j) / 2)
        if (i === mid || j === mid) {
            return -1
        }
        if (nums[mid] === target) return mid

        // 左边规律
        if (nums[i] <= nums[mid]) {
            if (nums[i] <= target && target <= nums[mid]) {
                j = mid
            } else {
                i = mid
            }
        } else {
            if (nums[mid] <= target && target <= nums[j]) {
                i = mid
            } else {
                j = mid
            }
        }
    }
    return -1
};