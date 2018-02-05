// build time:Mon Feb 05 2018 23:11:53 GMT+0800 (CST)
$(window).scroll(function(){$(window).scrollTop()>500?$("#rocket").addClass("show"):$("#rocket").removeClass("show")}),$("#rocket").click(function(){return $("#rocket").addClass("launch"),$("html, body").animate({scrollTop:0},500,function(){$("#rocket").removeClass("show launch")}),!1});
//rebuild by neat 