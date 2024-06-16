CREATE TABLE ${schemaName}.`doctor` (
  `id` INT NOT NULL,
  `Name` VARCHAR(45) NOT NULL,
  `Date_of_Visit` DATE NOT NULL,
  `Charge` INT NULL,
  `Due_Amount` INT NULL,
  PRIMARY KEY (`id`));
