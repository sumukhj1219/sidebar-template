import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"

const data = [
    {
        id: 1,
        name: "Customers",
        total: "3,781",
        type: "number",
        growth: "+11.01",
        status: "up",
        bg:"bg-sky-100",
        text:"dark:text-secondary text-primary"
    },
    {
        id: 2,
        name: "Orders",
        total: "1,219",
        type: "number",
        growth: "-0.03",
        status: "down",
        bg:"dark:bg-neutral-800 bg-secondary",
        text:"text-primary"
    },
    {
        id: 3,
        name: "Revenue",
        total: "$695",
        type: "currency",
        growth: "+15.03",
        status: "up",
        bg:"dark:bg-neutral-800 bg-secondary",
        text:"text-primary"
    },
    {
        id: 4,
        name: "Growth",
        total: "30.1%",
        type: "percent",
        growth: "+6.08",
        status: "up",
        bg:"bg-sky-100",
        text:"dark:text-secondary text-primary"
    }
]

const NumberCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((d) => (
                <Card
                    key={d.id}
                    className={`w-full ${d.bg} ${d.text} shadow-none border-none`}
                >
                    <CardHeader>
                        <CardTitle className="text-sm">{d.name}</CardTitle>
                    </CardHeader>

                    <CardContent className="flex items-center justify-between">
                        <p className="text-4xl">{d.total}</p>
                        <span className="text-xs flex items-center gap-x-2">
                            {d.growth}%
                            {d.status === "up" ? (
                                <TrendingUp className="w-4 h-4" />
                            ) : (
                                <TrendingDown className="w-4 h-4 rotate-y-180" />
                            )}
                        </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}


export default NumberCards