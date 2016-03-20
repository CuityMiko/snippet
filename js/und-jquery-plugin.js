;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory)
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'))
    } else {
        // Browser globals (root is window)
        root.CityPicker = factory(root.jQuery)
    }
}(this, function ($) {

    var dataKey = 'citypicker.qiu'

    function CityPicker() {}
    CityPicker.prototype = {
        reset: $.noop
    }

    function Plugin() {
        return this.each(function (option, city) {
            var $this = $(this)
            var citypicker = $this.data(dataKey)
            var options = typeof option === 'object' && option

            if (!citypicker) {
                $this.data(dataKey, (citypicker = new CityPicker(this, options)))
            }

            if (option === 'reset') {
                CityPicker.reset()
            }
        })
    }

    var old = $.fn.citypicker
    $.fn.citypicker = Plugin
    $.fn.citypicker.Constructor = CityPicker
    $.fn.citypicker.noConflict = function () {
        $.fn.citypicker = old
        return this
    }

    //    exposed constructor
    return CityPicker
}));
