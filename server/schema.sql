CREATE DATABASE IF NOT EXISTS `airbnb`;

USE `airbnb`;

-- ---
-- Table 'reviews'
--
-- ---

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(40) NOT NULL,
  `profilePic` TEXT NOT NULL,
  `date` VARCHAR(40) NOT NULL,
  `ratings_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'ratings'
--
-- ---

DROP TABLE IF EXISTS `ratings`;

CREATE TABLE `ratings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT NOT NULL,
  `overall` INTEGER NOT NULL,
  `cleanliness` INTEGER NOT NULL,
  `accuracy` INTEGER NOT NULL,
  `comm` INTEGER NOT NULL,
  `location` INTEGER NOT NULL,
  `check_in` INTEGER NOT NULL,
  `value` INTEGER NOT NULL,
  `tags` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `reviews` ADD FOREIGN KEY (ratings_id) REFERENCES `ratings` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `reviews` ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `ratings` ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `reviews` (`id`,`name`,`profilePic`,`date`,`ratings_id`) VALUES
-- ('','','','','');
-- INSERT INTO `ratings` (`id`,`overall`,`cleanliness`,`accuracy`,`comm`,`location`,`check_in`,`value`) VALUES
-- ('','','','','','','','');

-- excute file from terminal
--  mysql -u root < server/schema.sql