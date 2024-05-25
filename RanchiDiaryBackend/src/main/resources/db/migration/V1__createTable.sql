CREATE TABLE `ranchidiarytesting`.`customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `contact_no` INT(10) NOT NULL,
  `due_amount` FLOAT NULL,
  `picture` BLOB NULL,
  PRIMARY KEY (`id`));