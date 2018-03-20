/*
 	封装轮播图
*/
class Carousel{
	constructor({el,timeout = 4000}){
		this.el = el;
		this.timeout = timeout;
		
 		let directionBtn = this.el.getElementsByClassName('direction-btn')[0];
 		
		//添加鼠标进入事件
		this.el.onmouseover = ()=>{
			//清除定时器
			clearInterval(this.timer);
			directionBtn.style.display = 'block';
			
		}
		//添加鼠标离开事件
		this.el.onmouseout = ()=>{
			//启动自动轮播
			this.autoMove();
			directionBtn.style.display = 'none';
		}
		
		let carList = this.el.getElementsByClassName('carList')[0];
		let liFirst = carList.children[0];

		//一个li的宽度 
		this.liWidth = liFirst.offsetWidth;
		//复制第一个li添加至ul里面
		carList.innerHTML += liFirst.outerHTML;
		//添加一个li之后list中li的个数
		this.liLength = carList.children.length;
		//设置添加一个li之后ul的宽度
		carList.style.width = this.liWidth * this.liLength+'px';
		
		
		
		this.carList = carList;
		//设置图片下标
		this.index = 0;

		let prev = this.el.getElementsByClassName('prev')[0];
		//给左边按钮添加点击事件
		prev.onclick =()=>{
			this.leftMove();
		};
		let next = this.el.getElementsByClassName('next')[0];
		//给右边按钮添加点击事件
		next.onclick =()=>{
			this.rightMove();
		};

		this.autoMove();

	}
	autoMove(){
		this.timer = setInterval(()=>{
			this.rightMove();
		},this.timeout);
	}
	leftMove(){
		this.index --;
			if (this.index < 0) {
				this.carList.style.left = -(this.liLength - 1)*this.liWidth +'px';
				this.index = this.liLength -2; 
			}
			bufferMove(this.carList,{left:-this.index *this.liWidth});
	
	}
	rightMove(){
		this.index ++;
			if (this.index >= this.liLength) {
				this.carList.style.left = 0;
				this.index = 1; 
			}
			bufferMove(this.carList,{left:-this.index *this.liWidth});
	}
}


class CarouselB{
	constructor({el,timeout = 4000}){
		this.el = el;
		this.timeout = timeout;
		
 		
		
		let carChoList = this.el.getElementsByClassName('car_choose_list')[0];
		let liFirst = carChoList.children[0];
		let liSecond = carChoList.children[1];
		let liThird = carChoList.children[2];
		let liFourth = carChoList.children[3];
		let liFifth = carChoList.children[4];
		let liSixth = carChoList.children[5];

		//一个li的宽度 
		this.liWidth = liFirst.offsetWidth;
		//复制前六个li添加至ul里面
		carChoList.innerHTML += liFirst.outerHTML;
		carChoList.innerHTML += liSecond.outerHTML;
		carChoList.innerHTML += liThird.outerHTML;
		carChoList.innerHTML += liFourth.outerHTML;
		carChoList.innerHTML += liFifth.outerHTML;
		carChoList.innerHTML += liSixth.outerHTML;
		//添加六个个li之后list中li的个数
		this.liLength = carChoList.children.length;
		//设置添加一个li之后ul的宽度
		carChoList.style.width = this.liWidth * this.liLength+'px';
		
		
		this.carChoList = carChoList;
		//设置图片下标
		this.index = 0;

		let prevBtn = this.el.getElementsByClassName('prev_btn')[0];
		//给左边按钮添加点击事件
		prevBtn.onclick =()=>{
			this.leftMove();
		};
		let nextBtn = this.el.getElementsByClassName('next_btn')[0];
		//给右边按钮添加点击事件
		nextBtn.onclick =()=>{
			this.rightMove();
		};

		this.autoMove();

	}
	autoMove(){
		clearInterval(this.timer);
		this.timer = setInterval(()=>{
			this.rightMove();
		},this.timeout);
	}
	leftMove(){
		this.index --;
			if (this.index < 0) {
				this.carChoList.style.left = -(this.liLength -6)*this.liWidth +'px';
				this.index = this.liLength -7; 
			}
			bufferMove(this.carChoList,{left:-this.index *this.liWidth});
	
	}
	rightMove(){
		this.index ++;
			if (this.index >= this.liLength - 6 ) {
				this.carChoList.style.left = - (6*this.liWidth) +'px';
				this.index =  7; 
			}
			bufferMove(this.carChoList,{left:-this.index *this.liWidth});
	}
}