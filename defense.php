<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Statistiques Défenses</title>
</head>
<body>
    <div class="tabs">
        <a href="#" onclick="loadTable('general')">General</a>
        <a href="#" onclick="loadTable('domicile')">Domicile</a>
        <a href="#" onclick="loadTable('exterieur')">Exterieur</a>
    </div>

    <div id="table-container">
        <!-- Le contenu des statistiques générales sera chargé ici -->
    </div>

    <script>
        function loadTable(tab) {
            // Utilisez JavaScript ou AJAX pour charger le contenu de la table depuis le serveur
            // et insérez-le dans le div avec l'ID "table-container"
            // Exemple avec JavaScript simple :
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById('table-container').innerHTML = this.responseText;
                }
            };

            xmlhttp.open("GET", "get_data_defense.php?tab=" + tab, true);
            xmlhttp.send();
        }
    </script>
</body>
</html>
