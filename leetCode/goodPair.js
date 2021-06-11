var numJewelsInStones = function (jewels, stones) {
    let a = [];
    for (let j = 0; j < jewels.length; j++) {
        for (let i = 0; i < stones.length; i++) {
            a.push(jewels[j] === stones[i])
        }
    }
    const count = a.filter(Boolean).length;
    return count
};
numJewelsInStones("aA", "aAAbbbb")