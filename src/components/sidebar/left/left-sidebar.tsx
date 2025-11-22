"use client"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/common/sidebar"
import UserProfile from "./user-profile"
import NavMain from "./nav-main"
import SubHeader from "./sub-header"
import { useSidebar } from "../sidebar-context"
import { useIsMobile } from "@/hooks/use-mobile"

export const LeftSidebar = () => {
  const { leftOpen } = useSidebar()
  const isMobile = useIsMobile()
  return (
    <Sidebar
      className={`
                        border-r
                        ${isMobile
          ? "fixed top-0 left-0 h-full z-30 transition-all duration-300"
          : "flex-shrink-0 transition-all duration-300"}
                        ${leftOpen ? "md:w-72 w-3/4" : "md:w-16 w-0"}   
                        `
      }
    >
      <SidebarHeader>
        <UserProfile />
      </SidebarHeader>
      <SidebarContent className="flex flex-col gap-y-10">
        <SubHeader />
        <NavMain />
      </SidebarContent>
    </Sidebar>
  )
}
