/*
Project Central: projectsscript.js
Daniel Barajas
Last edit: 1/10/2022
*/

//variables from projectvars.js

/*for (let a = 0; a < projects.length; a++) {
     projects[a].addEventListener("mouseover", function() {
	     this.getElementsByClassName("pExpand")[0].getElementsByClassName("pExAnim")[0].style.width = "10px";
	});
	projects[a].addEventListener("mouseleave", function() {
	     this.getElementsByClassName("pExpand")[0].getElementsByClassName("pExAnim")[0].style.width = "0px";
	});
}*/

// SEARCH BAR FUNCTION
function searchUpdate() {
     let searchBar = document.getElementById("search").value;
     
     if (searchBar == "") {
	     for (let k = 0; k < projects.length; k++) {
	          
	          // FIlter Check
	          if(!(projects[k].classList.contains("Web Design") || projects[k].classList.contains("Journalism") || projects[k].classList.contains("Link") || projects[k].classList.contains("File"))) {
	               projects[k].style.display = "flex";
	          }
	     }
	} else {
     	for (let i = 0; i < projects.length; i++) {
     		if (searchBar.toLowerCase() == projects[i].getElementsByClassName("pName")[0].innerHTML.toLowerCase()
     		// Filter Check
     		&& !(projects[i].classList.contains("Web Design") || projects[i].classList.contains("Journalism") || projects[i].classList.contains("Link") || projects[i].classList.contains("File"))) {
     		     projects[i].style.display = "flex";
     		} else {
     		     projects[i].style.display = "none";
     		     for (let j = 0; j < projects[i].getElementsByClassName("pName")[0].innerHTML.length - searchBar.length + 1; j++) {
     		          if (searchBar.toLowerCase() == projects[i].getElementsByClassName("pName")[0].innerHTML.substring(j, j + searchBar.length).toLowerCase()
     		          // Filter Check
     		          && !(projects[i].classList.contains("Web Design") || projects[i].classList.contains("Journalism") || projects[i].classList.contains("Link") || projects[i].classList.contains("File"))) {
     		               projects[i].style.display = "flex";
     		          }
     		     }
     		}
     	}
	}
}

//FILTER FUNCTIONS
let categoryFilterInputs = document.getElementById("filterCategory").getElementsByTagName("input");
for (let i = 0; i < categoryFilterInputs.length; i++) {
	categoryFilterInputs[i].addEventListener("click", function() {
	     if (this.checked) {
	          for (let j = 0; j < projects.length; j++) {
	               if (projects[j].getElementsByClassName("pCategory")[0].innerHTML !== this.value) {
	                    projects[j].style.display = "none";
	                    projects[j].classList.add(this.value.split(' ').join(''));
	               }
	          }
	     } else {
	          for (let k = 0; k < projects.length; k++) {
	               if (projects[k].getElementsByClassName("pCategory")[0].innerHTML !== this.value) {
	                    if(projects[k].classList.length == 2) {
     	                    projects[k].style.display = "flex";
     	                    //searchUpdate();

	                    }
	                    projects[k].classList.remove(this.value.split(' ').join(''));	               }
	          }
	     }
	});
}

let accessFilterInputs = document.getElementById("filterAccess").getElementsByTagName("input");
for (let i = 0; i < accessFilterInputs.length; i++) {
	accessFilterInputs[i].addEventListener("click", function() {
	     if (this.checked) {
	          for (let j = 0; j < projects.length; j++) {
	               if (projects[j].getElementsByClassName("pAccess")[0].innerHTML !== this.value) {
	                    projects[j].style.display = "none";
	                    projects[j].classList.add(this.value.split(' ').join(''));
	               }
	          }
	     } else {
	          for (let k = 0; k < projects.length; k++) {
	               if (projects[k].getElementsByClassName("pAccess")[0].innerHTML !== this.value) {
	                    if(projects[k].classList.length == 2) {
     	                    projects[k].style.display = "flex";
     	                    //searchUpdate();

	                    }
	                    projects[k].classList.remove(this.value.split(' ').join(''));	               }
	          }
	     }
	});
}