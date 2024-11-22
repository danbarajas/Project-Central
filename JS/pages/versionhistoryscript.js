/**
 * Project Central
 * versionhistoryscript.js - Version History Page Script
 * @description Script made specifically for the Version History page
 * @author Daniel Barajas
 * Last update: 11/8/2021
 */

// Start with most recent collapsible open
document.getElementsByClassName("collapsibleBar")[0].id = "vhTop";
vhTop.nextElementSibling.style.maxHeight = vhTop.nextElementSibling.scrollHeight + "px";
vhTop.classList.toggle("collActive");

// Collapsible Lists
// Assign collapsible effect to all collapsible bars
let collBar = document.getElementsByClassName("collapsibleBar");
for (let c of collBar) {
    c.addEventListener("click", function() {
        this.classList.toggle("collActive");
        let content = this.nextElementSibling;
        if (content.style.maxHeight)
            content.style.maxHeight = null;
        else
            content.style.maxHeight = content.scrollHeight + "px";
    });
}