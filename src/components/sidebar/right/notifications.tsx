import { BugIcon, ListVideoIcon, Signal, User } from 'lucide-react'
import React from 'react'

const notificationType: Record<string, React.ReactNode> = {
    "bug": <BugIcon className='w-4 h-4' />,
    "user": <User className='w-4 h-4' />,
    "event": <Signal className='w-4 h-4' />
}

const data = [
    {
        id:1,
        title: "You have a bug that needs to be fixed",
        time: "Just now",
        icon: notificationType["bug"]
    },
    {
        id:2,
        title: "New user registered",
        time: "59 minutes ago",
        icon: notificationType["user"]
    },
    {
        id:3,
        title: "You have a bug that needs to be fixed",
        time: "12 hours ago",
        icon: notificationType["bug"],
    },
    {
        id:4,
        title: "Andi lane subscribed to you",
        time: "Today, 11:59 AM",
        icon: notificationType["event"],
    }
]

const Notifications = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <span>Notifications</span>
            <div className='flex flex-col gap-y-5'>
                {
                    data.map((d) => (
                        <div className='flex items-center gap-x-3' key={d.id}>
                            <span className='p-1 rounded-sm bg-sky-100 text-primary dark:text-secondary text-xs'>{d.icon}</span>
                            <span className='flex flex-col'>
                                <span className='md:text-sm text-xs overflow-hidden text-ellipsis'>{d.title}</span>
                                <span className='md:text-xs text-xs text-muted-foreground'>{d.time}</span>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notifications