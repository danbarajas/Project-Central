<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
try {
    // Database connection
    require_once "../PHP/dbh.inc.php";

    // Query varibles from projectsscript.js
    $like = htmlspecialchars($_POST['like']); // For searching product name
    $order = $_POST['order']; // For ordering by column
    $catNames = $_POST['catNames']; // For filtering by category
    $lanNames = $_POST['lanNames']; // For filtering by languages
    $accTypes = $_POST['accTypes']; // For filtering by access type

    // Fetch a modified list of all projects matching the given criteria
    $sql = "SELECT DISTINCT *
            FROM projects
            LEFT JOIN categories
            ON projects.Category_ID = categories.Category_ID
            LEFT JOIN projects_languages
            ON projects.Project_ID = projects_languages.Project_ID
            LEFT JOIN languages
            ON projects_languages.Language_ID = languages.Language_ID
            LEFT JOIN projects_access
            ON projects.Project_ID = projects_access.Project_ID
            LEFT JOIN access_types
            ON projects_access.Access_ID = access_types.Access_ID
            WHERE Project_Name LIKE '$like'
            $catNames
            $lanNames
            $accTypes
            GROUP BY projects.Project_ID
            ORDER BY $order, Project_Name;
            ";
    $dbCursor = $pdo->prepare($sql);
    $dbCursor->execute();
    $projects = $dbCursor->fetchAll(PDO::FETCH_ASSOC);

    // Create a project bar for each project within the modified list
    if (!empty($projects)) {
        foreach ($projects as $p) {
            echo '<tr class="project">';
                // Display project name
                echo '<td class="pName">';
                    echo htmlspecialchars($p["Project_Name"]);
                echo '</td>';
                // Display category name from category ID if available otherwise display N/A
                echo '<td class="pCategory">';
                    echo isset($p["Category_Name"]) ? htmlspecialchars($p["Category_Name"]) : "N/A";
                echo '</td>';
                // Display version if available otherwise display N/A
                echo '<td class="pVersion">';
                    echo isset($p["Version"]) ? htmlspecialchars($p["Version"]) : "N/A";
                echo '</td>';
                // Display date created
                echo '<td class="pCreated">';
                    echo htmlspecialchars($p["Date_Created"]);
                echo '</td>';
                // Display date updated
                echo '<td class="pUpdated">';
                    echo isset($p["Date_Updated"]) ? htmlspecialchars($p["Date_Updated"]) : "N/A";
                echo '</td>';
                // Open button
                echo '<td class="pExpand"><div class="pExAnim"></div><div class="pExIcon">Open</div></td>';
            echo '</tr>';
            echo '<tr class="collContent">';
                echo '<td class="pDescText">';
                    echo '<h4>Description</h4>';
                    echo '<p>A amet eget congue id euismod molestie eget tortor rutrum interdum tristique vivamus fusce amet condimentum elit lorem consectetur purus ipsum consectetur magna elit enim.</p>';
                    echo '<p>Amet<br>elit tristique id placerat hendrerit molestie amet erat nec tincidunt nunc et ipsum molestie arcu interdum proin accumsan quisque tincidunt vivamus urna arcu maecenas.</p>';
                echo '</td>';
                echo '<td class="pDescTags">';
                    echo '<div class="pDescLang">';
                        echo '<h5>Access</h5>';
                        echo '<p>';
                            if (isset($p["Access_Type"])) {
                                $atStr = "";
                                $pid = $p["Project_ID"];
                                $sql = "SELECT Access_Type
                                        FROM projects_access
                                        LEFT JOIN access_types
                                        ON projects_access.Access_ID = access_types.Access_ID
                                        WHERE Project_ID = '$pid'
                                        ORDER BY Access_Type;";
                                $dbCursor = $pdo->prepare($sql);
                                $dbCursor->execute();
                                $access = $dbCursor->fetchAll(PDO::FETCH_ASSOC);
                                foreach ($access as $at)
                                    $atStr .= htmlspecialchars($at["Access_Type"]) . ", ";
                                echo substr($atStr, 0, -2);
                            } else
                                echo 'None';
                        echo '</p>';
                    echo '</div>';
                    echo '<div class="pDescAcc">';
                        echo '<h5>Languages</h5>';
                        echo '<p>';
                            if (isset($p["Language_Name"])) {
                                $lnStr = "";
                                $pid = $p["Project_ID"];
                                $sql = "SELECT Language_Name
                                        FROM projects_languages
                                        LEFT JOIN languages
                                        ON projects_languages.Language_ID = languages.Language_ID
                                        WHERE Project_ID = '$pid'
                                        ORDER BY Language_Name;";
                                $dbCursor = $pdo->prepare($sql);
                                $dbCursor->execute();
                                $langs = $dbCursor->fetchAll(PDO::FETCH_ASSOC);
                                foreach ($langs as $l)
                                    $lnStr .= htmlspecialchars($l["Language_Name"]) . ", ";
                                echo substr($lnStr, 0, -2);
                            } else
                                echo 'None';
                        echo '</p>';
                    echo '</div>';
                echo '</td>';
            echo '</tr>';
        }
        echo '<script>';
            echo 'setCollapsibles();';
            echo 'pBars = document.getElementsByClassName("project");';
            echo 'pBars[0].style.borderTop = "1px solid #AAA";';
            echo 'pBars[pBars.length - 1].style.borderBottom = "1px solid #AAA";';
        echo '</script>';
    } else {
        echo '<p style="margin: 0; padding: 0 1em; line-height: 3.5em; border-right: 1px solid #AAA"><strong>No matching projects. Try searching again.</strong></p>';
    }
} catch (PDOException $e) { // Catch error if connection or queries fail
    die("Query failed: " . $e->getMessage());
}