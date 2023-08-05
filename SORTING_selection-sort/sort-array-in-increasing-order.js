function sortArray(array, n) {
    let i, j, min_index;

    // loop through all the elements
    for(i=0; i<=n-1; i++) {
        min_index = i;

        // finding mininum from unsorted array 
        for(j=i+1; j<=n-1; j++) {
            if(array[j] < array[min_index])
            min_index = j;
        }

        // swap the minimum element with the current element 
        swap(array, i, min_index)
    }
}


function swap (array, point1, point2) {
    const temp = array[point1];
    array[point1] = array[point2];
    array[point2] = temp;
}

const array = [4, 1, 3, 9, 7];
const n = 5;
sortArray(array, n);
console.log(array)