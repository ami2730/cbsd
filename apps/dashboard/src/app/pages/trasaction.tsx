import { PrismaClient } from "@prisma/client";
import Table from "@repo/ui/components/trasaction";


const prisma = new PrismaClient();

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Amount", accessor: "amount" },
  { header: "Date", accessor: "date" },
  { header: "Type", accessor: "type" },
 
];

interface TransactionsPageProps {
  searchParams?: { number?: string };
}


export default async function TransactionsPage({ searchParams }:TransactionsPageProps) {
  // Server-side fetch (no getServerSideProps)
 const number = Number(searchParams?.number) || 10;
  const transactions = await prisma.transaction.findMany({
      orderBy: { createdAt: "desc" },
      take:number,
    });
  const formattedTransactions = transactions.map((tx) => ({
    ...tx,
    date: tx.createdAt.toISOString(), // or tx.date.toLocaleDateString()
  }));
  return (
    <div className="p-6 ml-60">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <Table columns={columns} data={formattedTransactions} />
    </div>
  );
}
