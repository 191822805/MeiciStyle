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
	// (function($){

	// })(JQuery);
});