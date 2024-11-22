<?php

$dbConn = "mysql:host=localhost;dbname=project_list";
$dbUsername = "root";
$dbPassword = "";

try {
    $pdo = new PDO($dbConn, $dbUsername, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}