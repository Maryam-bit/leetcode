/*
========== Question:  =========
57. Insert Interval

========== Description: =========== 
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

========== Example 1: ============  
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

========== Example 2: ============  
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/




var findMinArrowShots = function(points) {
    if (points.length === 0) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);
    
    let arrow = 1;
    let interval = points[0];

    for(let i = 1; i<=points.length-1; i++) {
        if(interval[1] < points[i][0]) {
            arrow++
            interval = points[i];
        } 
    }
    return arrow;
};