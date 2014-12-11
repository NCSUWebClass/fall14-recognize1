CREATE SCHEMA IF NOT EXISTS `recognition` DEFAULT CHARACTER SET utf8;

-- -----------------------------------------------------
-- Table `recognition`.`questions`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `recognition`.`questions` (
  `qID` BIGINT unsigned NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(1024) NOT NULL ,
  `image1` VARCHAR(1024) NOT NULL ,
  `image2` VARCHAR(1024) NOT NULL ,
  `image3` VARCHAR(1024) NOT NULL ,
  `image4` VARCHAR(1024) NOT NULL ,
  `image5` VARCHAR(1024) NOT NULL ,
  `image6` VARCHAR(1024) NOT NULL ,
  PRIMARY KEY (`qID`)
)
ENGINE = innoDB;

-- -----------------------------------------------------
-- Table `recognition`.`answers`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `recognition`.`answers` (
  `qID` BIGINT unsigned,
  `answerImage` VARCHAR(1024) NOT NULL ,
  FOREIGN KEY (`qID`) REFERENCES `questions` (`qID`)
	ON DELETE CASCADE 
	ON UPDATE CASCADE
)
ENGINE = innoDB;

USE recognition;
-- -----------------------------------------------------
-- Sample question
-- -----------------------------------------------------
INSERT INTO questions(qID, category, image1, image2, image3, image4, image5, image6) VALUES (NULL, 'Testing', 'example1tire.png', 'example1engine.png', 'example1wheel.png', 'example1car.jpg', 'example1bike.jpg', 'example1motorcycle.jpg');
INSERT INTO questions(qID, category, image1, image2, image3, image4, image5, image6) VALUES (NULL, 'Testing', 'example2jacket.png', 'example2scarf.png', 'example2gloves.jpg', 'example2summer.jpg', 'example2winter.png', 'example2spring.jpg');
-- -----------------------------------------------------
-- Sample answers
-- -----------------------------------------------------
INSERT INTO answers(qID, answerImage) VALUES (1, 'example1car.jpg');
INSERT INTO answers(qID, answerImage) VALUES (2, 'example2winter.jpg');
