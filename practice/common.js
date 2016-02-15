


// js原生提取非行间样式
function getStyle(obj,name){
	return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj,false)[name];
}

// js原生取得行间样式
function getStyleOfElement(obj,name) {
	if(obj.style){
		return obj.style[name];
	}
}
// 换肤代码
function changeSkin(){
	var link = document.getElementById("link");
	link.href = "样式文件名"+".css";
}
// 通过class获取元素
function getElementsByClassName(name){
	var classlist = [];
	var nodelist = document.getElementsByTagName("*");
	for(var i=0,max = nodelist.length;i<max;i++){
		var node = nodelist[i];
		if(node.className == name){
			classlist[i] = node;
		}
	}
	return classlist;
}
// 使用arguments.callee 来调用函数自身
function fn_arguments(){
	// 函数自身
	var self = arguments.callee;
	// 把arguments转换为数组
	var args = Array.prototype.slice.call(arguments);
}

// js模仿块级作用域
// 也就是匿名函数的声明方式
// 也是创建闭包的常用方式
(function(){
	// 块级作用域
})();
var module = function(){
	// 块级作用域
}();
// 函数闭包相关问题
function fn1(){
	for (var i = list.length - 1; i >= 0; i--) {
		list[i].onclick = function(){
			// 此时i值永远都是最后一个
			alert(i);
			// 解决办法
			// 1  使用块级作用域
			// 2  使用变量保存局部对象
			// 3  创建外部函数执行操作
		}
	}
}
// 判断对象类型
function typeOfObj(obj){
	var _t;
	_t = (typeof(obj) == "object" ? obj == null && "null" || 
		Object.prototype.toString.call(obj).slice(8,-1):typeof(obj)).toLowerCase();
	return _t;
}


// 数组对象方法扩展
if (typeof Array.prototype.forEach != "function") {
  Array.prototype.forEach = function (fn, context) {
    for (var k = 0, length = this.length; k < length; k++) {
      if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
        fn.call(context, this[k], k, this);
      }
    }
  };
}
if (typeof Array.prototype.map != "function") {
  Array.prototype.map = function (fn, context) {
    var arr = [];
    if (typeof fn === "function") {
      for (var k = 0, length = this.length; k < length; k++) {      
         arr.push(fn.call(context, this[k], k, this));
      }
    }
    return arr;
  };
}
if (typeof Array.prototype.filter != "function") {
  Array.prototype.filter = function (fn, context) {
    var arr = [];
    if (typeof fn === "function") {
       for (var k = 0, length = this.length; k < length; k++) {
          fn.call(context, this[k], k, this) && arr.push(this[k]);
       }
    }
    return arr;
  };
}
if (typeof Array.prototype.some != "function") {
  Array.prototype.some = function (fn, context) {
	var passed = false;
	if (typeof fn === "function") {
   	  for (var k = 0, length = this.length; k < length; k++) {
		  if (passed === true) break;
		  passed = !!fn.call(context, this[k], k, this);
	  }
    }
	return passed;
  };
}
if (typeof Array.prototype.every != "function") {
  Array.prototype.every = function (fn, context) {
    var passed = true;
    if (typeof fn === "function") {
       for (var k = 0, length = this.length; k < length; k++) {
          if (passed === false) break;
          passed = !!fn.call(context, this[k], k, this);
      }
    }
    return passed;
  };
}
if (typeof Array.prototype.indexOf != "function") {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var index = -1;
    fromIndex = fromIndex * 1 || 0;

    for (var k = 0, length = this.length; k < length; k++) {
      if (k >= fromIndex && this[k] === searchElement) {
          index = k;
          break;
      }
    }
    return index;
  };
}
if (typeof Array.prototype.lastIndexOf != "function") {
  Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
    var index = -1, length = this.length;
    fromIndex = fromIndex * 1 || length - 1;

    for (var k = length - 1; k > -1; k-=1) {
        if (k <= fromIndex && this[k] === searchElement) {
            index = k;
            break;
        }
    }
    return index;
  };
}
if (typeof Array.prototype.reduce != "function") {
  Array.prototype.reduce = function (callback, initialValue ) {
     var previous = initialValue, k = 0, length = this.length;
     if (typeof initialValue === "undefined") {
        previous = this[0];
        k = 1;
     }
     
    if (typeof callback === "function") {
      for (k; k < length; k++) {
         this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
      }
    }
    return previous;
  };
}
if (typeof Array.prototype.reduceRight != "function") {
  Array.prototype.reduceRight = function (callback, initialValue ) {
    var length = this.length, k = length - 1, previous = initialValue;
    if (typeof initialValue === "undefined") {
        previous = this[length - 1];
        k--;
    }
    if (typeof callback === "function") {
       for (k; k > -1; k-=1) {          
          this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
       }
    }
    return previous;
  };
}

