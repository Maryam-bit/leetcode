var RandomizedSet = function() {
    this.array = new Array()
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false;
    this.map.set(val, this.array.length);
    this.array.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false;
    const index = this.map.get(val);
    this.array[index] = this.array[this.array.length-1];
    this.map.set(this.array[index], index);
    this.array.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomindex = Math.floor(Math.random() * this.array.length);
    return this.array[randomindex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */