"use client"
import { Sidebar, SidebarContent } from "@/components/common/sidebar"
import { useSidebar } from "../sidebar-context"
import { useIsMobile } from "@/hooks/use-mobile"
import Notifications from "./notifications"
import Activites from "./activites"
import Contacts from "./contacts"


export const RightSidebar = () => {
  const { rightOpen } = useSidebar()
  const isMobile = useIsMobile()
  return (
    <Sidebar
      className={`
                        border-l
                        ${isMobile
          ? "fixed top-0 right-0 h-full z-30 transition-all duration-300 w-1/2"
          : "flex-shrink-0 transition-all duration-300 md:w-96"}
                        ${rightOpen ? "md:w-96 w-3/4" : "md:w-0 w-0"}   
          `
      }
    >
      <SidebarContent className="flex flex-col md:gap-y-10">
        <Notifications />
        <Activites />
        <Contacts />
      </SidebarContent>
    </Sidebar>
  )
}
