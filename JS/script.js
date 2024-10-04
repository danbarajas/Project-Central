/**
 * Project Central
 * script.js - Universal Script
 * @description Main script for Project Central that is used by most pages for shared elements like
 *   the navigation bar, footer, and other features.
 * @author Daniel Barajas
 * Last update: 12/14/2021
 */

// CONSTANT WEBSITE VARIBLES
  // ROOT DIRECTORY -- Used in all adaptable links and images; Match to the root directory file path
  // (for my personal use on different devices or if I move the folder location)
const rootDirec = "/Project Central/";

  // VERSION NUMBER -- Current version of the website displayed in the footer
const version = "0.3.0";

  // WEBSITE TITLE -- Name of the website; used in titles and other text
const siteName = "Project Central";


// UNIVERSAL PAGE ELEMENTS
  // Update Nav Bar for all linked pages
let nav = document.getElementsByTagName("nav")[0];
if (nav) {
     nav.innerHTML =
     `<div id="logo"><span class="title"><span class="logoLetter">P</span><div class="titleAnim">roject</div><span class="logoLetter">C</span><div class="titleAnim">entral</div></span></div>
     <ul id="horzNav">
          <li><a href="${rootDirec}pages/about.html" class="navAbout">about</a></li>
          <li><a href="${rootDirec}pages/projects.php" class="navProjects">projects</a></li>
          <li><a href="${rootDirec}index.php" class="navHome">home</a></li>
     </ul>
               
     <ul id="vertNav">
          <li><a href="${rootDirec}index.php" class="navHome">home</a></li>
          <li><a href="${rootDirec}pages/projects.php" class="navProjects">projects</a></li>
          <li><a href="${rootDirec}pages/about.html" class="navAbout">about</a></li>
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
                    <li><a href="${rootDirec}pages/projects.php">Projects</a></li>
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
let favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = `${rootDirec}images/favicon.ico`;
document.head.appendChild(favicon);

  // Update tab title with siteName for all linked pages
let tabTitle = document.getElementsByTagName("title")[0];
if (tabTitle) {
     tabTitle.innerHTML += ` - ${siteName}`;
}


// CONDITIONAL/RESPONSIVE EVENTS
  // Perform an action specific to one page such as highlighting the Nav Bar
let page = window.location.pathname.split("/").pop();
if (page == "index.php") {
     document.getElementsByClassName("navHome")[0].classList.toggle("navCurrent");
     document.getElementsByClassName("navHome")[1].classList.toggle("navCurrent");
} else if (page == "about.html") {
     document.getElementsByClassName("navAbout")[0].classList.toggle("navCurrent");
     document.getElementsByClassName("navAbout")[1].classList.toggle("navCurrent");
}

  // Nav bar resize event and logo onclick event
if (document.getElementById("logo")) {
	window.addEventListener("resize", function() {adjustLayout()});
	logo.onclick = function() {menuExpand()};
}

  // Adjust layout on Screen Resize
function adjustLayout() {
	if (vertNav.style.display) {
		if (window.matchMedia("(min-width: 901px)").matches) {
			document.getElementsByTagName("nav")[0].style.height = null;
			horzNav.style.display = null;
			vertNav.style.display = null;
			logo.style.marginBottom = null;
			logo.style.width = null;
			let horzNavLiTags = horzNav.getElementsByTagName("li");
			for (let i = 0; i < horzNavLiTags.length; i++) {
				horzNavLiTags[i].style.width = null;
			}
		}
		if (window.matchMedia("(max-width: 900px)").matches) {
			document.getElementsByTagName("nav")[0].style.height = "5em";
			horzNav.style.display = null;
			vertNav.style.display = null;
			logo.style.marginBottom = null;
			logo.style.width = "100%";
			let horzNavLiTags = horzNav.getElementsByTagName("li");
			for (let i = 0; i < horzNavLiTags.length; i++) {
				horzNavLiTags[i].style.width = 100 / horzNavLiTags.length + "%";
			}
		}
		if (window.matchMedia("(max-width: 650px)").matches) {
			document.getElementsByTagName("nav")[0].style.height = null;
			horzNav.style.display = "none";
			vertNav.style.display = null;
			logo.style.marginBottom = null;
			logo.style.width = "100%";
		}
	}
}


  // Fullscreen navigation toggle
function menuExpand() {
	if (!vertNav.style.display) {
		document.getElementsByTagName("nav")[0].style.height = "100%";
		horzNav.style.display = "none";
		vertNav.style.display = "inline-block";
		logo.style.marginBottom = "12.5%";
		logo.style.width = "100%";
		document.getElementsByClassName("title")[0].classList.toggle("close");
	} else {
		document.getElementsByClassName("title")[0].classList.toggle("close");
		adjustLayout();
	}
}


// FEATURE SPECIFIC FUNCTIONS
  // Copy code to clipboard feature
if (document.getElementById("copyCode")) {
	copyCode.addEventListener("click", function() {
		navigator.clipboard.writeText(document.getElementById("codeText").innerHTML);
		this.innerHTML = "Copied";
		setTimeout(function () {
			copyCode.innerHTML = "Copy to Clipboard";
		}, 2000);
	});
}


  // Shuffle main page carousel on load
let caroItems = document.getElementsByClassName("carousel__item");
let rand = 0;
let randItems = [];
     
    //Shuffle all carousel options
if (caroItems.length > 0) {
	let cards = document.getElementsByClassName("carousel__item");
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
}

// TESTING SECTION
  // Test if script is fully functional (document.write should display at the very bottom)
//document.write("test");