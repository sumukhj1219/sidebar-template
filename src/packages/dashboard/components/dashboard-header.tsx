import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { HiOutlineSlash } from "react-icons/hi2";
import { TfiWindow } from "react-icons/tfi";
import { PiClockCounterClockwiseDuotone, PiBellDuotone, PiSunDuotone, PiStarDuotone } from "react-icons/pi";
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar/sidebar-context"
import { useCurrentPath } from "@/hooks/use-currentPath"
import Searchbar from "./search-bar";
import { ThemeToggle } from "@/components/common/theme-toggle";

const DashboardHeader = () => {
    const { leftOpen, setLeftOpen, rightOpen, setRightOpen } = useSidebar()
    const currentPath = useCurrentPath()

    return (
        <header className="flex items-center justify-between h-16  px-4 gap-2 shrink-0 border-b">
            <div className="flex items-center justify-center gap-x-3">
                <Button
                    size={"icon-lg"}
                    variant={"ghost"}
                    onClick={() => setLeftOpen(!leftOpen)}
                >
                    <TfiWindow className="rotate-270" />
                </Button>
                <Button
                    size={"icon-lg"}
                    variant={"ghost"}
                >
                    <PiStarDuotone />
                </Button>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#" className="hover:bg-secondary p-1">{currentPath}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <HiOutlineSlash />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Default</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex items-center justify-center gap-x-3">
                <Searchbar />
                <ThemeToggle />
                <Button
                    size={"icon-lg"}
                    variant={"ghost"}
                >
                    <PiClockCounterClockwiseDuotone />
                </Button>
                <Button
                    size={"icon-lg"}
                    variant={"ghost"}
                >
                    <PiBellDuotone />
                </Button>
                <Button
                    size={"icon-lg"}
                    variant={"ghost"}
                    onClick={() => setRightOpen(!rightOpen)}
                    className="ml-auto"
                >
                    <TfiWindow className="rotate-270" />
                </Button>
            </div>
        </header>
    )
}

export default DashboardHeader