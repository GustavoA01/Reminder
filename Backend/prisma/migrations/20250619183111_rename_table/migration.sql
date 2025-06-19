/*
  Warnings:

  - You are about to drop the column `cardsCouner` on the `Reminder` table. All the data in the column will be lost.
  - Added the required column `cardsCounter` to the `Reminder` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reminder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cardsCounter" INTEGER NOT NULL,
    "reminderDate" DATETIME NOT NULL
);
INSERT INTO "new_Reminder" ("id", "reminderDate") SELECT "id", "reminderDate" FROM "Reminder";
DROP TABLE "Reminder";
ALTER TABLE "new_Reminder" RENAME TO "Reminder";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
