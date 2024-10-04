/*
Project Central: archivebar.js - Archive Bar Script
Short script to display a bar at the bottom of the page when viewing archived versions of the website
from Version History. The bar informs the user that the page is an archived version and provides a
link back to the current version of the website.
Author: Daniel Barajas
Last update: 3/8/2024
*/

const archiveBar = document.createElement("a");
archiveBar.id = "archiveBar";
archiveBar.href = "/Project Central/pages/versionhistory.html";
archiveBar.innerHTML = `<div id="arrow"></div><span>You are viewing archived version v${version} | <strong>Go back</strong></span>`;
document.body.appendChild(archiveBar);

const bottomSpacer = document.createElement("div");
bottomSpacer.id = "bottomSpacer";
document.body.appendChild(bottomSpacer);

const style = document.createElement("style");
document.head.appendChild(style);
style.textContent = `
#archiveBar {
    background-color: #F33;
    text-decoration: none;
    color: #FAFAFA;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    line-height: 2.5em;
    border-radius: 10px 10px 0 0;
    transition: line-height 0.05s;
}

#archiveBar:hover {
    line-height: 2.75em;
    cursor: pointer;
}

#archiveBar span {
	transition: 0.3s;
	position: relative;
	display: inline-block;
}

#archiveBar span:after {
	content: "\\2190";
    font-family: monospace;
    font-size: 2em;
	position: absolute;
	opacity: 0;
	top: -0.1em;
	right: 0;
}

#archiveBar:hover span {
	padding-right: 0.75em;
	cursor: pointer;
}

#archiveBar:hover span:after {
	opacity: 1;
	right: -0.3em;
}

#arrow {
    display: inline;
    float: left;
    font-size: 2.5em;
    font-family: monospace;
    margin-left: 0.5em;
}

#arrow:after {
    content: "\\2190";
}

#bottomSpacer {
    height: 2.5em;
}
`;