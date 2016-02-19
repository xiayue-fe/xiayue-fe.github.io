
    var str = '',
        data = [
            [
                { title : 'js基础'},
                { url : '../xiayue-fe.github.io/practice/1/arguments.html', title : 'arguments' },
                { url : '../xiayue-fe.github.io/practice/1/attr.html', title : 'attr-属性控制' },
                { url : '../xiayue-fe.github.io/practice/1/bibao.html', title : '闭包' },
                { url : '../xiayue-fe.github.io/practice/1/cssText.html', title : 'cssText' },
                { url : '../xiayue-fe.github.io/practice/1/style.html', title : '获取样式的方式' }
            ],
            [
                { title : 'js基础方法'},
                { url : '../xiayue-fe.github.io/practice/2/array.html', title : '数组方法' },
                { url : '../xiayue-fe.github.io/practice/2/string.html', title : '字符串方法' },
                { url : '../xiayue-fe.github.io/practice/2/number_object_math.html', title : '对象和Math方法' },
                { url : '../xiayue-fe.github.io/practice/2/typeof.html', title : '判断对象类型'}
            ],
            [
                { title : 'dom操作方法'},
                { url : '../xiayue-fe.github.io/practice/3/dom.html', title : 'dom操作方法' }
            ],
            [
                { title : 'bom操作方法'},
                { url : '../xiayue-fe.github.io/practice/4/bom.html', title : 'bom操作方法' },
                { url : '../xiayue-fe.github.io/practice/4/fixTop/吸顶效果.html', title : '吸顶效果' },
                { url : '../xiayue-fe.github.io/practice/4/fixTop/回到顶部.html', title : '回到顶部' },
                { url : '../xiayue-fe.github.io/practice/4/fixTop/瀑布流.html', title : '瀑布流' }
            ],
            [
                { title : 'js事件'},
                { url : '../xiayue-fe.github.io/practice/5/event.html',title:'事件对象'},
                { url : '../xiayue-fe.github.io/practice/5/eventlist.html' , title:'事件队列实现'},
                { url : '../xiayue-fe.github.io/practice/5/拖拽.html', title : '拖拽' },
                { url : '../xiayue-fe.github.io/practice/5/放大镜.html', title : '放大镜'},
                { url : '../xiayue-fe.github.io/practice/5/words.html', title :'输入字数限制'},
                { url : '../xiayue-fe.github.io/practice/5/menu.html',title :'自定义右键菜单'},

            ],
            [
                { title : '运动'},
                { url : '../xiayue-fe.github.io/practice/6/侧边栏.html', title : '侧边栏' },
                { url : '../xiayue-fe.github.io/practice/6/分享到.html', title : '分享到' },
                { url : '../xiayue-fe.github.io/practice/6/手风琴.html', title : '手风琴' },
                { url : '../xiayue-fe.github.io/practice/6/淡入淡出.html', title : '淡入淡出' },
                { url : '../xiayue-fe.github.io/practice/6/无缝滚动.html', title : '无缝滚动' },
                { url : '../xiayue-fe.github.io/practice/5/nav.html', title : '导航' }
            ],
            [
                { title : 'css深入理解'},
                { url : '../xiayue-fe.github.io/practice/css-think/float.html', title : '自适应两端布局' },
                { url : '../xiayue-fe.github.io/practice/css-think/absolute.html', title : '图表跟随、居中边缘对齐' },
                { url : '../xiayue-fe.github.io/practice/css-think/absolute2.html', title : '自适应布局(适合移动端)' },
                { url : '../xiayue-fe.github.io/practice/css-think/overflow.html', title : '锚点tab切换' },
                { url : '../xiayue-fe.github.io/practice/css-think/lineheight.html', title : '图片/多行文本垂直居中' },
                { url : '../xiayue-fe.github.io/practice/css-think/vertical-align.html', title : '图片/多行文本垂直居中2' }
            ],
            [
                {title:'模仿名站'},
                {url:'../xiayue-fe.github.io/practice/mofang/baidu/baidu.html',title:'百度首页'}
                {url:'../xiayue-fe.github.io/practice/mofang/youku/youku.html',title:'优酷首页'}
            ]

        ];
    for(var i = 0; i < data.length; i++){
        var items = data[i];
        var sub = '';
        for(var j=0; j<items.length; j++){
            var son = items[j];
            if(j == 0){
                sub += '<li><h1><a href="javascript:;" title="' + son.title + '">' + son.title + '</a></h1><dl class="sub-dl">';
            } else {
                sub += '<dd><a href="' + son.url + '" target="_blank" title="' + son.title + '">' + son.title + '</a></dd>';
            }
            if(j == items.length - 1){
                sub += '</dl></li>';
            }
        }
        str += sub;
    }
    var ol = document.getElementById('ol');
    ol.innerHTML = str;
    var h1 = ol.getElementsByTagName('h1');
    var dl = ol.getElementsByTagName('dl');
    var tmp = -1;
    var open = false;
    for(var i=0; i < h1.length; i++){
        h1[i].index = i;
        h1[i].onclick = function(){
            for(var i=0; i<h1.length; i++){
                dl[i].style.display = 'none';
            }
            if(tmp == this.index && open){
                dl[this.index].style.display = 'none';
                open = false;
            } else {
                dl[this.index].style.display = 'block';
                open = true;
            }
            tmp = this.index;
        }
    }
