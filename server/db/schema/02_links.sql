DROP TABLE IF EXISTS links CASCADE;

CREATE TABLE "links" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(15) NOT NULL,
  "url" VARCHAR(255) NOT NULL,
  "user_id" INTEGER REFERENCES users(id) ON DELETE CASCADE
);