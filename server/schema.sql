-- ---
-- Create DB if it is first launch
-- Drop then create added for dev
-- ---

CREATE DATABASE IF NOT EXISTS `reviews`;

DROP DATABASE `reviews`;

CREATE DATABASE IF NOT EXISTS `reviews`;

USE `reviews`;

-- ---
-- Table 'locations'
--
-- ---

DROP TABLE IF EXISTS `locations`;

CREATE TABLE `locations` (
  `location_id` INTEGER AUTO_INCREMENT NOT NULL,
  `name` TEXT NOT NULL,
  PRIMARY KEY (`location_id`)
);

-- ---
-- Table 'reviews'
--
-- ---

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `review_id` INTEGER AUTO_INCREMENT NOT NULL,
  `location_id` INTEGER NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `avatar` MEDIUMTEXT NOT NULL,
  `date`  VARCHAR(60) NOT NULL,
  `review` TEXT NOT NULL,
  `cleanliness` INTEGER NOT NULL,
  `accuracy` INTEGER NOT NULL,
  `comm` INTEGER NOT NULL,
  `location` INTEGER NOT NULL,
  `check_in` INTEGER NOT NULL,
  `value` INTEGER NOT NULL,
  PRIMARY KEY (`review_id`)
);


DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `tag_id` INTEGER AUTO_INCREMENT NOT NULL,
  `review_id` INTEGER NOT NULL,
  `tag` TEXT NOT NULL,
  PRIMARY KEY (`tag_id`)
);

-- ---
-- excute file from terminal
-- mysql -u root < server/schema.sql
-- ---