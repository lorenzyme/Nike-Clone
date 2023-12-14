// This code is to remove all the data from the database (testing purposes etc)

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const tableNames = ['products'];

async function main() {
  for (const tableName of tableNames) await prisma.$queryRawUnsafe(`Truncate "${tableName}" restart identity cascade;`);
}

main().finally(async () => {
  await prisma.$disconnect();
});