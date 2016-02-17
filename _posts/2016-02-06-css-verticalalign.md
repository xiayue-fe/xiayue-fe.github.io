---
layout: post
title: css深入理解之vertical-align
date: 2015-1-30
categories: blog
tags: [总结,知识管理]
description: 
---

## 基本类别

### 线类：

baseline,top,middle,bottom

### 文本类：

text-top,text-bottom

### 上下标：

sub,super

### 数值类：1px 1em 

相对于baseline上下偏移

### 百分比类：20%

相对于baseline上下偏移，但是此时vertical-align的值是相对于line-height计算的。
ie6/7 不支持小数的百分比值。

## vertical-align起作用的前提

### 前提条件：

inline或table-cell的元素

table-cell只会作用于自身

### 个数不定的文字内容和图片垂直居中对齐：

文字inline-block; 文字和图片都vertical-align:middle;


## vertical-algin与line-height

inline-block元素，
如果内部没有任何元素/内容，baseline为底边缘。
如果内部有linebox内容，baseline变为内部linebox的基线。

## vertical-align线性数值深入理解

### bottom:

定义：
inline/inline-block元素：元素底部和整行底部对齐。
table-cell元素：单元格底padding边缘和tr底部对齐。

### top：

定义：
inline/inline-block元素：元素底部和整行顶部对齐。
table-cell元素：单元格底padding边缘和tr顶部对齐。

### middle：

定义：
inline/inline-block元素：元素垂直中心点和父元素基线往上1/2高度 x-height处对齐。
table-cell元素：单元格和tr居中对齐。

### 完全垂直居中：

font-size:0

## vertical-align文本类深入理解

### 定义：

text-top:盒子的顶部和父级content area的顶部对齐。
text-bottom:盒子底部和父级的content area的底部对齐。

元素vertical-algin的垂直对齐位置与前后元素无关，
与line-height无关，只与font-size有关。

### 实际作用：

表情图片(或原始尺寸背景图标)与文字的对齐效果。
使用text-bottom只与父级font-size大小有关，不会受到其他元素影响


## vertical-align上下标类深入理解

等同于<sup><sub>效果

## vertical-align前后不一的作用机制-相邻元素不同vertical-align的表现

元素的vertical-align的表现只与父级有关，前后并没有影响。

## vertical-align兼容性

ie7下图文一体：
解决办法，后面文字inline-block化

## vertical-align实际应用

### 小图标和文字对齐

vertical-align:负值

20*20图标+14px文字时，vertical-align:-5px 效果较好。

### 不定尺寸图片或多行文字垂直居中

1.主体元素inline-block

2.0宽度100%高度辅助元素

3.vertical-align:middle










