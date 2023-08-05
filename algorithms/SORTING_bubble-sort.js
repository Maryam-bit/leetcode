
function sortArray (array) {
    let swapped;
    do {
        swapped = false
        for(i=0; i<=array.length-1; i++) {
            if(array[i] > array[i+1])
            {
                const temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true
            }
        }
    }
    while(swapped)
}


function sortArray2 (array) {
    let swapped = false;
    for(i=0; i<=array.length-1; i++) {
        swapped = false;
        for(j=0; j<=array.length-1; j++) {
            if(array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swapped = true
            }
        }
        if(swapped == false) break;
    }
}

const array = [ 64, 34, 25, 12, 22, 11, 90 ];
sortArray(array)
console.log(array);

const array2 = [ 64, 34, 25, 12, 22, 11, 90 ];
sortArray2(array2)
console.log(array2);