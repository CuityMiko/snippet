(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return (root.selectText = factory());
    });
  } else {
    root.selectText = factory();
  }
}(this, function () {


  /**
   * 选择元素的文本
   * @param {Element} 需要被选文本的元素
   **/
  function selectText(elem) {
    var range;
    var selection;


    if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(elem);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(elem);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  return selectText;
}));
