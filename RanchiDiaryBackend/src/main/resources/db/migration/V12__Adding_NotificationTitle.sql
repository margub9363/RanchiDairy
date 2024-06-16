ALTER TABLE ${schemaName}.`notifications`
ADD COLUMN `Title` VARCHAR(45) NOT NULL AFTER `notification_date`;
