var merge = function(nums1, m, nums2, n) {
    const merged = []
    let idx1 = 0;
    let idx2 = 0
    let x = 0;

    for(let i=m; i<nums1.length; i++) {
        nums1.splice(i, 1)
        i--
    }

    for(let i=n; i<nums2.length; i++) {
        nums2.splice(i, 1)
        i--
    }

    while(idx1 <= nums1.length-1 && idx2 <= nums2.length-1) {
        if(nums1[idx1] < nums2[idx2]) {
            merged[x++] = nums1[idx1++]
        } else {
            merged[x++] = nums2[idx2++]
        }
    }

    while(idx1 <= nums1.length-1) {
        merged[x++] = nums1[idx1++]
    }

    while(idx2 <= nums2.length-1) {
        merged[x++] = nums2[idx2++]
    }

    for(let i = 0, j = 0; i<=merged.length-1; i++, j++) {
        nums1[j] = merged[i]
        nums2.pop()
        m = nums1.length
        n = nums2.length
    }
};