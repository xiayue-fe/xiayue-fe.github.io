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

’git add‘ 命令也可用于将修改过的文件放入暂存区等。

忽略某些文件：

	# 此为注释 – 将被 Git 忽略
	    # 忽略所有 .a 结尾的文件
	    *.a
	    # 但 lib.a 除外
	    !lib.a
	    # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
	    /TODO
	    # 忽略 build/ 目录下的所有文件
	    build/
	    # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
	    doc/*.txt

查看未暂存内容的变化：

	git diff

查看暂存内容与上次快照的差异：

	git diff --cached

提交更新：

	git commit -m '提交说明'

移除文件：

	git rm filename

移动文件(重命名)：

	git mv oldname newname


#### 2.3查看提交历史

	git log

#### 2.4撤销操作

	



