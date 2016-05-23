"use strict";
/*global $ */

$(document).ready(function () {
    var aantal = $("li").length;
    $("body").append("aantal plaatnsen: " + aantal);
});