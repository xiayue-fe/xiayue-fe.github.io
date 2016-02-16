---
layout: post
title: css深入理解之absolute
date: 2015-1-14
categories: blog
tags: [总结,知识管理]
description: 
---

## absolute与float

### 具有相同特性表现：

包裹，破坏

页面布局可以相互替换。

## absolute不要与relative共同使用

独立使用absolute更加强大。

可以超越overflow的限制。

## 无依赖的absolute

### 特性：

脱离文档流

定位后，位置仍然为原始位置。

### 表现：

去浮动

位置跟随：inline/inline-block

ie7下 只能inline-block效果，解决办法，在定位元素外层套层div

超越overflow的限制

与margin相配合，实现精确定位。


## 无依赖absolute相对定位实例

### 图片图标定位

由于元素绝对定位后，脱离文档流，但其相对位置还是保持原样，因此可以把图标元素绝对定位，然后后面的元素跟随，达到图表定位效果。

注意：要使用<!-- --> 清除空格


### 居中对齐/边缘对齐
让空格后的元素绝对定位，通过text-align控制空格的方向，使其后的绝对定位元素能够跟随，并达到定位效果。


### 模拟下拉框
通过absolute和margin定位ul到input的正下方。

### *号对齐
	文字对齐，*号绝对定位		

### 小图标对齐
	
	原理同图片定位

### 文字溢出
	
	超出容器，但是不会换行


## 脱离文档流

一般用法：

动画尽量作用在绝对定位元素上。

多个绝对定位元素，后者覆盖前者。

绝对定位对z-index 无依赖：
	1.只有1个绝对定位元素，不需要z-index。
	2.2个绝对定位元素可以通过dom的先后顺序控制覆盖效果。
	3.较少见到多个绝对定位。
	4.非弹窗类绝对定位z-index>2,必定z-index冗余，请优化。


## 绝对定位与 top left bottom right

1.组合使用 top left bottom right 其中2个时，会直接脱离原始位置，定位到相对html的位置上。

2.单一使用1个属性时，其对立方向还是处在原始位置。


## top left bottom right 与 widht hegiht 的相似与不同

1.width:100%;height:100%; 与 top:0; left:0; bottom:0; right:0; 表现一致

如果使用对立的方向，将会拉伸绝对定位元素

可以使用其制作mask。

2.相互支持性

	翻页效果

	百分百高度自适应

3.相互合作性
	
	width 固定、margin:auto 、 绝对定位元素拉伸 同时出现时，可是使元素绝对居中（仅支持ie8+）


## absolute网页整体布局-适合移动端

	body { font-family: 'microsoft yahei'; margin: 0;padding:0;}
    .page{position:absolute;left:0;top:0;right:0;bottom:0;}
    html,body{height:100%;text-align: center;}
    .header,.footer{position:absolute;left:0;right:0;}
    .header{height:50px;top:0;background-color: #98f682;}
    .footer{height:50px;bottom:0;background-color: #f682ab;}
    .aside{
        width:250px;
        position:absolute;left:0;top:50px;bottom:50px;
        background-color: #8d9dec;
    }
    .content{
        position:absolute;top:50px;bottom:50px;right: 0;
        left:250px;
        overflow:hidden;
        background-color: #ddec8d;
    }
    .overlay{
        position:absolute;
        left:0;top:0;right:0;bottom:0;
        background-color:rgba(0,0,0,.5);
        z-index:9;
        display: none;
    }










