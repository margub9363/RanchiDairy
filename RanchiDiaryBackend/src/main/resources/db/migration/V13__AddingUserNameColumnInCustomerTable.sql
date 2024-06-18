ALTER TABLE `ranchidiarytesting16`.`customer`
ADD COLUMN `username` VARCHAR(255) NOT NULL AFTER `id`,
ADD UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE;
;
