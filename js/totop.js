$(window).scroll(function(){$(window).scrollTop()>500?$("#rocket").addClass("show"):$("#rocket").removeClass("show")}),$("#rocket").click(function(){return $("#rocket").addClass("launch"),$("html, body").animate({scrollTop:0},500,function(){$("#rocket").removeClass("show launch")}),!1});// build time:Wed Feb 07 2018 03:21:26 GMT+0800 (CST)
