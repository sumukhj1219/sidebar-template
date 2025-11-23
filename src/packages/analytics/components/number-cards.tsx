"use client"
import { useSidebar } from "@/components/sidebar/sidebar-context"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useDevice } from "@/hooks/use-device"
import { cn } from "@/lib/utils"
import { TrendingDown, TrendingUp } from "lucide-react"

const data = [
    {
        id: 1,
        name: "Customers",
        total: "3,781",
        type: "number",
        growth: "+11.01",
        status: "up",
        bg: "bg-sky-100",
        text: "dark:text-secondary text-primary"
    },
    {
        id: 2,
        name: "Orders",
        total: "1,219",
        type: "number",
        growth: "-0.03",
        status: "down",
        bg: "dark:bg-neutral-800 bg-secondary",
        text: "text-primary"
    },
    {
        id: 3,
        name: "Revenue",
        total: "$695",
        type: "currency",
        growth: "+15.03",
        status: "up",
        bg: "dark:bg-neutral-800 bg-secondary",
        text: "text-primary"
    },
    {
        id: 4,
        name: "Growth",
        total: "30.1%",
        type: "percent",
        growth: "+6.08",
        status: "up",
        bg: "bg-sky-100",
        text: "dark:text-secondary text-primary"
    }
]

const NumberCards = ({ className }: { className?: string }) => {
    const device = useDevice()
    const {leftOpen, rightOpen} = useSidebar()

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", className)}>
            {data.map((d) => (
                <Card
                    key={d.id}
                    className={`w-full ${d.bg} ${d.text} shadow-none border-none`}
                >
                    <CardHeader>
                        <CardTitle className={`${device === "desktop" && (!leftOpen || !rightOpen) ? "text-xl" :"text-sm md:text-xs lg:text-sm"} `}>
                            {d.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between min-w-0">
                        <p className={`${device === "desktop" && (!leftOpen || !rightOpen) ? "text-6xl" : "text-4xl md:text-3xl lg:text-4xl font-semibold flex-shrink-0"} `}>
                            {d.total}
                        </p>

                        <span className={`${ device === "desktop" && (!leftOpen || !rightOpen)  ? "text-2xl flex items-center gap-x-1 flex-shrink min-w-0" : "text-xs md:text-[10px] lg:text-xs flex items-center gap-x-1 flex-shrink min-w-0"}`}>
                            {d.growth}%
                            {d.status === "up" ? (
                                <TrendingUp className={`${device === "desktop" && (!leftOpen || !rightOpen)  ? "w-6 h-6" :"w-4 h-4 md:w-2.5 md:h-2.5 flex-shrink-0"}`} />
                            ) : (
                                <TrendingDown className={`${device === "desktop" && (!leftOpen || !rightOpen)  ? "w-6 h-6" :"w-4 h-4 md:w-2.5 md:h-2.5 flex-shrink-0"} rotate-y-180`} />
                            )}
                        </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default NumberCards
