<!DOCTYPE html>
<!--
- Project Central
- projects.html - Projects List Page
- Description: Displays a full list of all available projects and their details with the ability to filter and search for specific projects.
- Author: Daniel Barajas
- Last update: 1/7/2022
-->

<?php
	try {
		// Database connection
		require_once "../PHP/dbh.inc.php";

		// Get all categories
		$sql = "SELECT * FROM categories ORDER BY Category_Name";
		$dbCursor = $pdo->prepare($sql);
		$dbCursor->execute();
		$categories = $dbCursor->fetchAll(PDO::FETCH_ASSOC);

		// Get all access types
		$sql = "SELECT * FROM languages ORDER BY Language_Name";
		$dbCursor = $pdo->prepare($sql);
		$dbCursor->execute();
		$languages = $dbCursor->fetchAll(PDO::FETCH_ASSOC);

		// Get all access types
		$sql = "SELECT * FROM access_types ORDER BY Access_Type";
		$dbCursor = $pdo->prepare($sql);
		$dbCursor->execute();
		$access_types = $dbCursor->fetchAll(PDO::FETCH_ASSOC);

		$pdo = null;
		$dbCursor = null;
   } catch (PDOException $e) { // Catch error if connection or queries fail
		die("Query failed: " . $e->getMessage());
   }
?>

<html>
    <head>
		<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../CSS/stylesheet.css">
		<link rel="stylesheet" type="text/css" href="../CSS/Pages/projectsstyles.css">
        <title>Projects</title>
    </head>
    <body id="top">
        <nav></nav>
          
        <main>
			<h1>Projects</h1>
			<!-- SEARCH AND FILTER CONTROLS -->
			<!-- Search Bar -->
			<label for="search">Search </label>
			<input type="text" id="search" name="search" placeholder="Project name..." oninput="searchUpdate();" onfocus="select();">
			<br><br>

			<!-- Filter Section -->
			<div id="filter">Filter </div>
			<div class="collContent" id="filterControls">
				<!-- Category Filters -->
				<div id="filterCategory">						
					<?php
						echo '<u>Category</u><br>';

						foreach ($categories as $c) {
							echo '<input type="checkbox" id="cat' . $c["Category_ID"] . '" name="category" value="' . $c["Category_Name"] . '">';
							echo '<label for="cat' . $c["Category_ID"] . '">' . $c["Category_Name"] . '</label><br>';
						}
					?>
				</div>

				<!-- Language Filters -->
				<div id="filterLanguage">
					<?php
						echo '<u>Language</u><br>';

						foreach ($languages as $l) {
							echo '<input type="checkbox" id="lan' . $l["Language_ID"] . '" name="category" value="' . $l["Language_Name"] . '">';
							echo '<label for="lan' . $l["Language_ID"] . '">' . $l["Language_Name"] . '</label><br>';
						}
					?>
				</div>
						
				<!-- Access Filters -->
				<div id="filterAccess">
					<?php
						echo '<u>Access</u><br>';

						foreach ($access_types as $a) {
							echo '<input type="checkbox" id="acc' . $a["Access_ID"] . '" name="category" value="' . $a["Access_Type"] . '">';
							echo '<label for="acc' . $a["Access_ID"] . '">' . $a["Access_Type"] . '</label><br>';
						}
					?>
				</div>
			</div>
			<br>

			<!-- PROJECT LIST -->
			<!-- Column Labels -->
			<table>
				<thead>
					<tr>
						<th id="sortName" class="pName sortAsc">Name</th>
						<th id="sortCategory" class="pCategory">Category</th>
						<th id="sortVersion" class="pVersion">Version</th>
						<th id="sortCreated" class="pCreated">Created</th>
						<th id="sortUpdated" class="pUpdated">Last Updated</th>
						<th id="sortExpand" class="pExpand"></th>
					</tr>
				</thead>

				<!-- Project Bars -->
				<tbody id="projectList"></tbody>
			</table>
			
        </main>
          
        <footer></footer>
        
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="../JS/script.js"></script>
        <script src="../JS/Pages/projectsscript.js"></script>
    </body>
</html>