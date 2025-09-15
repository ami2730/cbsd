import { FinanceChart } from "@repo/ui/components/financeChart";
import { startOfMonth, format } from "date-fns";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getChartData() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { createdAt: "asc" },
  });


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
  return Object.entries(monthly).map(([month, { income, expense }]) => ({
    month,
    income,
    expense,
  }));
}

export default async function chart() {
  const data = await getChartData();

  return (
    <div className="p-6 ml-60">
      <FinanceChart data={data} />
    </div>
  );
}
