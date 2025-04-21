/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    const total = m + n;
    const half = Math.floor((total + 1) / 2);

    let left = 0;
    let right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = half - i;

        const nums1Left = i > 0 ? nums1[i - 1] : -Infinity;
        const nums1Right = i < m ? nums1[i] : Infinity;
        const nums2Left = j > 0 ? nums2[j - 1] : -Infinity;
        const nums2Right = j < n ? nums2[j] : Infinity;

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            if (total % 2 === 1) {
                return Math.max(nums1Left, nums2Left);
            }
            return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
        }
        if (nums1Left > nums2Right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    return 0;
};