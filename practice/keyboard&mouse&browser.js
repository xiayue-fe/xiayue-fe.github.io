// 键盘事件

js 里面的键盘事件经常用到，所以收集了键盘事件对应的键码来分享下：
	keyCode 8 = BackSpace BackSpace
	keyCode 9 = Tab Tab
	keyCode 12 = Clear
	keyCode 13 = Enter
	keyCode 16 = Shift_L
	keyCode 17 = Control_L
	keyCode 18 = Alt_L
	keyCode 19 = Pause
	keyCode 20 = Caps_Lock
	keyCode 27 = Escape Escape
	keyCode 32 = space
	keyCode 33 = Prior
	keyCode 34 = Next
	keyCode 35 = End
	keyCode 36 = Home
	keyCode 37 = Left
	keyCode 38 = Up
	keyCode 39 = Right
	keyCode 40 = Down
	keyCode 41 = Select
	keyCode 42 = Print
	keyCode 43 = Execute
	keyCode 45 = Insert
	keyCode 46 = Delete
	keyCode 47 = Help
	keyCode 48 = 0 equal braceright
	keyCode 49 = 1 exclam onesuperior
	keyCode 50 = 2 quotedbl twosuperior
	keyCode 51 = 3 section threesuperior
	keyCode 52 = 4 dollar
	keyCode 53 = 5 percent
	keyCode 54 = 6 ampersand
	keyCode 55 = 7 slash braceleft
	keyCode 56 = 8 parenleft bracketleft
	keyCode 57 = 9 parenright bracketright
	keyCode 65 = a A
	keyCode 66 = b B
	keyCode 67 = c C
	keyCode 68 = d D
	keyCode 69 = e E EuroSign
	keyCode 70 = f F
	keyCode 71 = g G
	keyCode 72 = h H
	keyCode 73 = i I
	keyCode 74 = j J
	keyCode 75 = k K
	keyCode 76 = l L
	keyCode 77 = m M mu
	keyCode 78 = n N
	keyCode 79 = o O
	keyCode 80 = p P
	keyCode 81 = q Q at
	keyCode 82 = r R
	keyCode 83 = s S
	keyCode 84 = t T
	keyCode 85 = u U
	keyCode 86 = v V
	keyCode 87 = w W
	keyCode 88 = x X
	keyCode 89 = y Y
	keyCode 90 = z Z
	keyCode 96 = KP_0 KP_0
	keyCode 97 = KP_1 KP_1
	keyCode 98 = KP_2 KP_2
	keyCode 99 = KP_3 KP_3
	keyCode 100 = KP_4 KP_4
	keyCode 101 = KP_5 KP_5
	keyCode 102 = KP_6 KP_6
	keyCode 103 = KP_7 KP_7
	keyCode 104 = KP_8 KP_8
	keyCode 105 = KP_9 KP_9
	keyCode 106 = KP_Multiply KP_Multiply
	keyCode 107 = KP_Add KP_Add
	keyCode 108 = KP_Separator KP_Separator
	keyCode 109 = KP_Subtract KP_Subtract
	keyCode 110 = KP_Decimal KP_Decimal
	keyCode 111 = KP_Divide KP_Divide
	keyCode 112 = F1
	keyCode 113 = F2
	keyCode 114 = F3
	keyCode 115 = F4
	keyCode 116 = F5
	keyCode 117 = F6
	keyCode 118 = F7
	keyCode 119 = F8
	keyCode 120 = F9
	keyCode 121 = F10
	keyCode 122 = F11
	keyCode 123 = F12
	keyCode 124 = F13
	keyCode 125 = F14
	keyCode 126 = F15
	keyCode 127 = F16
	keyCode 128 = F17
	keyCode 129 = F18
	keyCode 130 = F19
	keyCode 131 = F20
	keyCode 132 = F21
	keyCode 133 = F22
	keyCode 134 = F23
	keyCode 135 = F24
	keyCode 136 = Num_Lock
	keyCode 137 = Scroll_Lock
	keyCode 187 = acute grave
	keyCode 188 = comma semicolon
	keyCode 189 = minus underscore
	keyCode 190 = period colon
	keyCode 192 = numbersign apostrophe
	keyCode 210 = plusminus hyphen macron
	keyCode 211 =
	keyCode 212 = copyright registered
	keyCode 213 = guillemotleft guillemotright
	keyCode 214 = masculine ordfeminine
	keyCode 215 = ae AE
	keyCode 216 = cent yen
	keyCode 217 = questiondown exclamdown
	keyCode 218 = onequarter onehalf threequarters
	keyCode 220 = less greater bar
	keyCode 221 = plus asterisk asciitilde
	keyCode 227 = multiply division
	keyCode 228 = acircumflex Acircumflex
	keyCode 229 = ecircumflex Ecircumflex
	keyCode 230 = icircumflex Icircumflex
	keyCode 231 = ocircumflex Ocircumflex
	keyCode 232 = ucircumflex Ucircumflex
	keyCode 233 = ntilde Ntilde
	keyCode 234 = yacute Yacute
	keyCode 235 = oslash Ooblique
	keyCode 236 = aring Aring
	keyCode 237 = ccedilla Ccedilla
	keyCode 238 = thorn THORN
	keyCode 239 = eth ETH
	keyCode 240 = diaeresis cedilla currency
	keyCode 241 = agrave Agrave atilde Atilde
	keyCode 242 = egrave Egrave
	keyCode 243 = igrave Igrave
	keyCode 244 = ograve Ograve otilde Otilde
	keyCode 245 = ugrave Ugrave
	keyCode 246 = adiaeresis Adiaeresis
	keyCode 247 = ediaeresis Ediaeresis
	keyCode 248 = idiaeresis Idiaeresis
	keyCode 249 = odiaeresis Odiaeresis
	keyCode 250 = udiaeresis Udiaeresis
	keyCode 251 = ssharp question backslash
	keyCode 252 = asciicircum degree
	keyCode 253 = 3 sterling
	keyCode 254 = Mode_switch
	使用event对象的keyCode属性判断输入的键值
	eg：if(event.keyCode==13)alert(“enter!”);
	键值对应表
	A　　0X65 　U 　　0X85
	B　　0X66　 V　　 0X86
	C　　0X67　 W　　 0X87
	D　　0X68　 X 　　0X88
	E　　0X69　 Y　　 0X89
	F　　0X70　 Z　　 0X90
	G　　0X71　 0　　 0X48
	H　　0X72　 1　　 0X49
	I　　0X73　 2　　 0X50
	J　　0X74　 3 　　0X51
	K　　0X75　 4 　　0X52
	L　　0X76　 5 　　0X53
	M　　0X77　 6　　 0X54
	N　　0X78 　7 　　0X55
	O　　0X79 　8 　　0X56
	P　　0X80 　9 　　0X57
	Q　　0X81　ESC　　0X1B
	R　　0X82　CTRL 　0X11
	S　　0X83　SHIFT　0X10
	T　　0X84　ENTER　0XD
	如果要使用组合键，则可以判断是否同时按下了这几个键，比如ctrl键、shift键以及alt键的组合使用就可以判断是否多按下了ctrl键、shift键以及alt键



