import { StatsCard } from "@repo/ui/components/StatsCard";
import { calculateFinanceStats, Transaction } from "@repo/ui/lib/finance";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Dashboard() {
  // Fetch current month transactions
  const currentTxnsRaw = await prisma.transaction.findMany({
    where: {
  createdAt : {
        gte: new Date("2025-09-01"),
        lt: new Date("2025-10-01"),
      },
    },
    select: { type: true, amount: true },
  });

  // Fetch previous month transactions
  const previousTxnsRaw = await prisma.transaction.findMany({
    where: {
  createdAt: {
        gte: new Date("2025-08-01"),
        lt: new Date("2025-09-01"),
      },
    },
    select: { type: true, amount: true },
  });

  // Map Prisma data to Transaction type
  const currentTxns: Transaction[] = currentTxnsRaw.map((t) => ({
    type: t.type as "income" | "expense",
    amount: t.amount,
  }));
  const previousTxns: Transaction[] = previousTxnsRaw.map((t) => ({
    type: t.type as "income" | "expense",
    amount: t.amount,
  }));

  // Calculate stats
  const { stats } = calculateFinanceStats(currentTxns, previousTxns);

  return (
    <div className="flex space-x-8  m-8">
      {stats.map((s) => (
        <StatsCard
          key={s.title}
          title={s.title}
          value={`$${s.value.toFixed(2)}`}
          change={s.change}
          positive={s.positive}
        />
      ))}
    </div>
  );
}
