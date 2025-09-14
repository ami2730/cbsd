import { PrismaClient } from "@prisma/client";
import Table from "@repo/ui/components/trasaction";


const prisma = new PrismaClient();

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Amount", accessor: "amount" },
  { header: "Date", accessor: "date" },
  { header: "Type", accessor: "type" },
 
];


export default async function TransactionsPage() {
  // Server-side fetch (no getServerSideProps)
 
  const transactions = await prisma.transaction.findMany({
      orderBy: { createdAt: "desc" },
      take:15,
    });
  const formattedTransactions = transactions.map((tx) => ({
    ...tx,
    date: tx.createdAt.toISOString(), // or tx.date.toLocaleDateString()
  }));
  return (
    <div className="p-6 ml-72">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <Table columns={columns} data={formattedTransactions} />
    </div>
  );
}
