import { Button } from "@repo/ui/components/button"
import { MyCard } from "@repo/ui/components/MyCard"
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
<div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind + Next.js!</h1>
    </div>
  <MyCard
  title="Dashboard Stats"
  description="Latest updates"
  content={<p>Some stats content goes here</p>}
  icon={<button className="bg-primary text-primary-foreground px-4 py-2 rounded">View</button>}
/>
    </main>
  )
}
