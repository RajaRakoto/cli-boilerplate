-- Supprime les tables existantes
DROP TABLE IF EXISTS t_gemini;
DROP TABLE IF EXISTS t_gemini_usage;

-- Création de la table t_gemini
CREATE TABLE t_gemini (
    gemini_id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identifiant unique auto-incrémenté
    api_key VARCHAR(255),                        -- Clé API (peut être null)
    model VARCHAR(255) NOT NULL,                 -- Nom du modèle (obligatoire)
    prompt VARCHAR(255) NOT NULL                 -- Prompt utilisé (obligatoire)
);

-- Création de la table t_gemini_usage
CREATE TABLE t_gemini_usage (
    gemini_usage_id INTEGER PRIMARY KEY AUTOINCREMENT, -- Identifiant unique auto-incrémenté
    rpm_limit INTEGER NOT NULL,                        -- Limite de requêtes par minute (obligatoire)
    rpd_limit INTEGER NOT NULL,                        -- Limite de requêtes par jour (obligatoire)
    tpm_limit INTEGER NOT NULL,                        -- Limite de tokens par minute (obligatoire)
    rpm_start DATETIME,                                -- Début de la période minute
    rpd_start DATETIME,                                -- Début de la période jour
    tpm_start DATETIME,                                -- Début de la période minute pour tokens
    rpm_end DATETIME,                                  -- Fin de la période minute
    rpd_end DATETIME,                                  -- Fin de la période jour
    tpm_end DATETIME,                                  -- Fin de la période minute pour tokens
    rpm_counter INTEGER,                               -- Compteur de requêtes par minute
    rpd_counter INTEGER,                               -- Compteur de requêtes par jour
    tpm_counter INTEGER                                -- Compteur de tokens par minute
);

-- Initialise les données
INSERT INTO t_gemini (api_key, model, prompt) VALUES ('AIzaSyDS6i2kutQoRr1kj403-vcm89DHSeDeNDg', 'gemini-1.5-flash-8b', 'Bonjour, parle moi de toi');
