// site/js/views/book.js

/* global Backbone */
/* global _ */
/* global $ */

var app = app || {};

app.BookView = Backbone.View.extend({
    
    tagName: 'div',
    
    className: 'bookContainer',
    
    template: _.template($("#bookTemplate").html()),
    
    events: {
        "click .delete": "deleteBook"
    },
    
    deleteBook: function () {
        // Delete model
        this.model.destroy();
        // Delete view
        this.remove();
    },
    
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});