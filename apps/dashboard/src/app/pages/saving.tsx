import { PrismaClient } from "@prisma/client";
import { SavingsChart } from "@repo/ui/layouts/features/savingChart";
import { startOfMonth, format } from "date-fns";

const prisma = new PrismaClient();

async function getSavingsData() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { createdAt: "asc" },
  });

  // Group by month
  const monthly: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((t) => {
    const month = format(startOfMonth(t.createdAt), "MMM yyyy");
    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }
    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else if (t.type === "expense") {
      monthly[month].expense += t.amount;
    }
  });

  // Compute savings
  return Object.entries(monthly).map(([month, { income, expense }]) => ({
    month,
    savings: income - expense,
  }));
}

export default async function DashboardPage() {
  const savingsData = await getSavingsData();

  return (
    <div className="p-6 ml-60">
      <SavingsChart data={savingsData} />
    </div>
  );
}
