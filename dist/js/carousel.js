"use strict";var _createClass=function(){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Carousel=function(){function o(t){var e=this,i=t.el,s=t.timeout,n=void 0===s?4e3:s;_classCallCheck(this,o),this.el=i,this.timeout=n;var h=this.el.getElementsByClassName("direction-btn")[0];this.el.onmouseover=function(){clearInterval(e.timer),h.style.display="block"},this.el.onmouseout=function(){e.autoMove(),h.style.display="none"};var l=this.el.getElementsByClassName("carList")[0],r=l.children[0];this.liWidth=r.offsetWidth,l.innerHTML+=r.outerHTML,this.liLength=l.children.length,l.style.width=this.liWidth*this.liLength+"px",this.carList=l,this.index=0,this.el.getElementsByClassName("prev")[0].onclick=function(){e.leftMove()},this.el.getElementsByClassName("next")[0].onclick=function(){e.rightMove()},this.autoMove()}return _createClass(o,[{key:"autoMove",value:function(){var t=this;this.timer=setInterval(function(){t.rightMove()},this.timeout)}},{key:"leftMove",value:function(){this.index--,this.index<0&&(this.carList.style.left=-(this.liLength-1)*this.liWidth+"px",this.index=this.liLength-2),bufferMove(this.carList,{left:-this.index*this.liWidth})}},{key:"rightMove",value:function(){this.index++,this.index>=this.liLength&&(this.carList.style.left=0,this.index=1),bufferMove(this.carList,{left:-this.index*this.liWidth})}}]),o}(),CarouselB=function(){function f(t){var e=this,i=t.el,s=t.timeout,n=void 0===s?4e3:s;_classCallCheck(this,f),this.el=i,this.timeout=n;var h=this.el.getElementsByClassName("car_choose_list")[0],l=h.children[0],r=h.children[1],o=h.children[2],a=h.children[3],c=h.children[4],u=h.children[5];this.liWidth=l.offsetWidth,h.innerHTML+=l.outerHTML,h.innerHTML+=r.outerHTML,h.innerHTML+=o.outerHTML,h.innerHTML+=a.outerHTML,h.innerHTML+=c.outerHTML,h.innerHTML+=u.outerHTML,this.liLength=h.children.length,h.style.width=this.liWidth*this.liLength+"px",this.carChoList=h,this.index=0,this.el.getElementsByClassName("prev_btn")[0].onclick=function(){e.leftMove()},this.el.getElementsByClassName("next_btn")[0].onclick=function(){e.rightMove()},this.autoMove()}return _createClass(f,[{key:"autoMove",value:function(){var t=this;clearInterval(this.timer),this.timer=setInterval(function(){t.rightMove()},this.timeout)}},{key:"leftMove",value:function(){this.index--,this.index<0&&(this.carChoList.style.left=-(this.liLength-6)*this.liWidth+"px",this.index=this.liLength-7),bufferMove(this.carChoList,{left:-this.index*this.liWidth})}},{key:"rightMove",value:function(){this.index++,this.index>=this.liLength-6&&(this.carChoList.style.left=-6*this.liWidth+"px",this.index=7),bufferMove(this.carChoList,{left:-this.index*this.liWidth})}}]),f}();