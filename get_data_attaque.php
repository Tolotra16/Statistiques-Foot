<?php
// Connectez-vous à votre base de données ici
// Remplacez les informations de connexion par les vôtres
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "statfoot";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("La connexion a échoué : " . $conn->connect_error);
}

// Récupérez les données en fonction de l'onglet sélectionné
$tab = $_GET['tab'];

if ($tab == 'general') {
    $sql = "SELECT * FROM Statistiques_Attaques_Generale";
} elseif ($tab == 'domicile') {
    $sql = "SELECT * FROM Statistiques_Attaques_Domicile";
} elseif ($tab == 'exterieur') {
    $sql = "SELECT * FROM Statistiques_Attaques_Exterieur";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>Equipe</th><th>Competition</th><th>Tirs par Match</th><th>Dribbles par match</th><th>Fautes subies par match</th><th>Note Equipe</th></tr>";

    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row['id_equipe'] . "</td>";
        echo "<td>" . $row['id_competition'] . "</td>";
        echo "<td>" . $row['tirs_par_match'] . "</td>";
        echo "<td>" . $row['dribbles_par_match'] . "</td>";
        echo "<td>" . $row['fautesSubies_par_match'] . "</td>";
        echo "<td>" . $row['note_equipe'] . "</td></tr>";
    }

    echo "</table>";
} else {
    echo "Aucun résultat trouvé";
}

$conn->close();
?>
