import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data = [
    {
        name: "ASOS Ridley High Waist",
        price: "$79.49",
        qty: 82,
        amount: "$6,518.18"
    },
    {
        name: "Marco Lightweight Shirt",
        price: "$128.50",
        qty: 37,
        amount: "$4,754.50"
    },
    {
        name: "Half Sleeve  Shirt",
        price: "$39.99",
        qty: 64,
        amount: "$2,559.36"
    },
    {
        name: "Lightweight Jacket",
        price: "$20.00",
        qty: 184,
        amount: "$3,680.00"
    },
    {
        name: "Marco Shoes",
        price: "$79.49",
        qty: 64,
        amount: "$1,965.81"
    }
]


const TopSellingProducts = ({ className }: { className?: string }) => {
    return (
        <Card className={cn(className, "w-full bg-secondary dark:bg-neutral-800 shadow-none border-none")}>
            <CardHeader>
                Top Selling Products
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px] text-muted-foreground">Name</TableHead>
                            <TableHead className='text-muted-foreground'>Price</TableHead>
                            <TableHead className='text-muted-foreground'>Quantity</TableHead>
                            <TableHead className='text-muted-foreground'>Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell className="font-medium">{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.qty}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default TopSellingProducts