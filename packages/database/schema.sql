CREATE TABLE IF NOT EXISTS glossary_words (
       id SERIAL PRIMARY KEY,
       word TEXT NOT NULL UNIQUE,
       definition TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS problem_words (
       id SERIAL PRIMARY KEY,
       word TEXT NOT NULL UNIQUE,
       description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_config (
       id SERIAL PRIMARY KEY,
       slack_user_id TEXT NOT NULL UNIQUE,
       config JSONB
);
