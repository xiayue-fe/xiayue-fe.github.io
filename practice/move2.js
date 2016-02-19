/**
 * @author miaov
 */
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//这一次运动就结束了——所有的值都到达了
		for(var attr in json)
		{
			//1.取当前的值
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.检测停止
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}

 
var startMove2= function(obj, iTarget, type, callback) {
		var that = this;
		clearInterval(obj.timer);
		obj.iSpeed = 0;
		obj.timer = setInterval(function() {
			that[type].call(that, obj, iTarget, callback)
		}, 30)
	};
var buffer= function(obj, iTarget, callback) {
	obj.iSpeed = (iTarget - obj.offsetHeight) / 5;
	obj.iSpeed = obj.iSpeed > 0 ? Math.ceil(obj.iSpeed) : Math.floor(obj.iSpeed);
	obj.offsetHeight == iTarget ? (clearInterval(obj.timer), callback && callback.call(obj)) : obj.style.height = obj.offsetHeight + obj.iSpeed + "px"
};
var flex= function(obj, iTarget, callback) {
	obj.iSpeed += (iTarget - obj.offsetHeight) / 6;
	obj.iSpeed *= 0.75;
	if(Math.abs(iTarget - obj.offsetHeight) <= 1 && Math.abs(obj.iSpeed) <= 1) {
		clearInterval(obj.timer);
		obj.style.height = iTarget + "px";
		callback && callback.call(obj)
	}
	else {
		obj.style.height = obj.offsetHeight + obj.iSpeed + "px"
	}
};



function startMove3(obj,json,options){
	options = options||{};
	options.time = options.time||700;
	options.type = options.type||'ease-out';
	var start = {};
	var dis = {};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
				break;
				case 'top':
					start[name]=obj.offsetTop;
				break;
				case 'width':
					start[name]=obj.offsetWidth;
				break;
				case 'height':
					start[name]=obj.offsetHeight;
				break;
				case 'opacity':
					start[name]=1;
				break;
				case 'borderWidth':
					start[name]=0;
				break;
			}
		}
		dis[name]=json[name]-start[name];
	}
	var count= Math.floor(options.time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
				break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
				break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
				break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(count==n){
			clearInterval(obj.timer);
			options.end&&options.end();
		}
	},30);
	
}







