import { Button } from "@repo/ui/components/button"
import { Card1 } from "@repo/ui/components/card1"
import { Loader2Icon } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center ">
     <div className="text-center items-center">
       <h1 className="text-4xl font-bold text-blue-600">Ready for Doing</h1>
         <Button size="sm" disabled className="flex">
          <Loader2Icon className="animate-spin" />Please wait
          </Button>
      
     </div>
     
      <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  <Card1
        title="INCOME"
        description=""
        content={<p>1,234</p>}
      />
    </main>
  )
}
