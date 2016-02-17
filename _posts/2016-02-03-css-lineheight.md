---
layout: post
title: css深入理解之lineheight
date: 2015-1-30
categories: blog
tags: [总结,知识管理]
description: 
---

## 定义

### 两行文字基线之间的距离

基线-baseline：英文字母下边缘

行高可以让内联元素近似垂直居中

## line-height与行内框盒子模型

### 所有内联元素的样式表现都与行内框盒子有关

### 行内框模型：

1.内容区域：选中文字的区域
2.内联盒子：inline标签组成的（内联盒子）或单纯文字（匿名内联盒子）
3.行框盒子：每一行文字都是行框盒子，由1个1个内联盒子组成
4.包含盒子：由1行1行的行框盒子组成。

## line-height 原理

### 文本占据的高度由line-height所决定

### 单行文字的行高有何而来？
1.行高具有继承性，影响无处不在
2.高度的表现不是行高，而是内容区域和行间距
只不过正好行高 = 内容区域+行间距

### 内容区域
1. 内容区域高度只与字号和字体有关，与line-height无关
2. 在宋体下字号等于行高

行间距 = 行高 - 内容区域
行间距上下均分 = "半行间距"

### 总结：
行高决定内联盒子高度；行间距可大可小（甚至负值），保证高度正好等于行高。

### 多个不同高度的内联盒子组成的行框盒子高度有谁决定？
受到vertical-align 影响，不一定等于最高的内联盒子行高

### 多行文本的高度就是单行文本高度累加

## line-height 各类属性值

### 属性
line-height:normal (默认值)

line-height:<number>
line-height = number * font-size

line-height:<length> 
line-height: 1 rem em px pt

line-height:<percent>
line-height:150% * font-size

### 区别：
number:所有可继承元素根据font-size重新计算line-height。
lenght/percent:根据当前元素的font-size计算line-height，直接继承给子元素。


### body全局数值行高使用经验：
body{font-size:14px; line-height:?}
博客：1.5 / 1.6
网页开发：匹配20的像素：line-height = 20px/14px=1.42857 实际使用时要向上四舍五入！


## line-height与图片的表现

### 行高不会影响图片实际占据的高度！

### 隐匿文本节点：
图片受到"看不到的文字的行高"影响。

### 消除图片底部的间隙：
1.img{display:block}
2.img{ vertical-align:bottom;}
3.box{ line-height:0;}

### 小图片和大文字
由行高控制，由vertical-align控制。


## line-height的实际应用

### 图片水平垂直居中 ie8+
.box { line-height:300px; text-align:center;}
.box > img{ vertical-align:middle;}

### 多行文本垂直居中
.box { line-height:300px; text-align:center;}
.box > .text{ display:inline-block;line-height:normal;text-align:left; vertical-align:middle;max-width:100%}

### 代替height,避免ie6/7下的haslayout
height使元素haslayout，导致其突破父元素的限制。

### 单行文本垂直居中：
只需要设置line-height就可，不需要设置height











