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
    {
        month: "January",
        sales: 10000000,
        projected: 6000000,
        actual: 4000000,
    },
    {
        month: "February",
        sales: 20000000,
        projected: 12000000,
        actual: 8000000,
    },
    {
        month: "March",
        sales: 30000000,
        projected: 20000000,
        actual: 10000000,
    },
    {
        month: "April",
        sales: 25000000,
        projected: 15000000,
        actual: 10000000,
    },
    {
        month: "May",
        sales: 35000000,
        projected: 20000000,
        actual: 15000000,
    },
    {
        month: "June",
        sales: 28000000,
        projected: 18000000,
        actual: 10000000,
    },
];

const chartConfig = {
    projected: {
        label: "Projected",
        color: "var(--chart-1)",
    },
    actual: {
        label: "Actual",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;


export function ChartBar() {
    return (
        <Card className="shadow-none border-none dark:bg-neutral-800 bg-secondary">
            <CardHeader>
                <CardTitle>Projections vs Actual</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart data={chartData}>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={5}
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
                            dataKey="projected"
                            stackId="a"
                            fill="var(--color-projected)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="actual"
                            stackId="a"
                            fill="var(--color-actual)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
