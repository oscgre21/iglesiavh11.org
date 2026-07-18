-- CreateTable
CREATE TABLE "members" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "birth_date" TEXT,
    "gender" TEXT,
    "marital_status" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "baptized" BOOLEAN NOT NULL DEFAULT false,
    "children" INTEGER NOT NULL DEFAULT 0,
    "ministry" TEXT,
    "how_found" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
