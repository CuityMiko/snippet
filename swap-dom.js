/**
 * 交换两个DOM节点,需要保证他们都有父节点
 * @param a {Node} 需要交换的节点a
 * @param b {Node} 需要交换的节点b
 **/
function swapDOM(a, b) {
  var pa = a.parentNode;
  var pb = b.parentNode;

  // 插入空白,保证具有nextSibling
  a.insertAdjacentHTML('afterend', ' ');
  b.insertAdjacentHTML('afterend', ' ');

  var aSibling = a.nextSibling;
  var bSibling = b.nextSibling;

  pa.insertBefore(b, aSibling);
  pb.insertBefore(a, bSibling);
}
