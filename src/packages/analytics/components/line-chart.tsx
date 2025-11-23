"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
import { Separator } from "@/components/ui/separator";

const chartData = [
  { month: "January", actual: 12000000, projection: 15000000 },
  { month: "February", actual: 18000000, projection: 20000000 },
  { month: "March", actual: 22000000, projection: 23000000 },
  { month: "April", actual: 26000000, projection: 25000000 },
  { month: "May", actual: 15000000, projection: 17000000 },
  { month: "June", actual: 29000000, projection: 30000000 },
];



const chartConfig = {
  actual: {
    label: "Actual Sales",
    color: "var(--chart-2)",
  },
  projection: {
    label: "Projected Sales",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;


export function ChartLine({ className }: { className?: string }) {
  return (
    <Card className={cn(className, "border-none dark:bg-neutral-800 bg-secondary shadow-none")}>
      <CardHeader className="flex items-center gap-x-5">
        <CardTitle>
          Revenue
        </CardTitle>
        <Separator orientation="vertical" />
        <span className="text-xs">Current Week  $58,211</span>
        <span className="text-xs">Previous Week  $68,768</span>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
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

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Line
              dataKey="actual"
              type="bump"
              stroke="var(--chart-2)"
              dot={false}
              strokeWidth={2}
              filter="url(#rainbow-line-glow)"
            />

            <Line
              dataKey="projection"
              type="bump"
              stroke="var(--chart-5)"
              dot={false}
              strokeWidth={2}
              filter="url(#rainbow-line-glow)"
            />

            <defs>
              <filter
                id="rainbow-line-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
