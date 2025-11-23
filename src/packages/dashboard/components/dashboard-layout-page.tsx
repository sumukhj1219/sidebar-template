"use client"
import React, { useState } from "react"
import { LeftSidebar } from "@/components/sidebar/left/left-sidebar"
import { RightSidebar } from "@/components/sidebar/right/right-sidebar"
import { useSidebar } from "@/components/sidebar/sidebar-context"
import { useDevice } from "@/hooks/use-device"
import DashboardHeader from "./dashboard-header"

interface DashboardLayoutPageProps {
    children: React.ReactNode
}

const DashboardLayoutPage = ({ children }: DashboardLayoutPageProps) => {
    const { leftOpen, setLeftOpen, rightOpen, setRightOpen } = useSidebar()
    const device = useDevice()

    return (
        <div className="flex h-screen w-full overflow-hidden relative">
            <LeftSidebar />
            {device === "mobile" && (leftOpen || rightOpen) && (
                <div
                    className="fixed inset-0 bg-black/40 z-20"
                    onClick={() => {
                        setLeftOpen(false)
                        setRightOpen(false)
                    }}
                />
            )}
            <div className="flex-1 flex flex-col min-h-screen">
                <DashboardHeader />
                <main className="flex-1 p-4 overflow-auto">{children}</main>
            </div>
            <RightSidebar />
        </div>
    )
}

export default DashboardLayoutPage
