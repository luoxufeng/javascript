<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="basicTest1.aspx.cs" Inherits="backbone.backboneDemo.basicTest1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>js  本例说明最小化的视图的声明与实例化</title>
</head>
<body>
   <button id="check">报到</button>  
    <div id="world-list">  
      
    </div>  
<a href="http://www.the5fire.net">更多教程</a>  
</body>
<script src="../Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
<%--<script src="../Scripts/json2.js" type="text/javascript"></script>--%>
<script src="../Scripts/underscore.js" type="text/javascript"></script>
<script src="../Scripts/backbone.js" type="text/javascript"></script>
<script type="text/javascript">
    (function ($) {
        //自运行的闭包
        //ListView :主要的视图 
        //initialize();自动调用上述实例，可以做除了界面元素事件以外的所有类型的绑定，比如说单击事件等等。
        //render();用于渲染整个视图函数的实例、this.el需要手动绑定
        //listView:实例化整个视图,需要实例化视图才有效果，实例化时会调用initialize()方法
        var ListView = Backbone.View.extend({
            el: $('#world-list'), // attaches `this.el` to an existing element.

            initialize: function () {
                _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

               this.render(); // not all views are self-rendering. This one is.
            },
            
            render: function () {
                $(this.el).append("<ul> <li>hello world</li> </ul>");
            }
        });

        var listView = new ListView();
    })(jQuery);
    

</script>
</html>
