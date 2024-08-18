-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "STATUS";

-- AlterTable
ALTER TABLE "patient" ADD COLUMN     "status" "STATUS";
