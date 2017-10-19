# jquery-i18n-dom
基于jquery的i18n国际化插件

# 先放一些核心代码上来先，后续再分装成为jquery插件

## 使用
 1. 在引入插件中之前先引用JQuery
 2. 并在插件前面引用翻译库文件
 3. 引入插件库
 4. 事件触发
 5. 在dom中凡有html值(div、span、strong、h、ul、li等值，需要添加 属性data-i18n="HELLO_WORLD")
 6. 如果在select 中，需要对option 添加 data-i18n="HELLO_WORLD"
 7. 后续-radio 尚未测试，核心代码尚未添加
  * * *

### 引入

```html
    
    <!--JQuery-->
    <script src="src/js/jquery.js"></script>
    
    <!--i18n-dom 翻译插件-->
    <script data-i18n="jquery.i18n.dom" src="src/js/jquery.i18n.dom.js"></script>
```
***
### 事件
下拉选择事件，后传入xx.js 的参数,xx及翻译的对象库文件,会在插件前面创建一个 script 入口来引用响应的翻译库文件

```html
<script data-i18n="language" src="src/lib/english.js"></script>
```
***
这里选择select 下拉触发
```html
<select name="language" id="language" title="language">
    <option value="english">English</option>
    <option value="chinese">中文简体</option>
</select>
```
```js 

  /** *********************
  * {String}
  * **********************/
  $('#language').change(function () {
    var lang = $(this).children('option:selected').val();
    //往函数里面传参
    i18nDOM.init(lang)
  })

```

## 描述
库文件

- english.js 文件，英文翻译化
```js english
var in18 = {
  'ALL': 'All',
  'INPUT_HERE': 'Input here...',
  'PLEASE_SELECT': 'Please select',
  'SELECT_DATE': 'Select date',
  'CLOSE': 'Close',
  'CONFIRM': 'Confirm',
  'PREVIEW': 'Preview',
  'UPLOAD': 'Upload',
  'STATUS': "Status",
  'ACTION': "Action",
  'CONFIGURATION': "Configure",
  'REPORT': 'Report',
  'DELETE': 'Delete',
  'ATTENTION': 'Attention',
  "CODE": 'Code'
}
```
- chinese.js 文件，中文翻译化

```js chinese
var in18 = {
  'ALL': '所有',
  'INPUT_HERE': '请输入...',
  'PLEASE_SELECT': '请选择',
  'SELECT_DATE': '选择日期',
  'CLOSE': '关闭',
  'CONFIRM': '确认',
  'PREVIEW': '预览',
  'UPLOAD': '上传',
  'STATUS': "状态",
  'ACTION': "操作",
  'CONFIGURATION': "配置",
  'REPORT': '报告',
  'DELETE': '删除'
}
```
* * *
一个函数库
- jquery.i18n.dom.js 放置jquery.i18n.dom操作的核心库

## 核心代码


###　初始化
```js
/**
 * {string} 入参来决定是引用中文还是英文库
 * */
  i18nDOM.init(string)
```
### dom操作

- 遗漏 对radio 组将的分装
- 遗漏 对textarea 组将的分装
* * *
```js

  i18nDOM.handle=function () {
    var lib = window['in18'];
    var dataT = $('[data-i18n]');//找到 data属性
    //属性含有 data-i18n="参数"
    dataT.each(function (item) {
      //翻译过后的文字
      var NewText = lib[$(this).attr('data-i18n')];
      //div span strong li ul i 等标签
      if ($(this)[0].nodeName === 'SPAN') {
        $(this).html(NewText)
      }
      //input
      if ($(this)[0].nodeName === 'INPUT') {
        $(this).val(NewText)//value等标签
      }
      //select 标签
      if ($(this)[0].nodeName === 'OPTION') {
        $(this).html(NewText)
      }
    })
  };

```