"use strict";
/*global $ */

$(document).ready(function () {
    // menu opzetten en de voorbeelden verbergen
    $(".voorbeeld > h2 span").clone().prependTo("#menu").wrap("<li></li>").wrap("<a></a>");
    $("#menu").menu();
    $('.voorbeeld').hide();

    // de menuitems automatisch naar de juiste voorbeelden laten linken
    $("nav a").attr({
        onmousedown : function (index) {// pas de id aan
            return "javascript:toonVb(" + index + ");";
        }
    });

    /*
     *
     * vb 1
     * Let op : we zitten hier binnen de $(document).ready()
     */

    $("#wind").click(function () {
        $("#windInfo img").show();
    });

    /*
     *
     * vb 2
     * Let op : we zitten hier binnen de $(document).ready()
     */
    $("#wind2").click(function () {
        $("#windInfo2 img").toggle();
    });

    /*
     *
     * vb 3
     * Let op : we zitten hier binnen de $(document).ready()
     */

    $("#toggle3").click(function () {
        $("#windInfo3 img").toggle("slow");
    });
    $("#slideDown").click(function () {
        $("#windInfo3 img").slideDown("slow");
    });
    $("#slideUp").click(function () {
        $("#windInfo3 img").slideUp("slow");
    });
    $("#slideToggle").click(function () {
        $("#windInfo3 img").slideToggle("slow");
    });
    $("#fadeIn").click(function () {
        $("#windInfo3 img").fadeIn("slow");
    });
    $("#fadeOut").click(function () {
        $("#windInfo3 img").fadeOut("slow");
    });
    $("#fadeToggle").click(function () {
        $("#windInfo3 img").fadeToggle("slow");
    });

});

function toonVb(itemNr) {
    // verberg alle elementen met de klasse voorbeeld
    $('.voorbeeld').hide();
    // toon het element met klasse voorbeeld dat op positie itemNr staat
    $('.voorbeeld').eq(itemNr).show();

}