// packages/utils/finance.ts

export type Transaction = {
  type: "income" | "expense";
  amount: number;
};

export interface FinanceStatItem {
  title: string;
  value: number;
  change?: number;
  positive?: boolean;
}

export interface FinanceStatsSummary {
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
  incomeChange?: number;
  expenseChange?: number;
  savingsChange?: number;
}

/**
 * Helper to calculate % change
 */
function calcChange(current: number, previous: number): number | undefined {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / previous) * 100;
}

/**
 * Summarize a list of transactions
 */
function summarize(transactions: Transaction[]) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const netSavings = totalIncome - totalExpenses;

  return { totalIncome, totalExpenses, netSavings };
}

/**
 * Calculate stats with optional previous period for % change
 */
export function calculateFinanceStats(
  current: Transaction[],
  previous: Transaction[] = []
): { summary: FinanceStatsSummary; stats: FinanceStatItem[] } {
  const curr = summarize(current);
  const prev = summarize(previous);

  const summary: FinanceStatsSummary = {
    totalIncome: curr.totalIncome,
    totalExpenses: curr.totalExpenses,
    netSavings: curr.netSavings,
    incomeChange: calcChange(curr.totalIncome, prev.totalIncome),
    expenseChange: calcChange(curr.totalExpenses, prev.totalExpenses),
    savingsChange: calcChange(curr.netSavings, prev.netSavings),
  };

  const stats: FinanceStatItem[] = [
    {
      title: "Total Income",
      value: summary.totalIncome,
      change: summary.incomeChange,
      positive: summary.incomeChange !== undefined && summary.incomeChange >= 0,
    },
    {
      title: "Total Expenses",
      value: summary.totalExpenses,
      change: summary.expenseChange,
      // lower expenses are "good"
      positive: summary.expenseChange !== undefined && summary.expenseChange < 0,
    },
    {
      title: "Net Savings",
      value: summary.netSavings,
      change: summary.savingsChange,
      positive: summary.savingsChange !== undefined && summary.savingsChange >= 0,
    },
  ];

  return { summary, stats };
}
