-- CreateTable
CREATE TABLE "Fruit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    CONSTRAINT "Fruit_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
