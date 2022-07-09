/*
  Warnings:

  - You are about to drop the `UsersInRooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersInRooms" DROP CONSTRAINT "UsersInRooms_roomId_fkey";

-- DropForeignKey
ALTER TABLE "UsersInRooms" DROP CONSTRAINT "UsersInRooms_userId_fkey";

-- DropTable
DROP TABLE "UsersInRooms";

-- CreateTable
CREATE TABLE "UserInRoom" (
    "roomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserInRoom_pkey" PRIMARY KEY ("roomId","userId")
);

-- AddForeignKey
ALTER TABLE "UserInRoom" ADD CONSTRAINT "UserInRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInRoom" ADD CONSTRAINT "UserInRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
