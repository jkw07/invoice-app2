import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await seedVatRates();
  await seedPayments();
}

async function seedVatRates() {
  await prisma.vatRate.createMany({
    data: [
      { type: 'STANDARD', rate: 23 },
      { type: 'STANDARD', rate: 8 },
      { type: 'STANDARD', rate: 5 },
      { type: 'STANDARD', rate: 0 },
      { type: 'EXEMPT', rate: null },
      { type: 'NOT_TAXED', rate: null },
    ],
    skipDuplicates: true,
  });

  console.log('VAT rates seeded');
}

async function seedPayments() {
  const methods = [
    'przelew',
    'gotówka',
    'karta płatnicza',
    'czek',
    'za pobraniem',
    'inny',
    'przedpłata',
  ];

  await Promise.all(
    methods.map((method) =>
      prisma.payment.upsert({
        where: { method },
        update: {},
        create: { method },
      }),
    ),
  );

  console.log('Payments seeded');
}

main()
  .then(() => {
    console.log('Seeding finished!');
    return prisma.$disconnect();
  })
  .catch((error) => {
    console.error('Error during seeding:', error);
    return prisma.$disconnect();
  });
