/*
Project Central: projectvars.js
Daniel Barajas
Last edit: 1/13/2022
*/

// UNIVERSAL PROJECT VARIABLE
let projects = document.getElementsByClassName("projectBar");

// PROJECT VARIABLES
  // Project Central
    pcID = document.getElementById("projectCentral");
	pcCategory = "Web Design";
	pcAccess = "Link";
	pcActivity = "Added ";
	pcFullDate = new Date("January 13, 2022 9:41");
	pcDate = (pcFullDate.getMonth() + 1) + "/" + pcFullDate.getDate() + "/" + pcFullDate.getFullYear();
	
  // Web Portal
    wpID = document.getElementById("webPortal");
	wpName = "Web Portal";
	wpCategory = "Web Design";
	wpAccess = "N/A";
	wpVersion = "N/A";
	wpActivity = "Added ";
	wpFullDate = new Date("January 13, 2022 9:49");
	wpDate = (wpFullDate.getMonth() + 1) + "/" + wpFullDate.getDate() + "/" + wpFullDate.getFullYear();
	
  // College Countdown
    ccID = document.getElementById("collegeCountdown");
	ccName = "College Countdown";
	ccCategory = "Journalism";
	ccAccess = "File";
	ccVersion = "N/A";
	ccActivity = "Added ";
	ccFullDate = new Date("January 13, 2022 10:10");
	ccDate = (ccFullDate.getMonth() + 1) + "/" + ccFullDate.getDate() + "/" + ccFullDate.getFullYear();
	
// SET UP PROJECT DETAILS
  // Project Central
    pcID.getElementsByClassName("pName")[0].innerHTML = siteName;
	pcID.getElementsByClassName("pCategory")[0].innerHTML = pcCategory;
	pcID.getElementsByClassName("pAccess")[0].innerHTML = pcAccess;
	pcID.getElementsByClassName("pVersion")[0].innerHTML = version;
	pcID.getElementsByClassName("pActivity")[0].innerHTML = pcActivity + pcDate;
	
  // Web Portal
    wpID.getElementsByClassName("pName")[0].innerHTML = wpName;
	wpID.getElementsByClassName("pCategory")[0].innerHTML = wpCategory;
	wpID.getElementsByClassName("pAccess")[0].innerHTML = wpAccess;
	wpID.getElementsByClassName("pVersion")[0].innerHTML = wpVersion;
	wpID.getElementsByClassName("pActivity")[0].innerHTML = wpActivity + wpDate;
	
  // College Countdown
    ccID.getElementsByClassName("pName")[0].innerHTML = ccName;
	ccID.getElementsByClassName("pCategory")[0].innerHTML = ccCategory;
	ccID.getElementsByClassName("pAccess")[0].innerHTML = ccAccess;
	ccID.getElementsByClassName("pVersion")[0].innerHTML = ccVersion;
	ccID.getElementsByClassName("pActivity")[0].innerHTML = ccActivity + ccDate;