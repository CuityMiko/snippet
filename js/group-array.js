  /**
   * 把长数组按照所需尺寸划分为数组的数组
   * var arr = [1, 2, 4, 5, 6, 7, 8]
   * groupArray(arr, 3)结果
   * [
   *    [1, 2, 3],
   *    [4, 5, 6],
   *    [7, 8]
   * ]
   **/
function groupArray(arr, size) {
  var resultArr = []
  for (var i = 0; i < arr.length; i += size) {
      resultArr.push(arr.slice(i, i + size))
  }
  return resultArr
}
