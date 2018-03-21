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
		'index':'../js/index',
		}
	});
require(['jquery','index'],function(){
	(function($){
		$('.small-box-car li img').each(function(k,v){
			$(v).mouseover(function(){

				$('.small-box-car li img').each(function(k,v){
					v.className = '';
				});
				// 当前img添加class
				$(this).addClass('choosed_img');
				// 改变中型图片的地址
				$('.middle-box img').attr('src',$(this).attr('src'));
				// 改变大型图片的地址
				$('.large-box img').attr('src',$(this).attr('src'));
			});
		});
		// 遮罩层最大的left和top值
		var maxL = 0;
		var maxT = 0;
		// 大图片最大的left和top值
		var maxLargeImgL  = 0;
		var maxLargeImgT  = 0;

		//鼠标进入中盒子事件
		$('.middle-box').mouseenter(function(){
			//显示遮罩层
			$('.shadow').css('display','block');
			// 显示大盒子
			$('.large-box').css('display','block');
			// 获取最大的left和top值
			maxL = $(this).width() - $('.shadow').width();
			maxT = $(this).height() - $('.shadow').height();
			
			maxLargeImgL = $('.large-box img').width() - $('.large-box').width();
			maxLargeImgT = $('.large-box img').height() - $('.large-box').height();
		});
		$('.middle-box').mouseleave(function(){
			//隐藏遮罩层
			$('.shadow').css('display','none');
			//隐藏大盒子
			$('.large-box').css('display','none');
		});

		$('.middle-box').mousemove(function(ev){
			var e = ev || window.event;
			var iL = e.clientX -  $('.shadow')[0].offsetWidth / 2 - $(this)[0].offsetLeft - $('.magnifyLens')[0].offsetLeft;
			var iT = e.pageY - $('.shadow')[0].offsetHeight/2 - $(this)[0].offsetTop - $('.magnifyLens')[0].offsetTop;
			if(iL < 0) {
				iL = 0;
			}

			// 限定上侧
			if(iT < 0) {
				iT = 0;
			}

			// 限定右侧
			if(iL > maxL) {
				iL = maxL;
			}

			// 限定下侧
			if(iT > maxT) {
				iT = maxT;
			}
			$('.shadow').css('left',iL + 'px');
			$('.shadow').css('top',iT + 'px');
			
			//改变大图位置
			$('.large-img').css('left', - iL * maxLargeImgL / maxL + 'px');
			$('.large-img').css('top', - iT * maxLargeImgT / maxT + 'px')
		});

		window.onscroll = function () {
			var iScrollT = document.body.scrollTop || document.documentElement.scrollTop;
			if(iScrollT > 950) {
				$('#showTop').css({'position':'fixed','top':'0','z-index':'10','left':'50%','margin-left':'-600px'});
				$('#showTop').find('.pro_btn_r button').css('display','block');
				
			} else{
				$('#showTop').css({'position':'absolute','left':'0','top':'0','left':'50%','margin-left':'-600px'});
			}
		}
		//商品详情选项卡
		var  proCur  = $('.con_part').find('.pro_current');
		$('.ment_list li').click(function(){
			var index = $(this).index();
			$(this).addClass('current').siblings('li').removeClass('current');
			proCur.eq(index).css('display','block').siblings('.pro_current').css('display','none');
		});
	})(jQuery);
});