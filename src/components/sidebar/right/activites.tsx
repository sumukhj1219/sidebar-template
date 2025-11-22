import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const data = [
    {
        id: 1,
        title: "You have a bug that needs to be fixed",
        time: "Just now",
        icon:"https://images.unsplash.com/photo-1548544149-4835e62ee5b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        title: "New user registered",
        time: "59 minutes ago",
        icon:"https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        title: "You have a bug that needs to be fixed",
        time: "12 hours ago",
        icon:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "Andi lane subscribed to you",
        time: "Today, 11:59 AM",
        icon: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        title: "Deleted a project in X",
        time: "Feb 2, 2023",
        icon: "https://images.unsplash.com/photo-1589234217365-08d3e0e5cf42?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const Activites = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <span>Activites</span>
            <div className='flex flex-col gap-y-5'>
                {
                    data.map((d) => (
                        <div className='flex items-center gap-x-3' key={d.id}>
                            <Avatar>
                                <AvatarImage src={d.icon} className='object-cover'/>
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <span className='flex flex-col'>
                                <span className='text-sm'>{d.title}</span>
                                <span className='text-xs text-muted-foreground'>{d.time}</span>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Activites