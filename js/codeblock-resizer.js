+function(i){"use strict";var t=function(t){this.$codeBlocks=i(t)};t.prototype={run:function(){var t=this;t.resize(),i(window).smartresize(function(){t.resize()})},resize:function(){var t=this;t.$codeBlocks.each(function(){var t=i(this).find(".gutter"),n=i(this).find(".code"),r=n.width()-n.innerWidth(),e=i(this).outerWidth()-t.outerWidth()+r;n.css("width",e),n.children("pre").css("width",e)})}},i(document).ready(function(){i.fn.hasHorizontalScrollBar=function(){return this.get(0).scrollWidth>this.innerWidth()};var n=new t("figure.highlight");n.run()})}(jQuery);// build time:Tue Feb 06 2018 03:54:14 GMT+0800 (CST)
