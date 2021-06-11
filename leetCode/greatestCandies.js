var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies)
    let arr= [];
    for (let i=0; i<candies.length; i++){
        arr.push(candies[i]+extraCandies >= maxCandies)
    }
    return arr;
};
kidsWithCandies([2,3,5,1,3], 3)