function longestPalindrome(str) {
    let result = '';
    let maxLength = 0;
    // 遍历字符串
    for (let i = 0; i < str.length; i++) {
        // 第一种：bab形式
        let distance = 0;
        console.log(str[i - distance], '>>[', str[i], ']<<', str[i + distance]);
        while (str[i - distance] && str[i + distance] && str[i - distance] === str[i + distance]) {
            const currResLength = distance * 2 + 1;
            if (currResLength > maxLength) {
                maxLength = currResLength;
                result = str.slice(i - distance, i + distance + 1);
            }
            distance++;
        }
        // 第二种：baab形式
        let distance2 = 0;
        console.log(str[i - distance2], '>>[', str[i], str[i + 1], ']<<', str[i + 1 + distance2]);
        while (str[i - distance2] && str[i + 1 + distance2] && str[i - distance2] === str[i + 1 + distance2]) {
            const currResLength = distance2 * 2 + 2;
            if (currResLength > maxLength) {
                maxLength = currResLength;
                result = str.slice(i - distance2, i + 1 + distance2 + 1);
            }
            distance2++;
        }
    }
    console.log('result', result);
    return result;
}


module.exports = longestPalindrome;