CREATE DATABASE IF NOT EXISTS `airbnb`;

USE `airbnb`;

-- ---
-- Table 'locations'
--
-- ---

DROP TABLE IF EXISTS `locations`;

CREATE TABLE `locations` (
  `id` INTEGER NOT NULL AUTO_INCREMENT NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'reviews'
--
-- ---

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `id` INTEGER NOT NULL AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(40) NOT NULL NOT NULL,
  `avatar` MEDIUMTEXT NOT NULL,
  `date` VARCHAR(40) NOT NULL,
  `review` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'ratings'
--
-- ---

DROP TABLE IF EXISTS `ratings`;

CREATE TABLE `ratings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT NOT NULL,
  `cleanliness` INTEGER NOT NULL,
  `accuracy` INTEGER NOT NULL,
  `comm` INTEGER NOT NULL,
  `location` INTEGER NOT NULL,
  `check_in` INTEGER NOT NULL,
  `value` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'tags'
--
-- ---

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `id` INTEGER NOT NULL AUTO_INCREMENT NOT NULL,
  `name` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `reviews` ADD FOREIGN KEY (id) REFERENCES `locations` (`id`);
ALTER TABLE `ratings` ADD FOREIGN KEY (id) REFERENCES `reviews` (`id`);
ALTER TABLE `tags` ADD FOREIGN KEY (id) REFERENCES `ratings` (`id`);

-- ---
-- Test Data
-- ---

-- INSERT INTO `locations` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `reviews` (`id`,`name`,`avatar`,`date`) VALUES
-- ('','','','');
-- INSERT INTO `ratings` (`id`,`cleanliness`,`accuracy`,`comm`,`location`,`check_in`,`value`) VALUES
-- ('','','','','','','');
-- INSERT INTO `tags` (`id`,`name`) VALUES
-- ('','');

-- ---
-- excute file from terminal
-- mysql -u root < server/schema.sql
-- ---