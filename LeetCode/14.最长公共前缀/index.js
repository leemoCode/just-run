function longestCommonPrefix(strs) {
    let result = '';
    for (let i = 0; i < strs[0].length; i++) {
        const curStr = strs[0][i];
        let isSame = true;
        for (const item of strs) {
            if (item[i] !== curStr) {
                isSame = false;
            }
        }
        if (isSame) {
            result += curStr;
        } else {
            break;
        }
    }
    return result;
}

module.exports = longestCommonPrefix;