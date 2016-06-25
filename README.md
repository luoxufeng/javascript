<<<<<<< HEAD
javascript
==========

jquery,javascript等相关知识
=======
# css
清除浮动：
方法一：在底部插入：clear:both --》可以使用伪元素代替 （IE6/7:zoom:1）
方法二：让父元素BFC

标准的写法：
.clearfix:after{content:"",display:block;height:0;overflow:hidden;clear:both}
.clearfix{*zoom:1}

可以用以下这种方式替换：
.clearfix:after{content:"",display:table;clear:both}
.clearfix{*zoom:1}


.clearfix应用在包含浮动元素的父级元素上 （不要滥用）

浮动可以让元素block化和去空格化 clear.html

缺点：
1)容错性差
2）重用性差，需要固定width
3）IE7


借助浮动实现流体布局
1)内容自适应：
左侧固定宽度，右侧margin-left，这样右侧的内容自适应，详见：float1.html

2)左侧和右侧都自适应宽度,具体请参照：float2-flow.html
float
display:table-cell           IE8+
display:inline-block         IE7


tab.html 结合jquery和understore做的一个tab切换Demo
autoswitch.html  单张图片自动切换


>>>>>>> 15eef90680df8991da9539608f1ee0c21d5fc735
