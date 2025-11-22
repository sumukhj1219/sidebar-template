import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

const data = [
    {
        id: 1,
        icon: "https://images.unsplash.com/photo-1590702841774-45166f031529?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Natali Craig"
    },
    {
        id: 2,
        icon: "https://images.unsplash.com/photo-1648415041078-d5b259c683be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Drew Cano"
    },
    {
        id: 3,
        icon: "https://images.unsplash.com/photo-1724225618356-4af4289f62d9?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Oriando Diggs"
    },
    {
        id: 4,
        icon: "https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Andi Lane"
    },
    {
        id:5,
        icon:"https://plus.unsplash.com/premium_photo-1677883711109-f38c34a4ddfb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Kate Morrison"
    },
    {
        id:6,
        icon:"https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Koray Okumus"
    }
]

const Contacts = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <span>Contacts</span>
            <div className='flex flex-col gap-y-5'>
                {
                    data.map((d) => (
                        <div className='flex items-center gap-x-3' key={d.id}>
                            <Avatar>
                                <AvatarImage src={d.icon} className='object-cover' />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <span className='flex flex-col'>
                                <span className='md:text-sm text-xs'>{d.name}</span>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Contacts