// dom简单封装
$ = function (val) {  
        switch(val.charAt(0)) {  
            case '#' :  
                return document.getElementById(val.substring(1));  
                break;  
            case '.' :  
                val = val.replace('.','');  
                if(document.getElementsByClassName)  
                    return document.getElementsByClassName(val);  
                else {  
                    var obj = document.getElementsByTagName('*'),len = obj.length,arr=[];  
  
                    for(var i=0;i<len;i++) {  
                        if(obj[i].className == val) {  
                            arr[arr.length] = obj[i];  
                        }  
                    }  
  
                    return arr;  
                }  
                break;  
            default :  
                if(document.getElementsByName(val).length > 0)  
                    return document.getElementsByName(val);  
                else   
                    return document.getElementsByTagName(val);   
        }  
    }  


// ajax与函数返回值
function ajax_return(){
  var d = "";
  $.ajax({
    ......,//参数省略
    async:false//同步时此函数的return 会等待ajax返回数据后再返回函数返回值 
    success:function(data){
      d = data;
    }
  });
  return d;
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var time1 = new Date().Format("yyyy-MM-dd");
var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
// 返回2个数之间的随机数
function randomNumber(lower,upper){
  var choices = upper-lower+1;
  return Math.floor(Math.random()*choices+lower);
}
// 随机颜色值
// http://www.yyjcw.com/html/News/643.html
function randomColor(){
  return  ’#’ +  
  (function(color){  
    return (color +=  ’0123456789abcdef’[Math.floor(Math.random()*16)])  
      && (color.length == 6) ?  color : arguments.callee(color);  
  })(’’);  
}
// 随机背景图
// var bgs = [];
// bgs[0] = "xxxxx/01.jpg";
// var randomBgIndex = Math.round(Math.random()*n);
// background-image: bgs[randomBgIndex]

// 封装location对象
function fn_location(name){
  var arr = [];
  var loc = window.location;
  var host = loc.hostname;
  var port = loc.port;
  var href = loc.href;
  var hash = loc.hash.slice(1);
  var search = loc.search.slice(1);
  arr[host]=host;
  arr[port]=port;
  arr[href]=href;
  arr[hash]=hash;
  arr[search]=search;
  var parameter = search.split("&");
  for(var i in parameter){
    var k = parameter[i].split("=")[0];
    var v = parameter[i].split("=")[1];
    arr[k]=v;
  }
  return arr[name]==undefined ? "null" : arr[name];
}
// 事件队列封装
var QueneEnginer = function(){
  this.Qunen = [];
}
QueneEnginer.prototype = {
  processTime : 20,
  add : function(fn,context,arrParam){
    this.Qunen.push({
      fn:fn,context:context,param:arrParam
    });
  }
  start : function(){
    var _this = this;
    setTimeout(function(){_this.process();},_this.processTime);
  }
  process : function(){
    var quene = this.Qunen.shift();
    if(!quene) return ;
    quene.fn.apply(quene.context,quene.param);
    quene = null;
    this.start();
  }
};
// 模拟placeholder
var fn_placeholder = function (element){
  //检测是否需要模拟placeholder
    var placeholder = '';
    if (element && !("placeholder" in document.createElement("input")) && (placeholder = element.getAttribute("placeholder"))) {
        //当前文本控件是否有id, 没有则创建
        var idLabel = element.id ;
        if (!idLabel) {
            idLabel = "placeholder_" + new Date().getTime();
            element.id = idLabel;
        }

        //创建label元素
        var eleLabel = document.createElement("label");
        eleLabel.htmlFor = idLabel;
        eleLabel.style.position = "absolute";
        //根据文本框实际尺寸修改这里的margin值
        eleLabel.style.margin = "2px 0 0 3px";
        eleLabel.style.color = "graytext";
        eleLabel.style.cursor = "text";
        //插入创建的label元素节点
        element.parentNode.insertBefore(eleLabel, element);
        //事件
        element.onfocus = function() {
            eleLabel.innerHTML = "";
        };
        element.onblur = function() {
            if (this.value === "") {
                eleLabel.innerHTML = placeholder;  
            }
        };

        //样式初始化
        if (element.value === "") {
            eleLabel.innerHTML = placeholder;   
        }
    } 
}
// 控制文本（每行）输入长度，及显示剩余字数
function textCounter(field, maxlimit, lines) { //参数说明：field是textarea对象,maxlimit是最大允许长度,lines是行数
  var arr = field.value.split("\n"); //首先我们要为验证行数，通过分行符“\n”
  var perLine = "";
  var value = "";
  if (arr.length < lines) lines = arr.length; //判断行数是否超出了我们规定的行数，如果超了就把行数改为超出的，因为我们要算字符串长度
  for (loop = 0; loop < lines; loop++) { //循环测数字符串总长度，不多说了
    perLine = arr[loop];
    if (perLine.length > maxlimit)
      perLine = perLine.substring(0, maxlimit);
    value = value + perLine;
    if (loop != lines - 1)
      value = value + "\n";
  }
  if (field.value != value)
    field.value = value;
  if (checkstr(value, maxlimit)) { //判断字符串长度是不是超标
    field.value = value.substring(0, maxlimit); //删除超除的多余字符串
  }
}
//显示剩余的可输入字符数obj为txteara对象，maxlength最大长度
function showOverWords(obj, maxlength) { 
  len = obj.value.length;
  $("#wordCount").html(maxlength - len); //这句是jquery的，可以自己相对自己改改。 表示修改id为wordCount标签的值
}
//判断中文和英文，字符串的长度是否超标
function checkstr(str, digit) { 
  var n = 0;
  for (i = 0; i < str.length; i++) {
    var leg = str.charCodeAt(i); //ASCII码
    if (leg > 255) { //大于255的都是中文
      n += 2; //如果是中文就是2个字节
    } else {
      n += 1; //英文，不多说了
    }
  }
  if (n > digit) {
    return true;
  } else {
    return false;
  }
}

// xhr对象的兼容写法及调用
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"],
                i, len;
    
            for (i=0,len=versions.length; i < len; i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex){
                    //skip
                }
            }
        }
    
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}

