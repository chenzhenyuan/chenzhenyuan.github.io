!function(a){a.getUrlParam=function(a){var t=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(t);return e&&e[2]&&"null"!=e[2]&&"undefined"!=e[2]&&""!=e[2]?unescape(e[2]):null}}(jQuery),jQuery(document).ready(function(){function a(a){a&&e.css("background-image","url("+a+")"),$("#DonateText,#donateBox,#github").addClass("blur"),t.fadeIn(300,function(a){e.addClass("showQR")})}$("#github").attr("href",$.getUrlParam("GitHub")||"https://github.com/"+window.location.href.split(".github.io")[0].split("/").pop());var t=$("#QRBox"),e=$("#MainBox"),r=0;if($("li").hide(),$.getUrlParam("BTCQR")&&$.getUrlParam("BTCKEY")){var i=$.getUrlParam("BTCQR"),l=$.getUrlParam("BTCKEY");r++,$("#BTC").show(),$("#BTC").addClass("yc"),$("#btc-key").attr("value",l)}if($.getUrlParam("AliPayQR")){var o=$.getUrlParam("AliPayQR");r++,$("#AliPay").show()}if($.getUrlParam("WeChatQR")){var n=$.getUrlParam("WeChatQR");r++,$("#WeChat").show()}if($.getUrlParam("PayPal")){var s=$.getUrlParam("PayPal");r++,$("#PayPal a").attr("href",s),$("#PayPal").show()}0==r&&$("#WeChat").after('<div id="ps">没有开启任何Donate选项!</div>'),$("#donateBox li,#donateBox li a").css("width",Math.ceil(74+74*(4-r)/r)+"px"),$("#donateBox>li").click(function(t){var e=$(this).attr("id");"BTC"===e?(a(i),new Clipboard("#BTCBn")):"AliPay"===e?a(o):"WeChat"===e&&a(n)}),e.click(function(a){e.removeClass("showQR").addClass("hideQR"),setTimeout(function(a){t.fadeOut(300,function(a){e.removeClass("hideQR")}),$("#DonateText,#donateBox,#github").removeClass("blur")},600)})});// build time:Wed Feb 07 2018 13:41:44 GMT+0800 (CST)
