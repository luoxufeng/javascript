$(function() {

    var Todo = Backbone.Model.extend({
        // Default attributes for the todo item.
        defaults: function () {
            return {
                title: "empty todo...",
                order: Todos.nextOrder(),
                done: false
            };
        },

        //Toggle the done state of this todo item
        toggle: function() {
            this.save({ done: !this.get('done') });
        }
    });

	var TodoList=Backbone.Collection.extend({

		model:Todo,

		localStorage: new Backbone.LocalStorage("todos-backbone"),

		done:function()
		{
			return this.where({done:true});
		},

		remaining:function()
		{
			return this.where({done:false});
		},

		nextOrder:function()
		{
			if(!this.length)
				return 1;
			return this.last().get("order")+1;
		},

		//Todos are sorted by their original insertion order.
		comparator:"order"

});

    var Todos = new TodoList;

	var TodoView=Backbone.View.extend({

		tagName:"li",

		template:_.template($("#item-template").html()),

		events:{
		   "dblclick .view":"edit",
           "keypress .eidt":"updateOnEnter",
           "blur .edit":"close",
           "click .toggle":"toggleDone",
           "click a.destroy":"clear"
		},


		initialize:function()
		{
			this.listenTo(this.model,"change",this.render);
			this.listenTo(this.model,"destroy",this.remove);
		},

		render:function()
		{
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass("done",this.model.get("done"));
            this.input=this.$('.edit');
            return this;
		},

		edit:function()
		{
           this.$el.addClass("editing");
           this.input.focus();
		},


		updateOnEnter:function(e)
		{
           if(e.keyCode==13)
           	this.close();
		},

		clear:function()
		{
			this.model.destroy();
		},

		close:function()
		{
			var value=this.input.val();
			if(!value)
			{
				this.clear();
			}
			else
			{
               this.model.save({title:value});
               this.$el.removeClass("editing");
			}
		},

		//Toggle The "done" state of the model.
		toggleDone:function()
		{
			this.model.toggle();
		}
	});

	var AppView=Backbone.View.extend({
      
		el:$("#todoapp"),

		statstemplate:_.template($("#stats-template").html()),

		events:{
			"keypress #new-todo":"createOnEnter",
			"click #clear-completed":"clearCompleted",
			"click #toggle-all":"toggleAllComplete"
		},

		initialize:function()
		{
			this.input=this.$("#new-todo");
			this.allCheckbox=this.$("#toggle-all")[0];

			this.listenTo(Todos,"add",this.addOne);
			this.listenTo(Todos,"all",this.render);
			this.listenTo(Todos,"reset",this.addAll);

			this.footer=this.$('footer');
			this.main=$("#main");

			Todos.fetch();
		},

		render:function()
		{
			var done=Todos.done().length;
			var remaining=Todos.remaining().length;

			if(Todos.length)
			{
				this.main.show();
				this.footer.show();
				this.footer.html(this.statstemplate({done:done,remaining:remaining}));
			}else{
				this.main.hide();
				this.footer.hide();
			}

			this.allCheckbox.checked=!remaining;
		},

		addOne:function(todo)
		{
           var todoView=new TodoView({model:todo});
           this.$("#todo-list").append(todoView.render().el);
		},

		createOnEnter:function(e)
		{
			if(e.keyCode!=13) return;
			var value=this.input.val();
			if(!value) return;
			Todos.create({title:value});
			this.input.val('');
		},

		clearCompleted:function()
		{
			_.invoke(Todos.done(),"destroy");
            return false;
		},

		toggleAllComplete:function()
		{
			var done=this.allCheckbox.checked;
			Todos.each(function(todo){
				todo.save({'done':done});
			})
		}

	});

	var app=new AppView;
});

