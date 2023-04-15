var smallestEvenMultiple = function(n) {
    //   even => input = output
    //   odd  => input * 2 
    if(n%2===0) return n;
    return n*2;
};

const n = 6;
const result = smallestEvenMultiple(n);