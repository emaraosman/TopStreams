DROP TABLE IF EXISTS youtube_ratings_table;
CREATE TABLE IF NOT EXISTS youtube_ratings_table(
  id SERIAL PRIMARY KEY,
  streamer_id TEXT NOT NULL UNIQUE,
  channel_name TEXT NOT NULL UNIQUE,
  likes INTEGER NOT NULL DEFAULT 0,
  dislikes INTEGER NOT NULL DEFAULT 0
);
