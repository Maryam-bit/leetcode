/*
========== Question:  =========
274. H-Index

========== Description: =========== 
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

========== Example 1: ============  
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

========== Example 2: ============  
Input: citations = [1,3,1]
Output: 1
*/

var hIndex = function(citations) {
    citations.sort((a,b)=> b-a)
    let hIndex = 0
    for(let i = 0; i<=citations.length-1; i++) {
        let count = 0

        if(citations[i] > 0) {
            for(let j=0; j<=citations.length-1; j++) {
                if(citations[j] >= citations[i] && j < citations[i]) {
                    count += 1
                }                
            }
            hIndex = Math.max(hIndex, count)
        }
    }
    return hIndex;
};


// const citations = [3,0,6,1,5]
// const citations = [1]
// const citations = [0]
// const citations = [100]
const citations = [1, 3, 1]
console.log(hIndex(citations))


// ============= Another solution ==============
// const hIndex = (citations) => {
//     citations.sort((a, b) => b - a);
//     let i = 0;
//     while (citations[i] > i) i++;
//     return i;
// };

// ============= Another solution ==============
// var hIndex = function(citations) {
//     let n = citations.length;
//     let ans = 0;

//     citations.sort((a, b) => a - b);

//     for (let i = 0; i < n; i++) {
//         ans = Math.max(ans, Math.min(citations[i], n - i));
//     }

//     return ans;
// };