import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { accessories } from './seedAccessories.js';
import { tops } from './seedTops.js';
import { bottoms } from './seedBottoms.js';
import { shoes } from './seedShoes.js';

async function main() {

  // Seed accessories
  for (let accessories of accessories) {
    await prisma.accessories.create({
      data: accessories
    })
  }


  // Seed tops
  for (let tops of tops) {
    await prisma.tops.create({
      data: tops
    })
  }


  // Seed bottoms
  for (let bottoms of bottoms) {
    await prisma.bottoms.create({
      data: bottoms
    })
  }

  // Seed shoes
  for (let shoes of shoes) {
    await prisma.shoes.create({
      data: shoes
    })
  }
}
main().catch(e => {
  console.log('There was an error seeding the database')
  console.log(e)
}).finally(() => {
  prisma.$disconnect();
})