import { Input } from '@/components/ui/input'
import { CommandIcon, Search } from 'lucide-react'
import React from 'react'

const Searchbar = () => {
    return (
        <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
                className="pl-10 bg-secondary"
                placeholder="Search"
            />
            <CommandIcon className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
        </div>
    )
}

export default Searchbar
