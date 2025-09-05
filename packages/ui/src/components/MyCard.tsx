
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"

interface MyCardProps {
  title: string
  description: string
  content: React.ReactNode
  icon?: React.ReactNode
}

export function MyCard({ title, description, content, icon }: MyCardProps) {
  return (
    <Card className="w-96 border border-muted shadow-lg rounded-xl bg-background p-6">
      <CardHeader>
        <CardTitle className="text-xl text-primary font-bold">{title}</CardTitle>
        
      </CardHeader>
      <CardContent>{content}</CardContent><CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      {icon && <CardFooter className="flex justify-end">{icon}</CardFooter>}
    </Card>
  )
}
