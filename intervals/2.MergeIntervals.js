/*
========== Question:  =========
56. Merge Intervals

========== Description: =========== 
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

========== Example 1: ============  
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

========== Example 2: ============  
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

var merge = function(intervals) {
    var sort2DArr = function(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    const sortedArr = intervals.sort(sort2DArr);
    const result = [];
    let interval = sortedArr[0];

    for(let i = 1; i <= sortedArr.length-1; i++) {
        if(interval[1] >= sortedArr[i][0]) {
            interval[1] = Math.max(sortedArr[i][1], interval[1]);
        } else {
            result.push(interval);
            interval = sortedArr[i];
        }
    }

    result.push(interval)
    return result;
};

