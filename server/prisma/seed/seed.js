// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = require('./seedProducts.js')

async function main() {
  // Seed products
  for (let product of products) {
    await prisma.products.create({
      data: 
      {
        name: product.name,
        color: product.color,
        size: product.size,
        gender: product.gender,
        forkids: product.forkids,
        details: product.details,
        cost: product.cost,
        imgUrl: product.img,
        category: product.category
      }
    })
  }
}
main().catch(e => {
  console.log('There was an error seeding the database')
  console.log(e)
}).finally(() => {
  prisma.$disconnect();
})