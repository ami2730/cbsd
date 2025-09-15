
import Chart from './pages/chart'
import Saving from "./pages/saving"
import TransactionsPage from "./pages/trasaction"
import Status from "./pages/status";

export default async function Dashboard() {
  // Fetch current month transactions
  
  return (
    
    <div className="w-screen ">
      <div className='p-6'>
        <Status />
        <Chart />
        <Saving />
        <TransactionsPage />
      </div>  
    </div>
  );
}
