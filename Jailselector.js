// ==UserScript==
// @name       jail selector
// @namespace  
// @version    0.1
// @description  enter something useful
// @match      http://barafranca.nl/*
// @match      http://www.barafranca.nl/*
// @match      http://www.barafranca.com/*
// @match      http://barafranca.com/*
// @copyright  2012+, You
// ==/UserScript==
//Add other busters below. first buster gets highest priority, etc.
var busters = [
   
"Xerano",
"Nightwing",

    

 

];

$(document).ready(function() {
    selectBusters();
});


function selectBusters() {
    if (window.location.hash.indexOf("jail.php") !== -1 && !$("#game_container table:first").is("[data-selector-done]")) {
        for (var i = 0; i < busters.length; i++) {
            if ($($("a[href='user.php?nick=" + busters[i] + "']").parents()[2]).find("input").prop('checked', true).length != 0) {
                $($("#game_container table")[2]).before("<div style='font-size: 15px; text-align: center; margin: auto; width: 100%; margin-top: -25px; padding-bottom: 35px;'>Selected: <strong style='color: rgba(16, 255, 207, 0.78)'>" + busters[i] + "</strong></div>");;
                break;
            }
        }
        $("#game_container table:first").attr('data-selector-done', 'true');
    	
    }
    
    window.setTimeout(selectBusters, 800);
}
