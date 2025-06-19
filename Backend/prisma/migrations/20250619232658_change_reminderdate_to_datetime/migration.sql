-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reminder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardsCounter" INTEGER NOT NULL,
    "reminderDate" TEXT NOT NULL
);
INSERT INTO "new_Reminder" ("cardsCounter", "id", "reminderDate") SELECT "cardsCounter", "id", "reminderDate" FROM "Reminder";
DROP TABLE "Reminder";
ALTER TABLE "new_Reminder" RENAME TO "Reminder";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
