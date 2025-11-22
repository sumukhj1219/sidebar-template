import * as React from "react"

export function useDevice() {
  const [device, setDevice] = React.useState<"mobile" | "tablet" | "desktop">("desktop")

  React.useEffect(() => {
    const update = () => {
      const width = window.innerWidth

      if (width < 768) {
        setDevice("mobile")
      } else if (width >= 768 && width < 1024) {
        setDevice("tablet")
      } else {
        setDevice("desktop")
      }
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return device
}
