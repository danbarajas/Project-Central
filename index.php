<!DOCTYPE html>
<!--
 - Project Central
 - index.php - Home Page
 - Description: Home page for Project Central. Introduces users and displays some featured
 -    projects on the front page. Also includes a carousel of other projects and links to
 -    other pages.
 - Author: Daniel Barajas
 - Last udpate: 3/6/2024
 -->
<?php
     try {
          // Database connection
          require_once "PHP/dbh.inc.php";

          // Get featured project based on specified Project_ID
          $sql = "SELECT Project_Name FROM projects WHERE Project_ID = 1";
          $dbCursor = $pdo->prepare($sql);
          $dbCursor->execute();
          $featured = $dbCursor->fetch(PDO::FETCH_ASSOC);

          // Get newest project based on most recent Date_Created
          $sql = "SELECT Project_Name FROM projects ORDER BY Date_Created DESC LIMIT 1";
          $dbCursor = $pdo->prepare($sql);
          $dbCursor->execute();
          $newest = $dbCursor->fetch(PDO::FETCH_ASSOC);

          // Get most recently updated project based on most recent Date_Updated
          $sql = "SELECT Project_Name FROM projects ORDER BY Date_Updated DESC LIMIT 1";
          $dbCursor = $pdo->prepare($sql);
          $dbCursor->execute();
          $updated = $dbCursor->fetch(PDO::FETCH_ASSOC);

          $pdo = null;
          $dbCursor = null;
     } catch (PDOException $e) { // Catch error if connection or queries fail
          die("Query failed: " . $e->getMessage());
     }
?>

<html lang="en">
	<head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="CSS/stylesheet.css">
		<link rel="stylesheet" type="text/css" href="CSS/pages/indexstyles.css">
		<title>Home</title>
	</head>
	
	<body id="top">
          <!-- Navigation Bar -->
		<nav></nav>
		
          <!-- Intro Screen -->
		<a href="#main">
               <div class="parallax">
                    <div id="intro">Soon to be a full collection of all my projects and hobbies, in and out of computer science. Also showcases many of my abilities in web design. Currently has multiple pages such as a home page, projects page, and a version history page. The Home page will show featured, new, and random projects. The Projects page is a full list of all projects and their details. Soon, each project will have its own page with a more in-depth description. The Version History page has an archive of all updates made to the Project Central website with some including an archived preview of what the website used to look like.</div>
               </div>
		</a>
		
          <!-- Main Content -->
		<main id="main">
		     
			<section class="panel" style="background-image: url('images/code.jpg');">
			
				<div class="leftDesc">

					<div class="descContent">
						<h3 style="margin-bottom: 0.25em;">Featured</h3>
						<h1 style="margin-top: 0.25em;"><?php echo htmlspecialchars($featured["Project_Name"]) ?></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					
					<div class="descButton"><a href=""><span>Details</span></a></div>
				</div>
				
			</section>
			
			
			<section class="panel" style="background-image: url('images/code.jpg');">
				
				<div class="rightDesc">
					<div class="descContent">
						<h3 style="margin-bottom: 0.25em;">New</h3>
						<h1 style="margin-top: 0.25em;"><?php echo htmlspecialchars($newest["Project_Name"]) ?></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					
					<div class="descButton"><a href=""><span>Details</span></a></div>
				</div>
				
			</section>
			
			<section class="panel" style="background-image: url('images/code.jpg');">
				
				<div class="leftDesc">

					<div class="descContent">
						<h3 style="margin-bottom: 0.25em;">Recently Updated</h3>
						<h1 style="margin-top: 0.25em;"><?php echo htmlspecialchars($updated["Project_Name"]) ?></h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
					
					<div class="descButton"><a href=""><span>Details</span></a></div>
				</div>
				
			</section>
			
			<section id="mainCarousel">
                    <h2>More Projects</h2>
                    <div class="rt-container">
                         <div class="col-rt-12">
                              <div class='caroContainer'>
                                   <div class='carousel'>
                                        <input checked='checked' class='carousel__activator' id='carousel-slide-activator-1' name='carousel' type='radio'>
                                        <input class='carousel__activator' id='carousel-slide-activator-2' name='carousel' type='radio'>
                                        <input class='carousel__activator' id='carousel-slide-activator-3' name='carousel' type='radio'>
                                        <div class='carousel__controls'>
                                             <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-2'>
                                                  &#10095;
                                             </label>
                                        </div>
                                        <div class='carousel__controls'>
                                             <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-1'>
                                                  &#10094;
                                             </label>
                                             <label class='carousel__control carousel__control--forward' for='carousel-slide-activator-3'>
                                                  &#10095;
                                             </label>
                                        </div>
                                        <div class='carousel__controls'>
                                             <label class='carousel__control carousel__control--backward' for='carousel-slide-activator-2'>
                                                &#10094;
                                             </label>
                                        </div>
                                        <div class='carousel__screen'>
                                             <div class='carousel__track'>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (a)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (b)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (c)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (d)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (e)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (f)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (g)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (h)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (i)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                                  
                                                  <div class='carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3'>
                                                       <div class='caroContent' style="background-image: url('images/code.jpg');">
                                                            <div class="titleCover">
                                                                Project Name (j)
                                                            </div>
                                                            <div class="projectCover"></div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
			
		</main>
		
		<!-- Footer -->
		<footer></footer>
		
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="JS/script.js"></script>
	</body>
</html>