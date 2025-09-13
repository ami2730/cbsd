import { Card, CardHeader, CardTitle, CardContent, CardDescription} from "./card";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string; 
  positive?: boolean;
}

export function StatsCard({ title, value, change, positive }: StatsCardProps) {
  return (
    <Card className="flex">
        <CardHeader className="m-0 p-0 ">
            
        </CardHeader>
    </Card>
  );
}
