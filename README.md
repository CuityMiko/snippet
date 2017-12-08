# snippet
常用小功能

## 天气预报

选中日期后执行以下代码获取文字版

```
var tokens = []
var items = document.querySelectorAll('ul.t li')
items.forEach(item => tokens.push(item.textContent.replace(/\s*/g, ' ').trim()))
console.log(tokens.join('\n'))
```

```
CREATE TABLE `user` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(128) DEFAULT NULL COMMENT '企业名称',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COMMENT='商家表';

CREATE TABLE `category` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(128) DEFAULT NULL COMMENT '企业名称',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COMMENT='商家表';

```

## 颜色

![][7]

[d3.category20()][6]


## demo图片

- ![][2] http://gtms01.alicdn.com/tps/i1/TB1lqMMJFXXXXXiXFXXexj_LXXX-148-115.png
- ![][3] http://gtms03.alicdn.com/tps/i3/TB1D67FJFXXXXa8XFXX0A4YZFXX-635-545.png
- ![][4] http://gtms03.alicdn.com/tps/i3/TB1oFnOKXXXXXc9XXXX1PXGGXXX-32-28.png
- ![][5] http://gtms04.alicdn.com/tps/i4/TB19yLUKXXXXXaEXXXXEDhGGXXX-32-32.png
- ![][8] http://gtms01.alicdn.com/tps/i1/TB1TLTuKFXXXXa4aXXXOWZK6pXX-864-280.png


[8]: http://gtms01.alicdn.com/tps/i1/TB1TLTuKFXXXXa4aXXXOWZK6pXX-864-280.png
[7]: http://gtms04.alicdn.com/tps/i4/TB1RtC1KpXXXXbYXpXXfGstIFXX-251-557.png
[6]: https://github.com/mbostock/d3/wiki/Ordinal-Scales#category10
[5]: http://gtms04.alicdn.com/tps/i4/TB19yLUKXXXXXaEXXXXEDhGGXXX-32-32.png
[4]: http://gtms03.alicdn.com/tps/i3/TB1oFnOKXXXXXc9XXXX1PXGGXXX-32-28.png
[3]: http://gtms03.alicdn.com/tps/i3/TB1D67FJFXXXXa8XFXX0A4YZFXX-635-545.png
[2]: http://gtms01.alicdn.com/tps/i1/TB1lqMMJFXXXXXiXFXXexj_LXXX-148-115.png
[1]: https://github.com/quanxi613/handlebars-helper
