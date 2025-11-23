"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
   { sales: 10000000, month: "February", desktop: 305, mobile: 200 },

]


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function ChartBar() {
    return (
        <Card className="shadow-none border-none">
            <CardHeader>
                <CardTitle>Projections vs Actual</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} stroke="#E5E7EB" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            tickFormatter={(v) => v.slice(0, 3)}
                        />
                        <YAxis
                            type="number"
                            domain={[0, 30000000]}
                            ticks={[0, 10000000, 20000000, 30000000]}
                            tickFormatter={(value) => `${value / 1000000}M`}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        />
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="desktop"
                            stackId="a"
                            fill="var(--color-desktop)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="mobile"
                            stackId="a"
                            fill="var(--color-mobile)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
