import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Admin
  await prisma.admin.create({
    data: {
      id: "admin",
      username: "admin",
    },
  });

  // Create Partner
  await prisma.partner.create({
    data: {
      id: "1",
      partnerid: "SHP-123",
      name: "iPEK",
      email: "iPEK@gmail.com",
      phone: "12345678",
      location: "Germany",
      contactperson: "John",
    },
  });

  // Create Product and associate with Partner
  await prisma.product.create({
    data: {
      id: "SHP-1",
      productid: "SHP-1",
      name: "Product Name 1",
      details: "A detailed description of product 1",
      spec1: "Spec1 details",
      spec2: "Spec2 details",
      spec3: "Spec3 details",
      partnerid: "1", // Corrected to match Partner ID
    },
  });

  // Create Service and associate with Partner
  await prisma.service.create({
    data: {
      id: "SHS-1",
      serviceid: "SHS-1",
      name: "Service Name 1",
      details: "A detailed description of service 1",
      spec1: "Spec1 details",
      spec2: "Spec2 details",
      spec3: "Spec3 details",
      partnerid: "1", // Corrected to match Partner ID
    },
  });

  // Create Client
  await prisma.client.create({
    data: {
      id: "SHC-123",
      clientid: "SHC-123",
      name: "NWC",
      email: "NWC@gmail.com",
      phone: "12345678",
      addressline1: "123 Street",
      addressline2: "Riyadh",
      addressline3: "KSA",
      location: "Riyadh",
      contactperson: "Kevin",
      details: "Riyadh Water Supply Company",
    },
  });

  // Create Order and associate with Product, Service, and Client
  await prisma.order.create({
    data: {
      id: 1,
      orderid: "SHO-1223",
      productid: "SHP-1",
      serviceid: "SHS-1",
      status: true,
      clientid: "SHC-123", // Fixed client ID
    },
  });

  // Create Message and associate with Client
  await prisma.message.create({
    data: {
      id: 1,
      title: "Message 1",
      content: "A message content example.",
      clientid: "SHC-123", // Fixed client ID
    },
  });

  // Create Announcement and associate with Client
  await prisma.announancement.create({
    data: {
      id: 1,
      title: "Announcement 1",
      content: "An announcement content example.",
      clientid: "SHC-123", // Fixed client ID
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
