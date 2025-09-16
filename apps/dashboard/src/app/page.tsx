
import Chart from './pages/chart'
import Saving from "./pages/saving"
import TransactionsPage from "./pages/trasaction"
import Status from "./pages/status";

export default async function Dashboard() {
  // Fetch current month transactions
  
  return (
    
    <div className="">

      <div className='p-6 mb-10'>
        <div className='ml-60 mb-6'>
          <h1 className="text-2xl font-bold">Financial Dashboard</h1>
        </div>
        <Status />
        <Chart />
        <Saving />
        <TransactionsPage />
      </div>  
    </div>
  );
}
