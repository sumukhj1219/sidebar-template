"use client"
import { cn } from "@/lib/utils"
import  { ReactNode } from "react"

interface SidebarProps {
    className?: string
    children?: ReactNode
}

export const Sidebar = ({ className, children }: SidebarProps) => {
    return (
        <aside
            className={cn(
                "flex-shrink-0 flex flex-col bg-sidebar overflow-hidden transition-all duration-300",
                className
            )}
        >
            {children}
        </aside>
    )
}

interface SidebarHeaderProps {
    children: ReactNode
    className?: string
}

export const SidebarHeader = ({ children, className }: SidebarHeaderProps) => {
    return <div className={cn("p-4", className)}>{children}</div>
}

interface SidebarContentProps {
    children: ReactNode
    className?: string
}

export const SidebarContent = ({ children, className }: SidebarContentProps) => {
    return <div className={cn("flex-1 overflow-y-auto p-4", className)}>{children}</div>
}

interface SidebarFooterProps {
    children: ReactNode
    className?: string
}

export const SidebarFooter = ({ children, className }: SidebarFooterProps) => {
    return <div className={cn("p-4 border-t", className)}>{children}</div>
}
