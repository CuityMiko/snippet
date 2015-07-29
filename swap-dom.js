/**
 * 交换两个DOM节点,需要保证他们都有父节点
 * @param a {Element} 需要交换的节点a
 * @param b {Element} 需要交换的节点b
 **/
function swapDOM(a, b) {
  // 插入空白,保证具有nextSibling
  a.insertAdjacentHTML('afterend', ' ');
  b.insertAdjacentHTML('afterend', ' ');

  var aSibling = a.nextSibling;
  var bSibling = b.nextSibling;

  aSibling.parentNode.insertBefore(b, aSibling);
  bSibling.parentNode.insertBefore(a, bSibling);
}
