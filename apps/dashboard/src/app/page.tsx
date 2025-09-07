import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card"
import {StatsCard} from "@repo/ui/components/StatsCard"
export default function Home() {
  return (
     <main className="min-h-screen  p-6">
    
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatsCard title="Total Income" value="$12,430" change="+8.2%" positive />
      <StatsCard title="Total Expenses" value="$8,900" change="-2.3%" positive={false} />
      <StatsCard title="Net Savings" value="$3,530" change="+12.5%" positive />
    </div>
    </main>
  )
}
