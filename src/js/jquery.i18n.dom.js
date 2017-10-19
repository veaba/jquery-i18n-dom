/***********************
 *@name JS
 *@author Jo.gel
 *@date 2017/10/19
 ***********************/
/**
 * {string} 入参是 中文还是英文库
 * */

  var i18nDOM ={};
  i18nDOM.init=function (lang) {
    if (lang) {
      // 创建之前先清空
      var LanguageAttr = $("[data-i18n='language']");
      LanguageAttr.remove();

      // 创建库文件 后面原生的方法
      $("[data-i18n='jquery.i18n.dom']").before('<script data-i18n="language" src="src/lib/'+lang+'.js"><\/script>');

      if(!LanguageAttr){
        console.info('i18n文件库没有引入成功，或者标签不含 data-i18n="language"属性 ');
      }
      else {
        //翻译函数
        i18nDOM.handle()
      }
    }else {
      console.info('!----------------没收到参数--------------!');
    }
  }

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
