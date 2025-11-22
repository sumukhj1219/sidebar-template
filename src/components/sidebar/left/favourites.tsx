import Link from 'next/link'
import React from 'react'

const data = [
    {
        name: "Overview",
        href: "#"
    },
    {
        name: "Projects",
        href: "#"
    }
]

const Favourites = () => {
    return (
        <div className='flex flex-col gap-y-3'>
            {
                data.map((d) => (
                    <Link href={d.href} key={d.name} className='ml-5 flex items-center gap-x-2'>
                        <span className='text-muted-foreground'>
                            •
                        </span>
                        {d.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Favourites