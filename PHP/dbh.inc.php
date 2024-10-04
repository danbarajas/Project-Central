<?php
/**
 * Project Central
 * dbh.inc.php - Project Database Connection
 * @abstract Attemps to connect to the project database "project_list" using PDO. An error
 *  message is displayed if the connection fails.
 * @author Daniel Barajas
 * Last update: 3/6/2024
 */

// Database information
$dbConn = "mysql:host=localhost;dbname=project_list";
$dbUsername = "root";
$dbPassword = "";

try {
    $pdo = new PDO($dbConn, $dbUsername, $dbPassword); // PDO Connection
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Set to give an exception when an error occurs
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}