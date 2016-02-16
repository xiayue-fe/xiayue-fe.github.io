---
layout: post
title: git的学习记录
date: 2015-1-14
categories: blog
tags: [总结,知识管理]
description: 
---

### 1.起步

#### 1.1设置用户名和邮箱

    git config --global user.name 'name'

    git config --global user.email 'email'

#### 1.2查看配置

    git config --list

#### 1.3获取帮助

    git help


### 2.git基础

#### 2.1取得git仓库

初始化新仓库：

    git init


从现有仓库克隆：

	git clone [url] yourname


#### 2.2记录每次更新到仓库

检查文件状态：
	
	git status

跟踪新文件：
	
	git add filename

'git add' 命令也可用于将修改过的文件放入暂存区等。



