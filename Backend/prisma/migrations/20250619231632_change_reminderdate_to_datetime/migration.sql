/*
  Warnings:

  - You are about to alter the column `reminderDate` on the `Reminder` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reminder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardsCounter" INTEGER NOT NULL,
    "reminderDate" DATETIME NOT NULL
);
INSERT INTO "new_Reminder" ("cardsCounter", "id", "reminderDate") SELECT "cardsCounter", "id", "reminderDate" FROM "Reminder";
DROP TABLE "Reminder";
ALTER TABLE "new_Reminder" RENAME TO "Reminder";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
