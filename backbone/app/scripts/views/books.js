/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BooksView = Backbone.View.extend({
        template: JST['app/scripts/templates/books.ejs']
    });

    return BooksView;
});