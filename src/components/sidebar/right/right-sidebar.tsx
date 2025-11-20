"use client"
import { cn } from "@/lib/utils"

interface RightSidebarProps {
  open: boolean
  className?: string
}

export const RightSidebar = ({ open, className }: RightSidebarProps) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 transition-all  duration-300 bg-sidebar border-l overflow-hidden",
        open ? "md:w-96 w-3/4" : "md:w-16 w-0",
        className
      )}
    >
      <div className="p-4">{open ? "Right Sidebar" : "RS"}</div>
    </div>
  )
}
