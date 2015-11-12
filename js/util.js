(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery'], function (_, $) {
      return (root.util = factory(_, $));
    });
  } else {
    root.util = factory(root._, root.jQuery);
  }
}(this, function (_, $) {


    var util = {};

    /**
     * 把对象键值对转化拼接为url格式, 键值对在url中的顺序不确定
     * @param obj {Object} 需要url化的对象
     * @return {string} 对象url化后的结果,前后不包含'/'
     *
     *  {
     *      name: qiu,
     *      age: 26
     *  }
     *  处理后为: name/qiu/age/26或者age/26/name/qiu
     **/
    util.urlify = function (obj) {
        return _.map(obj, function (v, k) {
            return k + '/' + v;
        }).join('/');
    };

    /**
     * 删除对象中值为指定值的属性
     * @param obj {Object} 需要删除属性的对象
     * @param value {any} 需要删除的属性值
     * @return {Object} 删除值为指定值的属性后的对象
     *
     **/
    util.compact = function (obj, value) {
        return _.each(obj, function (v, k, o) {
            value === v && delete o[k];
        });
    };

    /**
     * 包装过的ajax请求, 根据配置决定使用本地接口url还是线上url, 参数传递可选
     * 默认?key=value或者restful格式的/key/value
     * @param option {Object} ajax配置对象
     *
     * @param option.url {Object} ajax请求的url, 包含线上和线下两个地址, 通过配置自动选择
     * @param option.url.mock {string} ajax线下地址, option.mock为true时使用
     * @param option.url.online {string} ajax线上地址, options.mock为false是使用
     * @param option.mock {boolean} 发送请求时是否使用本地地址
     *
     * @param options.restful {boolean} 请求参数是否转化并拼接到url, true时转化并拼接,
     *              false时使用默认传递
     * 其余参数与$.ajax一致
     * @return {Object} 返回$.ajax()返回的结果
     *
     * 使用例子:
     * var url = {
     *      online: '/online.json',
     *      mock: '/mock.json'
     * };
     * var data = {
     *      qiu: 'qiu',
     *      age: 26
     * };
     * util.ajax({
     *      url: url,
     *      data: data
     * });
     **/
    util.ajax = function (option) {
        var config = $.extend({}, util.ajax.defaults, option);
        config.url = config.mock ? config.url.mock : config.url.online;
        if (config.restful && config.data) {
            config.url += '/' + util.urlify(config.data);
            delete config.data;
        }
        return $.ajax(config);
    };
    /**
     * @param mock {boolean} true时使用option.url.mock作为url,
     *      false时使用option.url.online
     * @param restful {boolean} true时将data转换为url拼接到url作为参数传递,
     *      false时使用默认的data字段传递
     **/
    util.ajax.defaults = {
        mock: true,
        restful: true
    };



    return util;

}));

