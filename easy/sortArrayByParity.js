var sortArrayByParity = function (nums) {
    let arr = []
    let even = nums.filter(number => number % 2 == 0)
    let odd = nums.filter(number => number % 2 != 0)
    return even.concat(odd)
};
sortArrayByParity([3, 1, 2, 4])