var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let right = n;
        let left = 1;
        while(left < right) {
            const mid = Math.floor((left + right) / 2);
            if(isBadVersion(mid)) {
                right = mid;
            }
            else {
                left = mid+1;
            }
        }
        return left;
    };
};

const isBadVersion = function(version) {
    const badVersion = 3;
    return version >= badVersion
}

const findFirstBadVersion = solution(isBadVersion)
const n = 5;
const firstBadVersion = findFirstBadVersion(5)