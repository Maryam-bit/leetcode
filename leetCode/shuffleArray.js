var shuffle = function(nums, n) {
    var arr = []
    for(var i = 0; i<n; i++){
        arr.push(nums[i], nums[n+i])
    }
    return arr
};
shuffle([1,2,3,4,5,6], 3)

