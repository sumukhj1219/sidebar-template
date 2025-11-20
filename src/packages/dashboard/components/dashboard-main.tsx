"use client"
import React from "react"
import DashboardHeader from "./dashboard-header"


interface DashboardMainProps {
    children: React.ReactNode
}

const DashboardMain = ({ children }: DashboardMainProps) => {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            <DashboardHeader/>
            <main className="flex-1 p-4 overflow-auto">{children}</main>
        </div>
    )
}

export default DashboardMain
