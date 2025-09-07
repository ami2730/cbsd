import { Card, CardHeader, CardTitle, CardContent, CardDescription} from "./card";
import {ArrowUpSquareIcon ,ArrowDownSquareIcon} from "lucide-react"
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string; 
  positive?: boolean;
}

export function StatsCard({ title, value, change, positive }: StatsCardProps) {
  return (
    <Card className="w-full shadow-sm rounded-2xl">
      <CardHeader className="m-0 ">
        <div className="flex">
            {
              positive ? <ArrowUpSquareIcon /> : <ArrowDownSquareIcon />
            }
            
            <CardTitle className=" font-medium text-muted-foreground">
          {title}
        </CardTitle>
        </div>
        
      </CardHeader>
      <div className="flex flex-col md:flex-row m-0 p-0">
        <CardContent className="">
        <p className="text-3xl font-bold">{value}</p>
        
      </CardContent>
      <CardDescription className={`m-0 p-0 rounded-sm  ${
              positive ? "bg-green-600/20" : "bg-red-600/20"
            }`}>
        {change && (
          <p
            className={`text-sm font-medium mt-1 ${
              positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </p>
        )}
      </CardDescription>
      </div>

    </Card>
  );
}
