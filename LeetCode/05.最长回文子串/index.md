https://leetcode.cn/problems/longest-palindromic-substring/submissions/

# 核心思路
- 回文字符串的特征： 以中心的1个或2个字符为轴，两边对称
- 两种形式： aba  abba
- 使用中心扩散法 遍历每一个字符成为轴的情况 取出符合条件的最长字符串
