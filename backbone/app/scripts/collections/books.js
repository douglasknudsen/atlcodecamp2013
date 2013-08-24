/*global define*/

define([
    'underscore',
    'backbone',
    'models/books'
], function (_, Backbone, BooksModel) {
    'use strict';

    var BooksCollection = Backbone.Collection.extend({
        model: BooksModel
    });

    return BooksCollection;
});