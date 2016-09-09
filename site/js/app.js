// site/js/app.js

/* global $ */

var app = app || {};

$(function() {

    $('#releaseDate').datepicker();
    new app.LibraryView();
    
});
