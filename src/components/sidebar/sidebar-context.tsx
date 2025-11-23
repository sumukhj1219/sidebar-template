"use client"
import React, { createContext, useContext, useState } from "react"

interface SidebarContextType {
  leftOpen: boolean
  setLeftOpen: (open: boolean) => void
  rightOpen: boolean
  setRightOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ leftOpen, setLeftOpen, rightOpen, setRightOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider")
  }
  return context
}
