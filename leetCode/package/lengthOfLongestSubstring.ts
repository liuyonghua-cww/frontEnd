// s = "aab"
function lengthOfLongestSubstring(s: string): any {
    const length = s.length;
    let resStr = ''
    let str = ''
    for (let i = 0; i < length; i++) {
        // 当前字符是否在 str 中存在
        if (str.indexOf(s.charAt(i)) > -1) {
            // 存在则截断 并在返回最新的 str
            str = str.slice(str.indexOf(s.charAt(i)) + 1) + s.charAt(i);
            continue;
        }
        str += s.charAt(i);
        // 实时保存最长的字符串
        if (str.length > resStr.length) {
            resStr = str;
        }
    }
    return resStr.length

}

console.log(lengthOfLongestSubstring('aab'));
