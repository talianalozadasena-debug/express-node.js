const {PrismaClient} = require ("../src/generated/prisma")

const {PrismaPg} = require("@prisma/adapter-pg")

const adaptador = new PrismaPg({
    connectionString: process.env.
})