// 通过id获取页面元素
function $(id){
	return document.getElementById(id);
}


//多属性缓冲运动函数

//获取元素样式
function getStyle(obj, attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj, false)[attr];
	}
}

function bufferMove(obj,target,fn,ratio = 8){
 	//清除旧的定时器
 	clearInterval(obj.timer);
 	//是否全部到达终点
 	let allOk = true;
 	//遍历target对象
 	obj.timer = setInterval(function(){
 		for(let attr in target){
 			//获取当前值
 			let cur = 0;
 			if (attr ==='opacity') {
 				cur = parseInt(getStyle(obj,'opacity') * 100);
 			}else{
 				cur = parseInt(getStyle(obj,attr));
	 		}
	 		//计算速度：（目标位置-当前值）/系数
	 		let speed = (target[attr] - cur) / ratio;
	 		//判断速度取整方向
	 		speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
	 		//下一次的位置
	 		let next = cur + speed;
 			//赋值
 			if (attr ==='opacity') {
 				obj.style.opacity = next/100;
 				obj.style.filter ='alpha(opacity'+ next +')';
 			}else{
 				obj.style[attr] = next +'px';
 			}
 			//判断是否全部到达终点
 			if (next !== target[attr]) {
 				allOk = false;
 			}
 		}
 		//如果allOk为true，说明所有运动均已完毕
 		if (allOk) {
 			//清除定时器
 			clearInterval(obj.timer);
 			//执行回调函数
 			if (fn) {
 				fn();
 			}
 		}
 	}, 50);	
}