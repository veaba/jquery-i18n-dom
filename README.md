# jquery-i18n-dom
基于jquery的i18n国际化插件

# 先放一些核心代码上来先，后续再分装成为jquery插件

## 使用
 1. 在引入插件中之前先引用JQuery
 2. 并在插件前面引用翻译库文件
 3. 引入插件库
 4. 事件触发
 5. 在dom中凡有html值(div、span、strong、h、ul、li等值，需要添加 属性data-t="HELLO_WORLD")
 6. 如果在select 中，需要对option 添加 data-t="HELLO_WORLD"
 7. 后续-radio 尚未测试，核心代码尚未添加
 8. 后续-会处理掉当一百个国家的时候怎么处理？难道要加载一百个翻译对象啊，爆炸~~
  * * *
下拉选择事件，后续会分装起来
```js
  $('#language').change(function () {
    var lang = $(this).children('option:selected').val()

    if(lang=='en'){
      _t('en')//引用英文库
      console.info('-------------------切换成为英文版本-------------------');
    }else if (lang=='zh'){
      _t('zh')//引用英文库
      console.info('-------------------切换成为中文版本-------------------');

    }else {
      console.info('notify:not lib for en and zh! ');
    }

  })

```

## 描述
两个库文件

- 一个文件是english.js 文件，一个对象的翻译化
- 另一个文件chinese.js 文件，一个对象的翻译化
* * *
一个函数库
- translation.js 放置dom操作的核心库

## 核心代码
- 遗漏 对radio 组将的分装
* * *

```js
/***********************
 *@name JS
 *@author Jo.gel
 *@date 2017/10/19
 ***********************/

/**
 * {string} 入参是 中文还是英文库
 * */
function _t(lang) {
  var i18n = window['COMMON_' + lang]
  var dataT = $('[data-t]');//找到 data属性

  //属性含有 data-t="参数"
  dataT.each(function (item) {

    //翻译过后的文字
    var NewText = i18n[$(this).attr('data-t')]
    //div span strong li ul i 等标签
    if ($(this)[0].nodeName == 'SPAN') {
      $(this).html(NewText)
    }
    //input
    if ($(this)[0].nodeName == 'INPUT') {
      $(this).val(NewText)//value等标签
    }

    //select 标签
    if ($(this)[0].nodeName == 'OPTION') {
      $(this).html(NewText)
    }
  })
}
```
