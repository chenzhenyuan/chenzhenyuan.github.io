// build time:Fri Feb 02 2018 16:47:33 GMT+0800 (CST)
(function(a){a.getUrlParam=function(a){var t=new RegExp("(^|&)"+a+"=([^&]*)(&|$)");var e=window.location.search.substr(1).match(t);if(e&&e[2]&&e[2]!="null"&&e[2]!="undefined"&&e[2]!=""){return unescape(e[2])}else{return null}}})(jQuery);jQuery(document).ready(function(){$("#github").attr("href",$.getUrlParam("GitHub")||"https://github.com/"+window.location.href.split(".github.io")[0].split("/").pop());var a=$("#QRBox");var t=$("#MainBox");var e=0;$("li").hide();if($.getUrlParam("BTCQR")&&$.getUrlParam("BTCKEY")){var r=$.getUrlParam("BTCQR");var i=$.getUrlParam("BTCKEY");e++;$("#BTC").show();$("#BTC").addClass("yc");$("#btc-key").attr("value",i)}if($.getUrlParam("AliPayQR")){var l=$.getUrlParam("AliPayQR");e++;$("#AliPay").show()}if($.getUrlParam("WeChatQR")){var o=$.getUrlParam("WeChatQR");e++;$("#WeChat").show()}if($.getUrlParam("PayPal")){var n=$.getUrlParam("PayPal");e++;$("#PayPal a").attr("href",n);$("#PayPal").show()}if(e==0){$("#WeChat").after('<div id="ps">没有开启任何Donate选项!</div>')}$("#donateBox li,#donateBox li a").css("width",Math.ceil(74+74*(4-e)/e)+"px");function s(e){if(e){t.css("background-image","url("+e+")")}$("#DonateText,#donateBox,#github").addClass("blur");a.fadeIn(300,function(a){t.addClass("showQR")})}$("#donateBox>li").click(function(a){var t=$(this).attr("id");if(t==="BTC"){s(r);new Clipboard("#BTCBn")}else if(t==="AliPay"){s(l)}else if(t==="WeChat"){s(o)}});t.click(function(e){t.removeClass("showQR").addClass("hideQR");setTimeout(function(e){a.fadeOut(300,function(a){t.removeClass("hideQR")});$("#DonateText,#donateBox,#github").removeClass("blur")},600)})});
//rebuild by neat 