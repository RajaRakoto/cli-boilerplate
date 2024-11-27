PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE t_gemini (
    gemini_id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identifiant unique auto-incrémenté
    api_key VARCHAR(255), -- Clé API (peut être null)
    model VARCHAR(255) NOT NULL, -- Nom du modèle (obligatoire)
    prompt VARCHAR(255) NOT NULL -- Prompt utilisé (obligatoire)
);
INSERT INTO t_gemini VALUES(1,'AIzaSyDS6i2kutQoRr1kj403-vcm89DHSeDeNDg','gemini-1.5-flash-8b','Analyser ce CV pour extraire et calculer le total d''années d''expérience de chaque profil mentionné. Pour chaque poste occupé, indiquer le titre du poste ainsi que le nombre d''années d''expérience associées. Si plusieurs postes sont mentionnés, additionner les années d''expérience pour donner un total global. Répondre sous la forme suivante :   1. **Titre du poste** - Nombre d''années d''expérience 2. **Titre du poste** - Nombre d''années d''expérience  Total : X années d''expérience.');
CREATE TABLE t_gemini_usage (
    gemini_usage_id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identifiant unique auto-incrémenté
    rpm_limit INTEGER NOT NULL, -- Limite de requêtes par minute (obligatoire)
    rpd_limit INTEGER NOT NULL, -- Limite de requêtes par jour (obligatoire)
    tpm_limit INTEGER NOT NULL, -- Limite de tokens par minute (obligatoire)
    rpm_start DATETIME, -- Début de la période minute
    rpd_start DATETIME, -- Début de la période jour
    tpm_start DATETIME, -- Début de la période minute pour tokens
    rpm_end DATETIME, -- Fin de la période minute
    rpd_end DATETIME, -- Fin de la période jour
    tpm_end DATETIME, -- Fin de la période minute pour tokens
    rpm_counter INTEGER, -- Compteur de requêtes par minute
    rpd_counter INTEGER, -- Compteur de requêtes par jour
    tpm_counter INTEGER, -- Compteur de tokens par minute
    interval_delay INTEGER NULL, -- Temps d'attente entre N+1 requêtes pour eviter les surcharge
    break_delay INTEGER NULL);
INSERT INTO t_gemini_usage VALUES(1,60,1500,1000000,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,1000,5000);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('t_gemini',3);
INSERT INTO sqlite_sequence VALUES('t_gemini_usage',1);
COMMIT;
