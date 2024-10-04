/*
Project Central: script.js - Universal Script
Main script for Project Central that is used by most pages for shared elements like
the navigation bar, footer, and other features.
Author: Daniel Barajas
Last update: 12/14/2021
*/

// CONSTANT WEBSITE VARIBLES
  // ROOT DIRECTORY -- Used in all adaptable links and images; Match to the root directory file path
  // (for my personal use on different devices or if I move the folder location)
const rootDirec = "/Project Central/pages/archives/v0.3.0/";

  // VERSION NUMBER -- Current version of the website displayed in the footer
const version = "0.3.0";

  // WEBSITE TITLE -- Name of the website; used in titles and other text
const siteName = "Project Central";


// UNIVERSAL PAGE ELEMENTS SECTION
  // Update Nav Bar for all linked pages
let nav = document.getElementsByTagName("nav")[0];
if (nav) {
     nav.innerHTML =
     `<div id="logo"><span class="title"><span class="logoLetter">P</span><div class="titleAnim">roject</div><span class="logoLetter">C</span><div class="titleAnim">entral</div></span></div>
     <ul id="horzNav">
          <li><a href="${rootDirec}pages/about.html" class="about">about</a></li>
          <li><a href="${rootDirec}pages/projects.html" class="projects">projects</a></li>
          <li><a href="${rootDirec}index.php" class="home">home</a></li>
     </ul>
               
     <ul id="vertNav">
          <li><a href="${rootDirec}index.php" class="home">home</a></li>
          <li><a href="${rootDirec}pages/projects.html" class="projects">projects</a></li>
          <li><a href="${rootDirec}pages/about.html" class="about">about</a></li>
     </ul>`;
}

  // Update Footer for all linked pages
let footer = document.getElementsByTagName("footer")[0];
if (footer) {
     footer.innerHTML =
     `<a href="#top"><div id="backToTop"><span>Back to Top</span></div></a>
     
     <div id="details">
          <div class="column" style="margin: 0 5% 0 10%;">
               <ul>
                    <li><h2>Pages</h2></li>
                    <li><a href="${rootDirec}index.php">Home</a></li>
                    <li><a href="${rootDirec}pages/projects.html">Projects</a></li>
                    <li><a href="${rootDirec}pages/about.html">About</a></li>
               </ul>
          </div>
     
          <div class="column" style="margin: 0 5% 0 5%; width: 25%;">
               <ul>
                    <li><h2>Other Links</h2></li>
                    <li><a href="${rootDirec}pages/versionhistory.html">Version History</a></li>
               </ul>
          </div>
     
          <div class="column" style="margin: 0 10% 0 5%;"></div>
     </div>
     
     <div id="copyright">&copy; 2024 ${siteName} v${version} | Daniel Barajas</div>`;
}

  // Update Favicon to all linked pages
const changeFavicon = link => {
     let $favicon = document.querySelector('link[rel="icon"]')
     // If a <link rel="icon"> element already exists,
     // change its href to the given link.
     if ($favicon !== null) {
          $favicon.href = link
     // Otherwise, create a new element and append it to <head>.
     } else {
          $favicon = document.createElement("link")
          $favicon.rel = "icon"
          $favicon.href = link
          document.head.appendChild($favicon)
     }
}

  // Favicon link
changeFavicon(`/Project Central/pages/archives/images/favicon.ico`);

  // Update tab title with siteName for all linked pages
let tabTitle = document.getElementsByTagName("title")[0];
if (tabTitle) {
     tabTitle.innerHTML += ` - ${siteName}`;
}


// CONDITIONAL/RESPONSIVE EVENTS SECTION
  // Perform an action specific to one page such as highlighting the Nav Bar
let page = document.getElementsByTagName("title")[0];
if (page.innerHTML == `Home - ${siteName}`) {
     document.getElementsByClassName("home")[0].classList.toggle("current");
     document.getElementsByClassName("home")[1].classList.toggle("current");
} else if (page.innerHTML == `Projects - ${siteName}`) {
     document.getElementsByClassName("projects")[0].classList.toggle("current");
     document.getElementsByClassName("projects")[1].classList.toggle("current");
} else if (page.innerHTML == `About - ${siteName}`) {
     document.getElementsByClassName("about")[0].classList.toggle("current");
     document.getElementsByClassName("about")[1].classList.toggle("current");
} else if (page.innerHTML == `Version History - ${siteName}`) {
     document.getElementsByClassName("collapsibleBar")[0].id = "recent";
}

  // Nav bar resize event and logo onclick event
