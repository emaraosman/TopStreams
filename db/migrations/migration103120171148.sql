DROP TABLE IF EXISTS ratings_table;
CREATE TABLE IF NOT EXISTS ratings_table(
  id SERIAL PRIMARY KEY,
  streamer_id text NOT NULL UNIQUE,
  channel_name text NOT NULL UNIQUE,
  likes INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0
);
