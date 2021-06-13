var countNegatives = function(grid) {
    var total = 0
    const grids = grid.flat()
    for(i=0; i<grids.length; i++){
        if(grids[i]<0){
            total++
        }
    }
    console.log(total)
    return total
};
countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])