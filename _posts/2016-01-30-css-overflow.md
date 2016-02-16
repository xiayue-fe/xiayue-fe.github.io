---
layout: post
title: css深入理解之overflow
date: 2015-1-30
categories: blog
tags: [总结,知识管理]
description: 
---


## 基本属性

visible hidden scroll auto inherit

overflow-x和overflow-y（ie8+）

如果overflow-x，overflow-y值相同，则等同于overflow:auto。

如果overflow-x，overflow-y的值不同，且其中一个值为visible，
另一个被赋予hidden、scroll、auto，那么这个visible会被重置为auto。

### 兼容性

1.不同浏览器样式不同。

2.宽度设定机制

ie7滚动条问题，原因是设置了width：100%。

### 作用的前提

1.非 display:inline

2.对应方位的尺寸限制：width/height/max-width.max-height/absolute拉伸

ie7滚动条问题

3.td元素上overflow起作用，还需要为table设置table-layout:fixed

### 妙用

ie7下按钮文字越多，空白越大。

给按钮添加 overflow:visible。

## overflow与滚动条

### 滚动条出现的条件

1.overflow：auto/overflow:scroll

2.内容超出区域限制。

### body/html与滚动条

无论什么浏览器，默认滚动条均来自<html>，而不是来自<body>。

body默认.5em的margin。

ie7- 默认：html{ overflow：scroll; }

ie8+ 默认 ：html{ overflow : auto; }

### body/html与滚动条-js与滚动高度

	var st = document.documentElement.scrollTop || document.body.scroll;

### overflow的padding-bottom缺失现象

.box { width:400px; height:100px; padding 100px 0; overflow:auto; }

在chrome下 padding-bottom 可以被滚动出，但其他所有浏览器的
padding-bottom全部被去掉。导致scrollHeight不一样。

### 滚动条的宽度机制

滚动条会占用容器的可用宽度或高度。

overflow:auto 可能会造成潜在布局隐患。

### 水平居中跳动问题：

1. html { overflow-y:scorll; }

2. .container { padding-left : calc(100vw - 100%); }ie9+

100vw-浏览器宽度；100%-可用内容宽度

### 滚动条的自定义

chrome自定义 webkit:

ie: 放弃/jQuery滚动条自定义插件
兼容性：ie8+

ios原生滚动回调效果


## overflow与BFC-清除浮动，自适应布局等。

### BFC

BFC：块级格式上下文

BFC，内部元素不会影响外部元素。

overflow除去visible以外的属性都可以触发BFC。

### 常见应用：

清除浮动影响。

避免margin穿透问题：
普通元素在父级没用margin的情况下，子元素的垂直margin会透过子元素影响父级元素。
解决办法：边框/padding/自身BFC化/overflow 都可以。

两栏自适应布局。
通过overflow:hidden 使其BFC化，不受浮动元素影响。完全独立。

推荐方式：
	.left{float:left;margin-right:20px;}

流体自适应布局与BFC自适应布局是不同的。


### 两栏自适应布局

	.cell {
	        displau:table-cell;width:2000px; //ie8+ BFC特性
	       *display:inline-block;*widht:auto; //ie7- 伪BFC特性
	}
 
## overflow与绝对定位-隐藏失效与滚动固定

失效原因：
绝对定位元素不总是被父级overflow属性剪裁，尤其当overflow在绝对定位元素及其包含块之间的时候。

包含块：
含postiion:relative/absolute/fixed声明的父级元素，没有则body元素。

避免失效：

1.overflow元素自身为包含块

2.子元素为包含块

3.overflow子元素transform声明当作包含块


妙用：
绝对定位+空格实现fixed效果。

## 依赖overflow的样式表现

resize

text-overflow:ellipsis


## overflow与锚点技术

### 锚链与锚点

url#hot  锚链

	<div id="hot"> 锚点
	<a href="#hot"/>

### 条件：

容器可滚动

锚点在容器内

### 本质：

改变容器的滚动高度

### 触发：

url中锚链和锚点元素

可focus的锚点元素处于focus状态

### 作用：

快速定位

overflow选项卡技术：

不足：会穿透到最外层的滚动条

应用：单屏



















