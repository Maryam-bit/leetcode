
function divide(array, si, ei) {
    if(si>=ei) {
        return;
    }

    const mid = si + (ei - si) / 2;
    divide(array, si, mid);
    divide(array, mid+1, si);
    conquer(array, si, mid, ei)
}

function conquer(array, si, mid, ei) {
    const merged = [];
    let idx1 = si;
    let idx2 = mid+1;
    let x = 0;

    while(idx1<=mid && idx2<=ei) {
        if(array[idx1] <= array[idx2]) {
            merged[x++] = array[idx1++];
        }

        if(array[idx2] <= array[idx1]) {
            merged[x++] = array[idx2++]
        }
    }

    while(idx1<=mid) {
        merged[x++] = array[idx1++];
    }

    while(idx2<=ei) {
        merged[x++] = array[idx2++];
    }

    array = [...merged]
}


const array = [6, 3, 9, 5, 2, 8];
const n = array.length;

divide(array, 0, n-1)
console.log(array)
