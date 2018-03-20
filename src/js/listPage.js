// //加载模块
require.config({
	//配置模块路径
	paths: {
		'jquery':'../js/jquery',
		}
	});
require.config({
	//配置模块路径
	paths: {
		'jqueryui':'https://cdn.bootcss.com/jqueryui/1.12.0/jquery-ui.min',
		}
	});

require.config({
	//配置模块路径
	paths: {
		'jqumm':'../js/jquery.mousewheel.min',
		}
	});
require.config({
	//配置模块路径
	paths: {
		'jqum':'../js/jquery.mCustomScrollbar',
		}
	});
require.config({
	//配置模块路径
	paths: {
		'index':'../js/index',
		}
	});



require(['jquery','jqueryui','jqumm','jqum','index'],function(){
	(function ($) {
		//自定义滚动条
		$('.brand_box').mCustomScrollbar({
		    	scrollButtons:{
		        enable:false,
		        scrollType:"continuous",
		        scrollSpeed:20,
		        scrollAmount:40
			},
 			horizontalScroll:false,
		});
		//左边菜单栏效果
		$('.listTitle').click(function(){
			$(this).next('.claList').slideToggle('normal','linear').end().parent().siblings().children('ul').hide();
			var thisChtml = $(this).children(".lTitle_r").html();
			if (thisChtml == "+") {
	            $(this).children(".lTitle_r").html("－");
	            $(this).parent().siblings().children().children(".lTitle_r").html("+");
       		 }else {
	           
	            $(this).children(".lTitle_r").html("＋");
        	}


		});
		// $('.listTitle').click(function(ev){
		// 	ev.stopPropagation(); 
		// });	
		$('.cLLi_tab').each(function(){
			
			$(this).click(function(){
				
				$(this).next('.creLife').slideToggle('normal','linear');
			});
		});
		$('div').click(function(ev){
			ev.stopPropagation();
		});
		$('a').click(function(ev){
			ev.stopPropagation();
		});

		$('.cLLi_tab').click(function(){
			$(this).children('em').toggleClass('checked');
		});

		$('.claList .claListLi .creLife li a:has(em)').click(function(){
			var nextEm = $(this).parent().nextAll().children('a').children('em');
			
			console.log(nextEm.attr('class'));
			if($(this).parent().index() === 0){
				$(this).children('em').toggleClass('checked');
				nextEm.toggleClass('checked');
				// if (nextEm.attr('class') == 'checked') {

				// }
				// em.each(function(k,v){
				// 	if (v.style.className === 'checked') {
				// 		v.style.className('');
				// 	}
				// });

			// 	em.addClass('checked');
			// }else{
			// 	$(this).children('em').toggleClass('checked');
			}else{
				$(this).children('em').toggleClass('checked');
			}
				
		});


		$('.sex .claList li a:has(em)').click(function(){
			$(this).children('em').toggleClass('checked');
			});

		$('.brand .claList li a:has(em)').click(function(){
			$(this).children('em').toggleClass('checked');
			});
			
		$('.con_subject .con_sub_ul li').hover(function(){
			$(this).css('box-shadow','0 0 8px #b5b5b5');
		},function(){
			$(this).css('box-shadow','0 0 0 #fff');
		});
	
	
	
	})(jQuery);
});