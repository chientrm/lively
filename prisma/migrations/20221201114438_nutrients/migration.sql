-- CreateTable
CREATE TABLE "Nutrient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUuid" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Nutrient_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NutrientsOnFruits" (
    "fruitId" INTEGER NOT NULL,
    "nutrientId" INTEGER NOT NULL,

    PRIMARY KEY ("fruitId", "nutrientId"),
    CONSTRAINT "NutrientsOnFruits_fruitId_fkey" FOREIGN KEY ("fruitId") REFERENCES "Fruit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "NutrientsOnFruits_nutrientId_fkey" FOREIGN KEY ("nutrientId") REFERENCES "Nutrient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
