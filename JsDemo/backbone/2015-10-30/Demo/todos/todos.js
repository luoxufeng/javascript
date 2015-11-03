// An example Backbone application contributed by
// [J茅r么me Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone-localstorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:
$(function () {

    //基本的Todo模型，属性为：title，order，done
    var Todo = Backbone.Model.extend({
        //设置默认属性
        defaults: function() {
            
            return {
            title:"empty todo...",
            order: Todos.nextOrder(),
            done:false
           }
        },
        
        //设置任务完成状态
        toggle: function() {
            this.save({done:!this.get("order")+1});
        }
    });

    var TodoList = Backbone.Collection.extend({

        //设置collection的模型为Todo
        model:Todo,
        
        localStorage:new Backbone.LocalStorage("todos-backbone"),
        
        //获取所有已经完成的任务数组
        done: function() {
            return this.where({done:true});
        },
        
        //获取任务列表未完成的数组
        remaining: function() {
            return this.where({done:false});
        },
        
        //获取下一个任务的排序序号，通过数据库中的记录数加1实现
        nextOrder: function() {
            if (!this.length) return 1;
            //last获取collection中最后一个元素
            return this.last().get("order")+1;
        },
        
        //backbone内置属性，指明collection的排序规则
        comparator:"order"
    });

    //首先创建一个全局的Todo的Collection对象
    var Todos = new TodoList;

    //Todoview，作用是控制任务列表
    var TodoView = Backbone.View.extend({
        
        //下面这个标签的作用，把template模板中取到的html代码放到这标签中
        tagName:"li",

        template: _.template($("#item-template").html()),
        
        //为每一个任务条目绑定事件
        events: {
            "click .toggle":"toggleDone",
            "dbclick .view":"edit",
            "click a.destroy":"clear",
            "keypress .edit":"updateOnEnter",
            "blur .edit":"close"
        },
        
        //在初始化时设置对model的change事件的监听
        //设置对model的destroy的监听，保证页面数据和model数据一致
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            //这个remove是view的中的方法，用来清除页面中的dom
            this.listenTo(this.model,"destroy",this.remove);
        },
        
        //渲染todo中的数据到item-template中，然后返回对自己的引用this
        render:function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass("done", this.model.get("done"));
            this.input = this.$(".edit");
            return this;
        },
        
        //控制任务完成或者未完成
        toggleDone:function() {
            this.model.toggle();
        },
        
        //修改任务条目的样式--编辑
        edit:function() {
            $(this.el).addClass("editing");
            this.input.focus();
        },
        
        //关闭编辑模式，并把修改内容同步到Model和界面
        close: function() {
            var value = this.input.val();
            if (!value) {
                this.clear();//无值内容直接从页面清除
            } else {
                this.model.save({ title: value });
                this.$el.removeClass("editing");
            }
        },
        
        //按下回车之后，关闭编辑模式
        updateOnEnter: function(e) {
            if (e.keyCode == 13)
                this.close();
        },
        
        //移除对应条目，以及对应的数据对象
        clear:function() {
            this.model.destroy();
        }
    });

    //主要是一个整体上的控制
    var AppView = Backbone.View.extend({
        //绑定到页面上主要的Dom节点
        el: $("#todoapp"),

        //底部显示统计数据的模板
        statsTemplate: _.template($("#stats-template").html()),
        
        //绑定dom节点上的事件
        events: {
            "keypress #new-todo": "createOnEnter",
            "click #clear-completed": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
           },
        
        //在初始化过程中，绑定事件到Todos上，
        //当任务列表改变时会触发对应的事件。
        //最后从localStorage中fetch数据到Todos中
        initialize:function() {
            this.input = this.$("#new-todo");
            this.allCheckbox = this.$("#toggle-all")[0];

            this.listenTo(Todos, "add", this.addOne);
            this.listenTo(Todos, "reset", this.addAll);
            this.listenTo(Todos, "all", this.render);

            this.footer = this.$("footer");
            this.main = $("#main");

            Todos.fetch();
        },
        
        //更改当前任务列表的状态
        render:function() {
            var done = Todos.done().length;
            var remaining = Todos.remaining().length;
            if (Todos.length) {
                this.main.show();
                this.footer.show();
                this.footer.html(this.statsTemplate({ done: done, remaining: remaining }));
            } else {
                this.main.hide();
                this.footer.hide();
            }

            //根据剩余多少未完成确定标记全部完成的checkbox的显示
            this.allCheckbox.checked = !remaining;
        },
        
        //添加一个任务到页面id为todo-list的div/ul中
        addOne:function(todo) {
            var view = new TodoView({ model: todo });
            this.$("#todo-list").append(view.render().el);
        },
        
        //把Todos中的所有数据渲染到页面，页面加载的时候on个到
        addAll: function() {
            Todos.each(this.addOne,this);
        },
        
        //生成一个新Todo的所有属性字典
        newAttributes:function() {
            return {
                title: this.input.val(),
                order: Todos.nextOrder(),
                done: false
            };
        },
        
      //创建一个任务的方法，使用backbone.collection的create方法。
      //将数据保存到localStorage,这是一个html5的js库。
     //需要浏览器支持html5才能用。
        createOnEnter:function(e) {
            if (e.keyCode != 13) return;
            if (!this.input.val()) return;

            //创建一个对象之后会在backbone中动态调用Todos的add方法
            //该方法已绑定addOne
            Todos.create({ title: this.input.val() });
            this.input.val("");
        },
        
        //去掉所有已经完成的任务
        clearCompleted:function() {
            // 调用underscore.js中的invoke方法
            //对过滤出来的todos调用destroy方法
            _.invoke(Todos.done(), 'destroy');
            return false;
        },
        
        //处理页面点击标记全部完成按钮
            //处理逻辑：
            //    如果标记全部按钮已选，则所有都完成
            //    如果未选，则所有的都未完成。  
        toggleAllComplete:function() {
            var done = this.allCheckbox.checked;
            Todos.each(function(todo) {
                todo.save({"done":done});
            });
        }
    });

    var appview = new AppView;
});
