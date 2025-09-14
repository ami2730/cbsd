import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from "./card";
import { ArrowDownCircle, ArrowUpCircle, PiggyBank } from "lucide-react";

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import {ArrowDownLeft} from 'lucide-react'
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number; 
  positive?: boolean;
}


function getIcon(title: string) {
  switch (title.toLowerCase()) {
    case "total income":
      return <ArrowDownCircle className="w-10 h-10 lg:w-15 lg:h-15 text-green-500" />;
    case "total expenses":
      return <ArrowUpCircle className="w-10 h-10 lg:w-15 lg:h-15 text-red-500" />;
    case "net savings":
      return <PiggyBank className="w-10 h-10 lg:w-15 lg:h-15 text-blue-500" />;
    default:
      return <span className="w-10 h-10 lg:w-15 lg:h-15 text-gray-400">❓</span>;
  }
}

export function StatsCard({ title, value, change, positive }: StatsCardProps) {
  console.log("title is:", title);
  return (
    <Card className="flex-row  flex-wrap  mx-auto max-w-screen-xl lg:m- lg:grid-cols-3 grid">
        <CardHeader >
           <div className="">{getIcon(title)}</div>
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
