import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

const data = [
  {
    city: "New York",
    total: 72,
    label: "72K"
  },
  {
    city: "San Fransico",
    total: 39,
    label: "39K"
  },
  {
    city: "Sydney",
    total: 25,
    label: "25K"
  },
  {
    city: "Singapore",
    total: 61,
    label: "61K"
  }
]

const RevenueByLocation = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className, "w-full bg-secondary dark:bg-neutral-800 shadow-none border-none")}>
      <CardHeader>
        Revenue by location
      </CardHeader>
      <CardContent className='flex flex-col'>
        <img
          src={"/data/map.png"}
        />
        <div className='flex flex-col gap-y-10'>
          {
            data.map((d) => (
              <span className='flex flex-col' key={d.city}>
                <span className='flex items-center justify-between'>
                  <Label htmlFor={d.city} className='text-sm'>{d.city}</Label>
                  <Label htmlFor={d.city}>
                    {d.label}
                  </Label>
                </span>
                <Progress id={d.city} value={d.total} className='h-1'  />
              </span>
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default RevenueByLocation