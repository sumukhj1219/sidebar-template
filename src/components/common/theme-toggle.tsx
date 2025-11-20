"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative w-10 h-10 flex items-center justify-center"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
        <PiSunDuotone
          className={`absolute h-5 w-5 transition-all duration-300 ${
            isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
          }`}
        />
      <PiMoonDuotone
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
    </Button>
  )
}
