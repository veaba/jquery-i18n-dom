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
}