var isSubsequence = function (s, t) {
    let matches = 0
    for(i=matches; i<=t.length-1; i++) {
        if(s[matches] === t[i]) {
            matches++
        }
    }
    return matches === s.length;
}

const s = "abc";
const t = "ahbgddc";
console.log(isSubsequence(s,t))