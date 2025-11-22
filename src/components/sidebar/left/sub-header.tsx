"use client"
import React, { useState } from 'react'
import Favourites from './favourites'
import { useSidebar } from '../sidebar-context'

const TabsData:Record<string, React.ReactNode>={
    "favourites": <Favourites />
}

const SubHeader = () => {
    const [activeTab, setActiveTab] = useState("favourites")
    const {leftOpen} = useSidebar()

    return (
        leftOpen &&
        <div className='flex flex-col text-sm cursor-pointer gap-y-3'>
            <div className='flex gap-x-3 text-muted-foreground'>
                <span id='favourites' className='hover:text-secondary-foreground' onClick={(e) => setActiveTab("favourites")}>Favourites</span>
                <span id='recently' className='hover:text-secondary-foreground'  onClick={(e) => setActiveTab("recently")}>Recently</span>
            </div>
            {
                  TabsData[activeTab]
            }
        </div>
    )
}

export default SubHeader