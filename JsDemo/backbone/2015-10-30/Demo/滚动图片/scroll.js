(function ($) {
    var SearchView = Backbone.View.extend({
      
        initialize: function () {

        },
        render: function (content) {
            //使用underscore这个库，来编译模板
            var template = _.template($("#viewportTmpl").html());

            //加载模板到对应的el属性中
            $(this.el).html(template(content));
        }
    });

    var searchView = new SearchView();
    //也可以在实例化的时候传递el属性给View
    //  var searchView = new SearchView({ el: $("#search_container") });

    //这个render方法可以放在view的构造函数中
    //这样初始化时就会自动渲染
    searchView.render({ search_label: "搜索渲染" });
})(jQuery)