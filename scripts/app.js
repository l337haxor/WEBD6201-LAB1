"use strict";

/*
Title: LAB 1
Author: Sterling Wenzelbach
Student ID: 100299329
Since: 2020-01-03
*/

// IIFE - Immediately Invoked Function Expression

(function(){

    let h2;

    function Start()
    {
         
        console.log("%c App Started", "font-size: 50px");

        let productsReplace = document.getElementsByClassName("nav-item")[1];
        productsReplace.lastChild.textContent = "Projects";
        console.log(productsReplace);



        let mainContent = document.getElementById("mainContent");

        let h2 = document.createElement("h2");
        h2.setAttribute("class", "display-2");
        h2.textContent = "Content";

        mainContent.appendChild(h2);

        let brand = document.getElementsByClassName("navbar-brand")[0];

        brand.textContent = "Client-side Scripting";

    }
    
    window.addEventListener("load", Start);

})();