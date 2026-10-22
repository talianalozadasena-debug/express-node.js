/*
  Warnings:

  - You are about to drop the column `clave` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `categoria` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "usuario_email_key";

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "clave",
DROP COLUMN "email",
DROP COLUMN "username",
ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "nombre" TEXT NOT NULL;
