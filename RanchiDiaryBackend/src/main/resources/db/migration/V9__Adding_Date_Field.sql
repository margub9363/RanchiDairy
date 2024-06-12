ALTER TABLE `ranchidiarytesting7`.`customer`
ADD COLUMN `registration_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE `ranchidiarytesting7`.`notifications`
ADD COLUMN `notification_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;

