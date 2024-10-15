$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "ClientList";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO client_details (clientID, firstName, lastName, emailAddress, phoneNumber)
VALUES ('0001','John', 'Doe', 'john@example.com', '5555555555')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();