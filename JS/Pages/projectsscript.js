/**
 * Project Central
 * projectsscript.js - Projects Page Script
 * @description Script made specifically for the Projects page that allows for filtering and searching through the projects
 * @author Daniel Barajas
 * Last update: 1/10/2022
 */

// Global variables for SQL calls from projectsUpdate()
let like = "";
let catNames = [];
let lanNames = [];
let accTypes = [];
let order = "Project_Name ASC";

// Updates the list of projects to only display projects that match a specified criteria
function projectsUpdate() {
	like = "%" + like + "%";

	// Format all category names to include in the project list into an SQL query
	let catStr;
	if (catNames.length == 0)
		catStr = "";
	else {
		catStr = "AND (Category_Name LIKE ";
		for (let c of catNames)
			catStr += "'" + c + "' OR Category_Name LIKE ";
		catStr = catStr.slice(0, -23); // Remove last hanging OR statement
		catStr += ')';
	}

	// Format all languages to include in the project list into an SQL query
	let lanStr;
	if (lanNames.length == 0)
		lanStr = "";
	else {
		lanStr = "AND (Language_Name LIKE ";
		for (let l of lanNames)
			lanStr += "'" + l + "' OR Language_Name LIKE ";
		lanStr = lanStr.slice(0, -23); // Remove last hanging OR statement
		lanStr += ')';
	}

	// Format all access types to include in the project list into an SQL query
	let accStr;
	if (accTypes.length == 0)
		accStr = "";
	else {
		accStr = "AND (Access_Type LIKE ";
		for (let a of accTypes)
			accStr += "'" + a + "' OR Access_Type LIKE ";
		accStr = accStr.slice(0, -21); // Remove last hanging OR statement
		accStr += ')';
	}

	// Load projects into the list using all the variables
	$("#projectList").load("../PHP/loadprojects.php", {
		like: like,
		order: order,
		catNames: catStr,
		lanNames: lanStr,
		accTypes: accStr,
	});
}

// Display all projects on page load
$(document).ready(function() {
	projectsUpdate();
});

// Highlight appropriate nav button for this page
for (let n of document.getElementsByClassName("navProjects"))
	n.classList.toggle("navCurrent");

// SEARCH FUNCTION
// Update the like variable to the inputted text within the search bar and update the project list
function searchUpdate() {
	like = search.value;
	projectsUpdate()
}

//FILTER FUNCTIONS
// Add or remove the given category to the list of categories to filter by, then update the project list
let categoryFilterInputs = filterCategory.getElementsByTagName("input");
for (let i = 0; i < categoryFilterInputs.length; i++) {
	categoryFilterInputs[i].addEventListener("click", function() {
	     if (this.checked)
	          catNames.push(this.value);
	     else
	          catNames.splice(catNames.indexOf(this.value), 1);
		 projectsUpdate();
	});
}

// Add or remove the given language to the list of languages to filter by, then update the project list
let languageFilterInputs = filterLanguage.getElementsByTagName("input");
for (let i = 0; i < languageFilterInputs.length; i++) {
	languageFilterInputs[i].addEventListener("click", function() {
		if (this.checked)
			lanNames.push(this.value);
		else
			lanNames.splice(lanNames.indexOf(this.value), 1);
		projectsUpdate();
	});
}

// Add or remove the given access type to the list of access types to filter by, then update the project list
let accessFilterInputs = filterAccess.getElementsByTagName("input");
for (let i = 0; i < accessFilterInputs.length; i++) {
	accessFilterInputs[i].addEventListener("click", function() {
		if (this.checked)
			accTypes.push(this.value);
		else
			accTypes.splice(accTypes.indexOf(this.value), 1);
		projectsUpdate();
	});
}

// SORT FUNCTIONS
function removeSort(sortToggle) {
	let sortHeaders = document.getElementsByTagName("th");
	for (let s of sortHeaders) {
		if (s != sortToggle && s.classList.contains("sortDesc")) 
			s.classList.remove("sortDesc");
		else if (s != sortToggle && s.classList.contains("sortAsc"))
			s.classList.remove("sortAsc");
	}

	if (sortToggle.classList.contains("sortDesc") || sortToggle.classList.contains("sortAsc")) {
		sortToggle.classList.toggle("sortDesc");
		sortToggle.classList.toggle("sortAsc");
	} else
		sortToggle.classList.add("sortAsc");
}

sortName.addEventListener("click", function() {
	removeSort(sortName);
	if (sortName.classList.contains("sortDesc"))
		order = "Project_Name DESC";
	else
		order = "Project_Name ASC";
	projectsUpdate();
});

sortCategory.addEventListener("click", function() {
	removeSort(sortCategory);
	if (sortCategory.classList.contains("sortDesc"))
		order = "Category_Name DESC";
	else
		order = "Category_Name ASC";
	projectsUpdate();
});

sortVersion.addEventListener("click", function() {
	removeSort(sortVersion);
	if (sortVersion.classList.contains("sortDesc"))
		order = "Version DESC";
	else
		order = "Version ASC";
	projectsUpdate();
});

sortCreated.addEventListener("click", function() {
	removeSort(sortCreated);
	if (sortName.classList.contains("sortDesc"))
		order = "Date_Created DESC";
	else
		order = "Date_Created ASC";
	projectsUpdate();
});

sortUpdated.addEventListener("click", function() {
	removeSort(sortUpdated);
	if (sortName.classList.contains("sortDesc"))
		order = "Date_Updated DESC";
	else
		order = "Date_Updated ASC";
	projectsUpdate();
});

// COLLAPSIBLES
// Assign collapsible effect to the filter section
filter.addEventListener("click", function() {
	this.classList.toggle("expanded");
	let content = this.nextElementSibling;
	if (content.style.maxHeight)
		content.style.maxHeight = null;
	else
		content.style.maxHeight = content.scrollHeight + "px";
});

// Assign collapsible effect to all other generated collapsible project bars
function setCollapsibles() {
	let pColls = document.getElementsByClassName("project");

	for (let p of pColls) { // for each project, add a collapsible effect with collContent
		p.addEventListener("click", function() {
			let content = this.nextElementSibling; // collContent div for the project

			 // if maxHeight exists (collapsible is open)
			if (content.style.maxHeight) {
				content.style.maxHeight = null; // close
				content.style.padding = "0 2em";
				// check if current project is the last project in the list for the appropriate border
				if (content.nextElementSibling.classList.contains("project")) {
					this.style.borderBottom = "none";
					content.nextElementSibling.style.borderTopColor = "#DDD";
				} else
					content.style.borderBottom = "none";
			// if maxHeight does not exist (collapsible is closed)
			} else {
				content.style.padding = "1em 2em";
				content.style.maxHeight = "calc(" + (content.scrollHeight + 1) + "px + 2em)"; //open
				// check if current project is the last project in the list for the appropriate border
				if (content.nextElementSibling.classList.contains("project")) {
					this.style.borderBottom = "1px solid #AAA";
					content.nextElementSibling.style.borderTopColor = "#AAA";
				} else
					content.style.borderBottom = "1px solid #DDD";
			}
		});
	}
}