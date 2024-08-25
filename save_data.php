<?php
header("Access-Control-Allow-Origin: *"); // Zezwala na żądania z dowolnego źródła
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Zezwala na metody POST, GET i OPTIONS
header("Access-Control-Allow-Headers: Content-Type"); // Zezwala na nagłówki Content-Type

// Reszta kodu PHP
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "photographerjacek";

// Połączenie z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Odbiór danych z Reacta (z POST request)
$name = $_POST['name'];
$nazwisko = $_POST['nazwisko'];
$email = $_POST['email'];
$wiadomosc = $_POST['wiadomosc'];

// Przygotowanie zapytania SQL
$sql = "INSERT INTO wiadomości (Imie, Nazwisko, Email, Wiadomość) VALUES ('$name', '$nazwisko', '$email', '$wiadomosc')";

if ($conn->query($sql) === TRUE) {
    echo "Record added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
