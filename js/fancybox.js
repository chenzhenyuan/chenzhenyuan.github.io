$(document).ready(function(){$("img").each(function(){if(!$(this).parent().hasClass("fancybox")&&!$(this).hasClass("nofancybox")){var a=this.alt;a&&$(this).after('<span class="caption">'+a+"</span>"),$(this).wrap('<a href="'+(null==$(this).attr("data-src")?this.src:$(this).attr("data-src"))+'" title="'+a+'" class="fancybox"></a>')}}),$(this).find(".fancybox").each(function(){$(this).attr("rel","article")})}),$(document).ready(function(){$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr("rel","gallery").fancybox({helpers:{title:{type:"inside"}}})});// build time:Fri Jun 01 2018 11:33:43 GMT+0800 (CST)
