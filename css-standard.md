#CSS 部份
##基础
* css文件开始添加编码:`@charset "utf-8";`
* 选择器、属性和值都使用小写
* css请使用多行模式编写，上线之前再压缩（sublime text提供压缩的插件YUI Compressor，如果是用sass，可以选择直接解析成压缩的css）
* 使用简写模式（如：`border:1px solid #ccc;`）
* 代码缩进1个tab键(4个空格)
* z-index一般以5为一个步长（如50,55,60），方便以后增加或修改
* 请把所有前缀写在标准的前面(如-webkit-border-raidus:5px;-moz-border-raidus:5px;border-raidus:5px;)
* 不要写行内样式
* 不使用影响到页面性能expression表达式与filter，实现必要的特殊效果时，允许使用
* 使用!important请小心，确认是否有必要
* 请使用高效率选择器,可参阅[CSS选择器的优化](http://www.w3cplus.com/css/css-selector-performance)
* 使用clearfix或overflow清除子元素的浮动，而不是空标签
* 请不要直接定义标签样式(如span{}div{})
* 当值为0时的省略单位
* 样式表中中文字体名请使用转码后的unicode码，参阅：[css文件中的unicode参照](http://www.56.com/style/-doc-/v1/tpl/css_dev_spec/css_unicode.html)

###选择器权重
1. !important
2. 行内样式，指的是html文档中定义的style
3. ID选择器
4. 类，属性选择器和伪类选择器
5. 元素和伪元素

更多请查阅：[css选择器权重](http://www.w3cplus.com/css/css-specificity-things-you-should-know.html)

###注释
块级注释，用于布局结构或模块
	
	/* -------------------------------------------------
	 * block-hd
	 * -------------------------------------------------
	*/ 
	.block-hd{
	    line-height:30px;
	    text-align:right;
	}
	.block-hd h2{
	    float:left;
	}

单行注释，普通的注释
	 
	 /* more */
	.block-hd .more{
	    margin-right:10px;
	}

##各浏览器hack
请以标准浏览器为准书写css代码，如遇兼容问题，先考虑换实现方法，在万不得已的情况下，采用hack解决

###firefox
	
	/* Firefox 3+ */
	@-moz-document url-prefix() {}

###chrome及safari

	/* Chrome, Safari 3+ */
	@media screen and (-webkit-min-device-pixel-ratio:0) {}

###ie

选择器写法
	
	/* IE 6 and below */
	* html .selector  {} 
	
	/* IE 7 */
	*+html .selector {}
	
	/* IE 7 and below */
	.selector, {} 

属性写法

	.selector{
		color: blue\9; /* IE 6/7/8/9/10 */
		color: blue\9; /* IE 9/10 */
		*color:blue; /* ie6/7 */
		_color:blue; /* ie6 */
	}