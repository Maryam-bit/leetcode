var addTwoNumbers = function(l1, l2) {
    let l1Reverse =+(l1.reverse().join(""))
    let l2Reverse =+(l2.reverse().join(""))
    let sum = l1Reverse + l2Reverse
    let result = (sum.toString().split('').map(Number)).reverse()
    return result;
};
// addTwoNumbers([2,4,3],[5,6,4])
addTwoNumbers([2,4,3],[5,6,4])