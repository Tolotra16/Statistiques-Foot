CREATE TABLE Equipes (
    id_equipe INT PRIMARY KEY,
    nom_equipe VARCHAR(100)
);

CREATE TABLE Competitions (
    id_competition INT PRIMARY KEY,
    nom_competition VARCHAR(100)
);

CREATE TABLE Statistiques_Generales_Generale (
    id_stat_generaleG INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    buts INT,
    tirs_par_match FLOAT,
    possession FLOAT,
    passes_reussies FLOAT,
    aeriens_gagnes FLOAT,
    note_equipe FLOAT
);

CREATE TABLE Statistiques_Generales_Domicile (
    id_stat_generaleD INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    buts INT,
    tirs_par_match FLOAT,
    possession FLOAT,
    passes_reussies FLOAT,
    aeriens_gagnes FLOAT,
    note_equipe FLOAT
);

CREATE TABLE Statistiques_Generales_Exterieur (
    id_stat_generaleE INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    buts INT,
    tirs_par_match FLOAT,
    possession FLOAT,
    passes_reussies FLOAT,
    aeriens_gagnes FLOAT,
    note_equipe FLOAT
);

CREATE TABLE Statistiques_Defenses_Generale (
    id_stat_defenseG INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    tirs_par_match FLOAT,
    tacles_par_match FLOAT,
    interceptions_par_match FLOAT,
    fautes_par_match FLOAT,
    hors_jeux_par_match FLOAT,
    note_equipe FLOAT
);

CREATE TABLE Statistiques_Defenses_Domicile (
    id_stat_defenseD INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    tirs_par_match FLOAT,
    tacles_par_match FLOAT,
    interceptions_par_match FLOAT,
    fautes_par_match FLOAT,
    hors_jeux_par_match FLOAT,
    note_equipe FLOAT
);

CREATE TABLE Statistiques_Defenses_Exterieur (
    id_stat_defenseE INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    tirs_par_match FLOAT,
    tacles_par_match FLOAT,
    interceptions_par_match FLOAT,
    fautes_par_match FLOAT,
    hors_jeux_par_match FLOAT,
    note_equipe FLOAT
);

CREATE TABLE Statistiques_Attaques_Generale (
    id_stat_attaqueG INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    tirs_par_match FLOAT,
    dribbles_par_match FLOAT,
    fautesSubies_par_match FLOAT,
    note_equipe FLOAT
);

CREATE TABLE Statistiques_Attaques_Domicile (
    id_stat_attaqueD INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    tirs_par_match FLOAT,
    dribbles_par_match FLOAT,
    fautesSubies_par_match FLOAT,
    note_equipe FLOAT
);
CREATE TABLE Statistiques_Attaques_Exterieur (
    id_stat_attaqueE INT AUTO_INCREMENT PRIMARY KEY,
    id_equipe INT REFERENCES Equipes(id_equipe),
    id_competition INT REFERENCES Competitions(id_competition),
    tirs_par_match FLOAT,
    dribbles_par_match FLOAT,
    fautesSubies_par_match FLOAT,
    note_equipe FLOAT
);




