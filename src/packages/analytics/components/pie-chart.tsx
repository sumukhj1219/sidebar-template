"use client";

import { Cell, LabelList, Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import Container from "@/components/common/container";
import { DotIcon } from "lucide-react";


const chartData = [
  { browser: "Direct", visitors: 275, fill: "var(--chart-1)" },
  { browser: "Affitable", visitors: 200, fill: "var(--chart-2)" },
  { browser: "Sponsored", visitors: 187, fill: "var(--chart-3)" },
  { browser: "E-mail", visitors: 173, fill: "var(--chart-4)" },
];


const chartConfig = {
  browser: {
    label: "Traffic Source",
  },
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Direct",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Affitable",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Sponsored",
    color: "var(--chart-3)",
  },
  edge: {
    label: "E-mail",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;




const data = [
    {
        name: "Direct",
        total: "$300.56"
    },
    {
        name: "Affitable",
        total: "$135.18"
    },
    {
        name: "Sponsored",
        total: "$154.12"
    },
    {
        name: "E-mail",
        total: "$48.96"
    }
]

export function ChartPie({ className }: { className?: string }) {
    return (
        <Card className={cn("flex flex-col dark:bg-neutral-800 shadow-none border-none", className)}>
            <CardHeader className="items-center pb-0">
                <CardTitle>
                    Total Sales
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    nameKey="browser"
                                    labelKey="browser"
                                />
                            }
                        />

                        <Pie
                            data={chartData}
                            innerRadius={80}
                            dataKey="visitors"
                            cornerRadius={8}
                            paddingAngle={4}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>

                </ChartContainer>
                <Container className="w-full flex flex-col gap-y-5">
                    {
                        data.map((d) => (
                            <div className="flex items-center justify-between">
                                <span className="flex items-center">
                                    <DotIcon className="w-8 h-8 text-sky-200" />
                                    {d.name}
                                </span>
                                <span>{d.total}</span>
                            </div>
                        ))
                    }
                </Container>
            </CardContent>
        </Card>
    );
}
