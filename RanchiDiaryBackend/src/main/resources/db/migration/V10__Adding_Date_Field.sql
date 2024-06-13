ALTER TABLE `ranchidiarytesting12`.`customer`
ADD COLUMN `registration_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE `ranchidiarytesting12`.`notifications`
ADD COLUMN `notification_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL;

