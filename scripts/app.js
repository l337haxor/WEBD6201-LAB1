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
        //
        let productsReplace = document.getElementsByClassName("nav-item")[1];
        //
        productsReplace.lastChild.lastChild.textContent = " Projects";
        
        //Copy the productsReplace object
        let newLink = productsReplace.cloneNode(true);
        //Change the icon
        //newLink.lastChild.setAttribute("class", "fas fa-male");
        //Change the link name
        newLink.lastChild.lastChild.textContent = " Human Resources";
        
        //Target the last link in the navbar
        let contactUslink = document.getElementsByClassName("nav-item")[4];
        //Get a reference to the parent node, ul in this case
        let parentNode = contactUslink.parentNode;
        //Insert the new link before the contact us link (last link)
        parentNode.insertBefore(newLink, contactUslink);

        /*
        let mainContent = document.getElementById("mainContent");
        let h2 = document.createElement("h2");
        h2.setAttribute("class", "display-2");
        h2.textContent = "Content";
        mainContent.appendChild(h2);
        */

        //Get reference to the title section of the page
        let brand = document.getElementsByClassName("navbar-brand")[0];
        //Change its text to LAB1
        brand.textContent = "WEBD6201-LAB1";

        //Get the foot element
        let footer = document.getElementById("footer");
        //Change its text colour to white
        footer.style.color = "white";

    }
    
    window.addEventListener("load", Start);

})();