// 鼠标事件

属性		此事件发生在何时						IE	F	O	W3C
onabort		图像的加载被中断。						4	1	9	Yes
onblur		元素失去焦点。							3	1	9	Yes
onchange	域的内容被改变。						3	1	9	Yes
onclick		当用户点击某个对象时调用的事件句柄。	3	1	9	Yes
ondblclick	当用户双击某个对象时调用的事件句柄。	4	1	9	Yes
onerror		在加载文档或图像时发生错误。			4	1	9	Yes
onfocus		元素获得焦点。							3	1	9	Yes
onkeydown	某个键盘按键被按下。					3	1	No	Yes
onkeypress	某个键盘按键被按下并松开。				3	1	9	Yes
onkeyup		某个键盘按键被松开。					3	1	9	Yes
onmousedown	鼠标按钮被按下。						4	1	9	Yes
onmousemove	鼠标被移动。							3	1	9	Yes
onmouseout	鼠标从某元素移开。						4	1	9	Yes
onmouseover	鼠标移到某元素之上。					3	1	9	Yes
onmouseup	鼠标按键被松开。						4	1	9	Yes
onreset		重置按钮被点击。						4	1	9	Yes
onsubmit	确认按钮被点击。						3	1	9	Yes


textInput dom3.0事件



// 浏览器事件
onload		一张页面或一幅图像完成加载。
onbeforeunload  在onunload之前发生	
onunload	用户退出页面。		
onselect  选择文本框input/textarea中的一个或多个字符时触发
onresize  改变浏览器窗口大小时触发
onscroll  滚动带滚动条的元素中的内容时，在该元素上触发。