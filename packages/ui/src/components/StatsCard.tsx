import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from "./card";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {ArrowDownLeft} from 'lucide-react'
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number; 
  positive?: boolean;
}

export function StatsCard({ title, value, change, positive }: StatsCardProps) {
  return (
    <Card className="flex-row  flex-wrap  mx-auto max-w-screen-xl lg:m- lg:grid-cols-3 grid">
        <CardHeader className="">
            <ArrowDownLeft/>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
          <CardDescription className="text-2xl font-bold text-gray-900">{value}</CardDescription>
        </CardContent>
        <CardFooter>{change && (
      <p
        className={`text-sm font-medium mt-1 ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {Math.round(change)}%
      </p>
    )}</CardFooter>

    </Card>
  );
}
