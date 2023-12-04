const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'statfoot'
});

// Connecter à la base de données
connection.connect();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Endpoint pour ajouter statistiques généralesG
app.post('/ajouter-statistiques-Generales_Generale', (req, res) => {
    const { id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Generales_Generale (id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques générales ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques généralesD
app.post('/ajouter-statistiques-Generales_Domicile', (req, res) => {
    const { id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Generales_Domicile (id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques générales Domicile ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques généralesE
app.post('/ajouter-statistiques-Generales_Exterieur', (req, res) => {
    const { id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Generales_Exterieur (id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, buts, tirs_par_match, possession, passes_reussies, aeriens_gagnes, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques générales Exterieur ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques défensesG
app.post('/ajouter-statistiques-Defenses_Generale', (req, res) => {
    const { id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Defenses_Generale (id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques  défenses générale ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques défensesD
app.post('/ajouter-statistiques-Defenses_Domicile', (req, res) => {
    const { id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Defenses_Domicile (id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques défenses Domicile ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques défensesE
app.post('/ajouter-statistiques-Defenses_Exterieur', (req, res) => {
    const { id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Defenses_Exterieur (id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, tirs_par_match, tacles_par_match, interceptions_par_match, fautes_par_match, hors_jeux_par_match, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques défenses Exterieur ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques attaquesG
app.post('/ajouter-statistiques-Attaques_Generale', (req, res) => {
    const { id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Attaques_Generale (id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques attaques Generale ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques attaquesD
app.post('/ajouter-statistiques-Attaques_Domicile', (req, res) => {
    const { id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Attaques_Domicile (id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques attaques Domicile ajoutées avec succès' });
    });
});

// Endpoint pour ajouter statistiques attaquesE
app.post('/ajouter-statistiques-Attaques_Exterieur', (req, res) => {
    const { id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe } = req.body;

    const sql = `
        INSERT INTO Statistiques_Attaques_Exterieur (id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(sql, [id_equipe, id_competition, tirs_par_match, dribbles_par_match, fautesSubies_par_match, note_equipe], (error, results) => {
        if (error) throw error;
        res.status(200).json({ message: 'Statistiques attaques Exterieur ajoutées avec succès' });
    });
});


// Écouter le serveur sur le port spécifié
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
