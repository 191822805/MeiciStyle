"use strict";function _defineProperty(e,s,o){return s in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o,e}require.config({paths:{jquery:"../js/jquery"}}),require.config({paths:{index:"../js/index"}}),require(["jquery","index"],function(){!function(t){t(".small-box-car li img").each(function(e,s){t(s).mouseover(function(){t(".small-box-car li img").each(function(e,s){s.className=""}),t(this).addClass("choosed_img"),t(".middle-box img").attr("src",t(this).attr("src")),t(".large-box img").attr("src",t(this).attr("src"))})});var n=0,r=0,l=0,a=0;t(".middle-box").mouseenter(function(){t(".shadow").css("display","block"),t(".large-box").css("display","block"),n=t(this).width()-t(".shadow").width(),r=t(this).height()-t(".shadow").height(),l=t(".large-box img").width()-t(".large-box").width(),a=t(".large-box img").height()-t(".large-box").height()}),t(".middle-box").mouseleave(function(){t(".shadow").css("display","none"),t(".large-box").css("display","none")}),t(".middle-box").mousemove(function(e){var s=e||window.event,o=s.clientX-t(".shadow")[0].offsetWidth/2-t(this)[0].offsetLeft-t(".magnifyLens")[0].offsetLeft,i=s.pageY-t(".shadow")[0].offsetHeight/2-t(this)[0].offsetTop-t(".magnifyLens")[0].offsetTop;o<0&&(o=0),i<0&&(i=0),n<o&&(o=n),r<i&&(i=r),t(".shadow").css("left",o+"px"),t(".shadow").css("top",i+"px"),t(".large-img").css("left",-o*l/n+"px"),t(".large-img").css("top",-i*a/r+"px")}),window.onscroll=function(){var e;950<(document.body.scrollTop||document.documentElement.scrollTop)?(t("#showTop").css({position:"fixed",top:"0","z-index":"10",left:"50%","margin-left":"-600px"}),t("#showTop").find(".pro_btn_r button").css("display","block")):t("#showTop").css((_defineProperty(e={position:"absolute",left:"0",top:"0"},"left","50%"),_defineProperty(e,"margin-left","-600px"),e))};var s=t(".con_part").find(".pro_current");t(".ment_list li").click(function(){var e=t(this).index();t(this).addClass("current").siblings("li").removeClass("current"),s.eq(e).css("display","block").siblings(".pro_current").css("display","none")})}(jQuery)});