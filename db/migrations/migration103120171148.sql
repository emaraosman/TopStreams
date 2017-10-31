CREATE TABLE IF NOT EXISTS ratings_table(
  id SERIAL PRIMARY KEY,
  streamer_id text NOT NULL UNIQUE,
  likes INTEGER DEFAULT 0,
  dislikes INTEGER DEFAULT 0
);
