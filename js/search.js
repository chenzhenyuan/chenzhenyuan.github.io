var searchFunc=function(t,e,n){"use strict";$.ajax({url:t,dataType:"xml",success:function(t){var r=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),a=document.getElementById(e),i=document.getElementById(n);a.addEventListener("input",function(){var t='<ul class="search-result-list">',e=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="",this.value.trim().length<=0||(r.forEach(function(n){var r=!0,a=n.title.trim().toLowerCase(),i=n.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),s=n.url,l=-1,c=-1,u=-1;if(""!=a&&""!=i&&e.forEach(function(t,e){l=a.indexOf(t),c=i.indexOf(t),l<0&&c<0?r=!1:(c<0&&(c=0),0==e&&(u=c))}),r){t+="<li><a href='"+s+"' class='search-result-title'>"+a+"</a>";var o=n.content.trim().replace(/<[^>]+>/g,"");if(u>=0){var h=u-30,f=78;h<0&&(h=0),h+f>o.length&&(o.length<f?f=o.length-h:h=o.length-f);var m=o.substr(h,f);e.forEach(function(t){var e=new RegExp(t,"gi");m=m.replace(e,'<em class="search-keyword">'+t+"</em>")}),t+='<p class="search-result">'+m+"...</p>"}t+="</li>"}}),t+="</ul>",i.innerHTML=t)})}})};// build time:Wed Jun 06 2018 13:15:24 GMT+0800 (CST)
