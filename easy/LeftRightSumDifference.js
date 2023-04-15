var leftRigthDifference = function(nums) {
    let leftSum = [...nums];
    let rightSum = [...nums];
    let answer = []
    leftSum.unshift(0);
    leftSum.pop();
    rightSum.push(0);
    rightSum.shift();

    for (let index = 0; index <=nums.length-1; index++) {
       leftSum[index] = leftSum[index] + leftSum[index-1] || 0;
    }

    for (let index = nums.length-1; index >=0; index--) {
        rightSum[index] = rightSum[index] +  rightSum[index+1] || 0
    }

    for (let index = 0; index <=nums.length-1; index++) {
        answer.push(Math.abs(leftSum[index] - rightSum[index]))
    }

    return answer;
};

const nums = [10, 4, 8, 3];
const diff = leftRigthDifference(nums);