var xhr = createXHR();        
xhr.open("get", "example.txt", false);
xhr.send(null);

xhr.onreadystatechange = function(){
  // xhr.readyState 0未启动 1启动 2发送 3接收 4完成
  if(xhr.readyState == 4){
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
        alert(xhr.statusText);
        alert(xhr.responseText);
    }
  }else {
      alert("Request was unsuccessful: " + xhr.status);
  }
}
//jsonp封装 
function getJSONP(url, callback) {  
    if (!url) {  
        return;  
    }  
    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //定义一个数组以便产生随机函数名  
    var r1 = Math.floor(Math.random() * 10);  
    var r2 = Math.floor(Math.random() * 10);  
    var r3 = Math.floor(Math.random() * 10);  
    var name = 'getJSONP' + a[r1] + a[r2] + a[r3];  
    var cbname = 'getJSONP.' + name; //作为jsonp函数的属性  
    if (url.indexOf('?') === -1) {  
        url += '?jsonp=' + cbname;  
    } else {  
        url += '&jsonp=' + cbname;  
    }  
    var script = document.createElement('script');  
    //定义被脚本执行的回调函数  
    getJSONP[name] = function (e) {  
        try {  
            //alert(e.name);  
　　　　　　　　callback && callback(e);  
        } catch (e) {  
            //  
        }  
        finally {  
            //最后删除该函数与script元素  
            delete getJSOP[name];  
            script.parentNode.removeChild(script);  
        }  
    }  
    script.src = url;  
    document.getElementsByTagName('head')[0].appendChild(script);  
}  
getJSONP('http://localhost:8888/',function(response){  
　　alert(response.name);  
}); 