if (document.getElementById("logo")) {
	window.addEventListener("resize", function() {adjustLayout()});
	document.getElementById("logo").onclick = function() {menuExpand()};
}

  // Adjust layout on Screen Resize
function adjustLayout() {
	if (document.getElementById("vertNav").style.display) {
		if (window.matchMedia("(min-width: 901px)").matches) {
			document.getElementsByTagName("nav")[0].style.height = null;
			document.getElementById("horzNav").style.display = null;
			document.getElementById("vertNav").style.display = null;
			document.getElementById("logo").style.marginBottom = null;
			document.getElementById("logo").style.width = null;
			let horzNavLiTags = document.getElementById("horzNav").getElementsByTagName("li");
			for (let i = 0; i < horzNavLiTags.length; i++) {
				horzNavLiTags[i].style.width = null;
			}
		}
		if (window.matchMedia("(max-width: 900px)").matches) {
			document.getElementsByTagName("nav")[0].style.height = "5em";
			document.getElementById("horzNav").style.display = null;
			document.getElementById("vertNav").style.display = null;
			document.getElementById("logo").style.marginBottom = null;
			document.getElementById("logo").style.width = "100%";
			let horzNavLiTags = document.getElementById("horzNav").getElementsByTagName("li");
			for (let i = 0; i < horzNavLiTags.length; i++) {
				horzNavLiTags[i].style.width = 100 / horzNavLiTags.length + "%";
			}
		}
		if (window.matchMedia("(max-width: 650px)").matches) {
			document.getElementsByTagName("nav")[0].style.height = null;
			document.getElementById("horzNav").style.display = "none";
			document.getElementById("vertNav").style.display = null;
			document.getElementById("logo").style.marginBottom = null;
			document.getElementById("logo").style.width = "100%";
		}
	}
}


  // Fullscreen navigation toggle
function menuExpand() {
	if (!document.getElementById("vertNav").style.display) {
		document.getElementsByTagName("nav")[0].style.height = "100%";
		document.getElementById("horzNav").style.display = "none";
		document.getElementById("vertNav").style.display = "inline-block";
		document.getElementById("logo").style.marginBottom = "12.5%";
		document.getElementById("logo").style.width = "100%";
		document.getElementsByClassName("title")[0].classList.toggle("close");
	} else {
		document.getElementsByClassName("title")[0].classList.toggle("close");
		adjustLayout();
	}
}


// FEATURE SECTION
  // Collapsible Lists
    // Start with most recent collapsible open
let collRecent = document.getElementById("recent");
if (collRecent) {
	collRecent.nextElementSibling.style.maxHeight = collRecent.nextElementSibling.scrollHeight + "px";
	collRecent.classList.toggle("collActive");
}
    // Assign collapsible effect to all collapsible bars
let collBar = document.getElementsByClassName("collapsibleBar");
for (let i = 0; i < collBar.length; i++) {
	collBar[i].addEventListener("click", function() {
		this.classList.toggle("collActive");
		let content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

  // Assign collapsible effect to all other collapsible items
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("collActiveNoBG");
		let content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
}

  // Copy code to clipboard feature
if (document.getElementById("copyCode")) {
	let copyCode = document.getElementById("copyCode");
	copyCode.addEventListener("click", function() {
		navigator.clipboard.writeText(document.getElementsByTagName("xmp")[0].innerHTML);
		this.innerHTML = "Copied";
		setTimeout(revertCopyBtn, 2000);
	});
	
	function revertCopyBtn() {
		copyCode.innerHTML = "Copy to Clipboard";
	}
}


  // Shuffle main page carousel on load
let rand = 0;
let caroItems = document.getElementsByClassName("carousel__item");
let randItems = [];
     
    //Shuffle all carousel options
let cards = $(".carousel__item");
let target = 0;
let target2 = 0;
for(let i = 0; i < cards.length; i++){
     target = Math.floor(Math.random() * cards.length -1) + 1;
     target2 = Math.floor(Math.random() * cards.length -1) +1;
     cards.eq(target).before(cards.eq(target2));
}
    //Display carousel items in random order
for (let i = 0; i < caroItems.length; i++) {
     randItems.push(i);
}

for (let i = 0; i < 9; i++) {
     rand = Math.floor(Math.random() * randItems.length);
     caroItems[randItems[rand]].style.display = "inline-flex";
     randItems.splice(rand, 1);
}


// TESTING SECTION
  // Test if script is fully functional (document.write should display at the very bottom)
//document.write("test");