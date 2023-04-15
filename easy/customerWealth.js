var maximumWealth = function(accounts) {
    let arr = []
    
    for(let i=0; i<accounts.length; i++){
        arr.push(eval(accounts[i].join('+')))
    }
    var max = Math.max(...arr)
    return max;
};

maximumWealth([[1,5],[7,3],[3,5]])