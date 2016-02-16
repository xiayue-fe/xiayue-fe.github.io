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

修改最后一次提交：

	git commit --amend

此命令将使用当前暂存区提交

取消暂存：

	git reset HEAD filename

取消对文件的修改：

	git checkout -- filename

#### 2.5远程仓库的使用

查看当前的远程库：
	
	git remote 
	git remote -v 显示克隆地址

添加远程仓库：

	git remote add [shortname] url

从现有仓库抓取数据：

	git fetch [remote-name]

推送数据到远程仓库：

	git push [remote-name] [branch-name]

查看远程仓库信息：

	git remote show [remote-name]

远程仓库的删除和重命名：

	git remote rename name1 name2
	git remote rm name

#### 2.6打标签

	git tag


### 3.git分支   

#### 3.1分支
某个提交对象往回看的历史

#### 3.2新建与合并
新建分支：

	git branch name 

切换分支：

	git checkout name 

新建并切换到分支：

	git checkout -b name  

在切换分支前，注意要将未提交的内容提交，保持一个清洁的工作区。

合并分支：

	git merge name 

删除分支：

	git branch -d name 


#### 3.3分支的管理

列出所有分支：
	
	git branch 

查看各个分支最后一个提交对象的信息：
	
	git branch -v 

查看已经与当前分支合并的分支：
	
	git branch -merged 

查看尚未与当前分支合并的分支：
	
	git branch -no-merrged 


#### 3.5远程分支

推送本地分支：
	
	git push (远程仓库名) (分支名)

跟踪远程分支：
	
	git checkout -b [分支名] [远程名]/[分支名] 

删除远程分支：	
	
	git push [远程名] :[分支名]

#### 3.6分支的衍合

基础衍合：
	
	git rebase 分支名  

重新指定基地分支的衍合：
	
	git rebase --noto 分支1 分支2

衍合的风险
一旦分支的提交对象发布到公共仓库，就千万不要再对该分支进行衍合操作。
