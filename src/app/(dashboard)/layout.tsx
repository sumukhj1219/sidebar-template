import { SidebarProvider } from '@/components/sidebar/sidebar-context'
import { ThemeProvider } from '@/components/ui/theme-provider'
import DashboardLayoutPage from '@/packages/dashboard/components/dashboard-layout-page'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <DashboardLayoutPage
                    children={children}
                />
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default DashboardLayout