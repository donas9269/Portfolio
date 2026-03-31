<?php
$servername = "localhost";
$username = "root";         
$password = "Az300405@";
$dbname = "contact_form";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}       


?>
