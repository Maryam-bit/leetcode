function sortedSquares(nums: number[]): number[] {
    const squaredNumsArray = nums.map(num => num*num);
    const sortedArray = squaredNumsArray.sort((a,b) => a-b);
    return sortedArray;
};

const numbers: number[] = [-4, -1, 0, 3, 10];

sortedSquares(numbers);