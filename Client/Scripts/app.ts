/*Rodrigo Pacheco - 301095037
  19/06/2021
  Assignment 2
*/
"use strict";

(function()
{
    function confirmDelete()
    {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?"))
            {
                event.preventDefault();
                location.href = '/clothing-list'
                
            }

        })
    }

    function Start(): void 
    {
        console.log("App Started");

        confirmDelete();
    }

    window.addEventListener("load", Start);


})()