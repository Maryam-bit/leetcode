var finalValueAfterOperations = function(operations) {
    let X = 0;
    operations.forEach(operation => {
        eval(operation);
    });
    return X;
};

const operations = ["--X","X++","X++"];
const finalValue = finalValueAfterOperations(operations);