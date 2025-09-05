import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card"
import {DollarSign, ArrowUp, ArrowDown} from "lucide-react";
import React from 'react'

interface CardProps {
  title: string
  description: string
  content: React.ReactNode
  icon?: React.ReactNode
}

export function Card1({ title, description, content, icon }: CardProps) {
  return (
    <div>
       <Card className="w-96 border border-muted shadow-lg rounded-xl bg-background p-6">
      <CardHeader>
        <CardTitle className="text-xl text-primary font-bold">{title}</CardTitle>
        
      </CardHeader>
      <CardContent className="grid"><span className="text-green-600">${ content}</span></CardContent>
      <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      <ArrowUp></ArrowUp>
    </Card>
    </div>
  )
}

