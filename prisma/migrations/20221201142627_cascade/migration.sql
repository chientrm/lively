-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fruit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUuid" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Fruit_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Fruit" ("id", "imageUuid", "name", "userEmail") SELECT "id", "imageUuid", "name", "userEmail" FROM "Fruit";
DROP TABLE "Fruit";
ALTER TABLE "new_Fruit" RENAME TO "Fruit";
CREATE TABLE "new_Nutrient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUuid" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Nutrient_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Nutrient" ("id", "imageUuid", "name", "userEmail") SELECT "id", "imageUuid", "name", "userEmail" FROM "Nutrient";
DROP TABLE "Nutrient";
ALTER TABLE "new_Nutrient" RENAME TO "Nutrient";
CREATE TABLE "new_NutrientsOnFruits" (
    "fruitId" INTEGER NOT NULL,
    "nutrientId" INTEGER NOT NULL,

    PRIMARY KEY ("fruitId", "nutrientId"),
    CONSTRAINT "NutrientsOnFruits_fruitId_fkey" FOREIGN KEY ("fruitId") REFERENCES "Fruit" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "NutrientsOnFruits_nutrientId_fkey" FOREIGN KEY ("nutrientId") REFERENCES "Nutrient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_NutrientsOnFruits" ("fruitId", "nutrientId") SELECT "fruitId", "nutrientId" FROM "NutrientsOnFruits";
DROP TABLE "NutrientsOnFruits";
ALTER TABLE "new_NutrientsOnFruits" RENAME TO "NutrientsOnFruits";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
