//IIFE -- IMMEDIATELY INVOKER FUNCTION EXPRESS 
"use strict";

(function(){

    function Start():void{
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();