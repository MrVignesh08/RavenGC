<?php
$server = 'localhost';
$username = 'root';
$password = 'test@123';
$database = 'login_register_db';

if (isset($_POST))

    $conn = new mysqli($server, $username, $password, $database);
if ($conn) {
    // echo 'Server Connected Success';
} else {
    die(mysqli_error($conn));
}
