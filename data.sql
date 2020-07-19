-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback"
(
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
);

-- Sample feedback items
INSERT INTO "feedback"
  ("feeling", "understanding", "support", "comments")
VALUES
  (4, 4, 5, 'Doing Great!'),
  (2, 3, 2, 'I could do with fewer feral cats in the building'),
  (1, 2, 5, 'One is the lonliest number'),
  (5, 4, 2, 'I am the next Bill Gates'),
  (1, 1, 1, 'I am an imposter!! Serenity now!');
