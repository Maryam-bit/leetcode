/*
========== Question:  =========
11. Container With Most Water

========== Description: =========== 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

========== Example 1: ============ 
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

========== Example 2: ============ 
Input: height = [1,1]
Output: 1
*/


const maxArea = function(height) {
    let waterStored = 0;

    let l = 0;
    let r = height.length-1;
    
    for(let i=0; i<=height.length-1; i++) {
        const space = Math.abs(l-r);
        const smallerHight = Math.min(height[l], height[r]);
        waterStored = Math.max(smallerHight * space, waterStored);
        if(height[l] < height[r]) l++;
        else r--;
    }
    return waterStored;
}


// const height = [1,2,1]
// const height = [1,2,4,3]
// const height = [1,1]
const height =[1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));