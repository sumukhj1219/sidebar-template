import { useSidebar } from '@/components/sidebar/sidebar-context'
import { Input } from '@/components/ui/input'
import { useDevice } from '@/hooks/use-device'
import { CommandIcon, Search } from 'lucide-react'

const Searchbar = () => {
    const device = useDevice()
    const { rightOpen } = useSidebar()
    return (
        <div className="relative w-full max-w-sm md:block hidden">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
                className="pl-10 bg-secondary"
                placeholder="Search"
            />
            {
                !rightOpen && (device === "tablet" ) &&
                <CommandIcon className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
            }
            {
                device === "desktop" && 
                <CommandIcon className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
            }
        </div>
    )
}

export default Searchbar
