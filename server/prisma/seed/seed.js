// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const accessories = require('./seedAccessories.js');
const tops = require('./seedTops.js');
const bottoms = require('./seedBottoms.js');
const shoes = require('./seedShoes.js');
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
  // Seed accessories
  for (let accessory of accessories) {
    await prisma.accessories.create({
      data: 
      {
        name: accessory.name,
        color: accessory.color,
        size: accessory.size,
        gender: accessory.gender,
        forkids: accessory.forkids,
        details: accessory.details,
        cost: accessory.cost,
        imgUrl: accessory.img
      }
    })
  }

  // // Seed tops
  for (let top of tops) {
    await prisma.tops.create({
      data: 
      {
        name: top.name,
        color: top.color,
        size: top.size,
        gender: top.gender,
        forkids: top.forkids,
        details: top.details,
        cost: top.cost,
        imgUrl: top.img
      }
    })
  }


  // // Seed bottoms
  for (let bottom of bottoms) {
    await prisma.bottoms.create({
      data: 
      {
        name: bottom.name,
        color: bottom.color,
        size: bottom.size,
        gender: bottom.gender,
        forkids: bottom.forkids,
        details: bottom.details,
        cost: bottom.cost,
        imgUrl: bottom.img
      }
    })
  }

  // // Seed shoes
  for (let shoe of shoes) {
    await prisma.shoes.create({
      data: 
      {
        name: shoe.name,
        color: shoe.color,
        size: shoe.size,
        gender: shoe.gender,
        forkids: shoe.forkids,
        details: shoe.details,
        cost: shoe.cost,
        imgUrl: shoe.img
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