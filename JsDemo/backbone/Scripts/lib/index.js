define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    var listView = { 
        World: Backbone.Model.extend({
            name: null
        }),

        Worlds: Backbone.Collection.extend({
            initialize: function(models, options) {
                this.bind("add", options.view.addOneWord);
            }
        }),

        AppView: Backbone.View.extend({
            el: $("body"),
            initialize: function() {
                this.worlds = new listView.Worlds(null, { view: this });
            },
            events: {
                "click #check": "checkIn"
            },

            checkIn: function() {
                var world_name = prompt("请问你是哪里人");
                if (world_name == "") world_name = "未知";
                var world = new listView.World({ name: world_name });
                this.worlds.add(world);
            },

            addOneWord: function (model) {
                $("#world-list").append("<li>我是来自：" + model.get("name") + "的人！</li>");
            }
        })
    };


    return listView;

});
