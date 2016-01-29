/**
 * 获取多行字符串的换行符
 * @param str {string} 需要检查换行符的多行字符串
 * @return {string} 传入字符串的换行符
 **/
function getLineBreak(str) {
    str = str || ''
    var lineEndReg = /\r\n|\n|\r/
    var lineEndTokens = str.match(lineEndReg)
    if (!lineEndTokens) {
        throw new Error('输入字符串不包含换行符')
    }
    return lineEndTokens[0]
}
