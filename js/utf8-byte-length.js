/**
 * 计算字符串在utf8下的字节长度
 * @param str {string} 需要计算字节长度的字符串
 * @return {number}  字符串在utf8编码下的字节长度
 **/
function utf8ByteLength(str) {
    str = str || ''
    var plainReg = /[\w-\.!~*'\(\)']/g
    var utf8TokenReg = /%\w{2}/g
    var plainTokens = str.match(plainReg) || []
    var complexStr = str.replace(plainReg, '')
    var encodedStr = encodeURIComponent(complexStr)
    var utf8Tokens = encodedStr.match(utf8TokenReg) || []
    return plainTokens.length + utf8Tokens.length
}


console.log(utf8ByteLength('a')) // 1
console.log(utf8ByteLength('¢')) // 2
console.log(utf8ByteLength('中')) // 3
console.log(utf8ByteLength('𐍈')) // 4
