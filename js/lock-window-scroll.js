(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.lockWindowScroll = factory();
  }
}(this, function () {

  var lockWindowScroll = {
    getScrollOffsets: function () {
      var w = window;
      if (w.pageXOffset != null) {
        return {x: w.pageXOffset, y: w.pageYOffset};
      } // end if
      var d = w.document;
      if (document.compatMode === "CSS1Compat") {
        return {x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop};
      } // end if
      return {x: d.body.scrollLeft, y: d.body.scrollTop};
    },
    lockY: function () {
      var me = this;
      me.y = me.getScrollOffsets().y;
      window.addEventListener('scroll', me.fixScrollY, false);
    },
    unlockY: function () {
      window.removeEventListener('scroll', lockWindowScroll.fixScrollY, false);
    },
    fixScrollY: function () {
      window.scrollTo(0, lockWindowScroll.y);
    }
  };

  return lockWindowScroll;
}));
