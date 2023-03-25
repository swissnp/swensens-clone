/*
  Warnings:

  - You are about to alter the column `birthDay` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "password" TEXT NOT NULL,
    "birthDay" DATETIME,
    "telephone" TEXT,
    "sex" TEXT
);
INSERT INTO "new_User" ("birthDay", "email", "emailVerified", "firstname", "id", "lastname", "password", "sex", "telephone") SELECT "birthDay", "email", "emailVerified", "firstname", "id", "lastname", "password", "sex", "telephone" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
