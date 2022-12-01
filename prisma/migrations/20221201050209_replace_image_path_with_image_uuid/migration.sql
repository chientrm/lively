ALTER TABLE Fruit RENAME COLUMN imagePath TO imageUuid;
UPDATE Fruit SET imageUuid = REPLACE(imageUuid, '/home/ubuntu/blob/lively/chientrm@gmail.com/', '')