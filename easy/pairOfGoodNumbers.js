var numIdenticalPairs = function(nums) {
    let count = 0;
    for(i=0; i<=nums.length-1; i++) {
        for(j=0; j<=nums.length-1; j++){
            if(i<j){
                if(nums[i] === nums[j]){
                    count++
                }
            }
        }
    }
    return count
};

const nums = [1, 2, 3, 1, 1, 3];
const result = numIdenticalPairs(nums);