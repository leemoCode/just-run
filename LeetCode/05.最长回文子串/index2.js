function longestPalindrome(str) {
    let result = '';
    let maxLength = 0;
    // 核心逻辑
    function caculateRes(index1, index2) {
        let distance = 0;
        while (str[index1 - distance] && str[index2 + distance] && str[index1 - distance] === str[index2 + distance]) {
            const currResLength = distance * 2 + 1 + index2 - index1;
            if (currResLength > maxLength) {
                maxLength = currResLength;
                result = str.slice(index1 - distance, index2 + distance + 1);
            }
            distance++;
        }
    }
    // 遍历字符串
    for (let i = 0; i < str.length; i++) {
        // 第一种：bab形式
        caculateRes(i, i);
        // 第二种：baab形式
        caculateRes(i, i + 1);
    }
    return result;
}


module.exports = longestPalindrome;