
import Charts from "./analysis/page"
import TransactionsPage from "./trasaction/page"
import Status from "./pages/status";

export default async function Dashboard() {
  // Fetch current month transactions
  
  return (
    
    <div className="m-4 ">
      <div>
        <Status />
      </div>  
     <div className="">
      <Charts />
    </div>
    <div >
      <TransactionsPage />
    </div>
    </div>
  );
}
