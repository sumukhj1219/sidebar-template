"use client"
import { usePathname } from "next/navigation"

const pathRecords: Record<string, string> = {
  "/": "Dashboards",
  "/settings": "Settings",
  "/profile": "Profile",
  "/projects": "Projects",
}

export function useCurrentPath(): string {
  const pathname = usePathname()
  
  for (const key in pathRecords) {
    if (pathname.startsWith(key)) return pathRecords[key]
  }

  return "Welcome"
}
