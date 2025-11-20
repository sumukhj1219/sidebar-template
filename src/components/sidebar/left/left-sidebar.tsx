"use client"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/common/sidebar"
import { cn } from "@/lib/utils"
import UserProfile from "./user-profile"
import NavMain from "./nav-main"

interface LeftSidebarProps {
  open: boolean
  className?: string
}

export const LeftSidebar = ({ open, className }: LeftSidebarProps) => {
  return (
    <Sidebar
      className={className}
      open={open}
    >
      <SidebarHeader>
        <UserProfile />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
    </Sidebar>
  )
}
