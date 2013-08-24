/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var BooksModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return BooksModel;
});