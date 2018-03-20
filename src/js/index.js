// //加载模块
require.config({
	//配置模块路径
	paths: {
		'jquery':'../js/jquery',
		}
	});

require(['jquery'],function(){
	(function ($) {

		//顶部二维码
		$('.headerApp').hover(function(){
			$(this).children('.QRcode').fadeIn(150);
		},function(){
			$(this).children('.QRcode').fadeOut(150);
		});
		//顶部菜单

		// 获取菜单LI
		var aNavListLi = $('.header_nav_menu').find('.h_nav_list li');
		
		// 获取所有的panel
		var aNavSpe = $('.h_nav_con').find('.h_nav_spe');

		var navArrows = $('.nav_arrows');
		//获取视窗宽度
		var cliWidth = document.documentElement.clientWidth;
		var menuWidth = $('.header_nav_menu').width();
		
		aNavListLi.mouseenter(function () {
			var index = $(this).index();

			var navLiW = aNavListLi.eq(index).width();
			var arrowW = navArrows.eq(index).width();

			// 切换菜单
			aNavListLi.removeClass('active').eq(index).addClass('active');
	
			aNavListLi.eq(index).attr('title',aNavListLi.eq(index).text());
			// 切换panel

			// aNavSpe.removeClass('active').eq(index).has('ul').addClass('active');
			aNavSpe.eq(index).has('ul').show();
			aNavSpe.eq(index).siblings().hide();
			var arrowL =  index * navLiW +(cliWidth - menuWidth)/2 +(navLiW - arrowW)/2;
			
			navArrows.eq(index).css('left',arrowL);


		});
		$('.header_nav').mouseleave(function () {
				
				var index = $(this).index();
				// 切换菜单
				aNavListLi.removeClass('active');

				// 切换panel
				$('.h_nav_spe').hide();
			
		});

		//底部轮播
	})(jQuery);

});


