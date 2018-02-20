"use strict";

$(function() {
    $("#count-sum").click(function() {
        var suma = 0;
        $(".salary").each(function(){
            suma += parseInt($(this).html());
        });
        
        $("#sum").html(suma);
    });
    
});