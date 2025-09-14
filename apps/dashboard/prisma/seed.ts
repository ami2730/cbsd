
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.transaction.createMany({
    data: [
      { type: "income", amount: 130000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 107000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 100000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 10000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 12000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 19000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 16000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 120000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 89000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 76000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 87000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 99000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 104000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 8000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 9000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 91000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 76000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "income", amount: 67000, createdAt: new Date("2025-09-01T12:00:00Z")},
       { type: "expense", amount: 14000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 9000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 16000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 7000, createdAt: new Date("2025-09-01T12:00:00Z")},
      { type: "expense", amount: 12000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 9000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 8000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 102000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 98000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 10000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 87000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 104000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 105000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 34000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 24000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 54000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 54000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 45000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 15000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 14000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 7000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 5000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 63000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 23000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "income", amount: 54000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 5000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 6000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 3000, createdAt: new Date("2025-08-01T12:00:00Z")},
      { type: "expense", amount: 5000, createdAt: new Date("2025-08-01T12:00:00Z")},
      
   
    ],
  });
}

main()
  .then(() => {
    console.log("Seeding complete");
  })
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
