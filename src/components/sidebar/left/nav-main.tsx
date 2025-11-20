import { ChevronRight } from 'lucide-react';
import { PiChartPie, PiShoppingBagOpen, PiFolder, PiBookOpen, PiUser } from "react-icons/pi";


const data = [
    {
        name: "Dashboards",
        items: [
            {
                name: "Default",
                icon: PiChartPie,
                href: "#",
                isCollapsible: false,
                items: []
            },
            {
                name: "eCommerce",
                icon: PiShoppingBagOpen,
                href: "#",
                isCollapsible: true,
                items: []
            },
            {
                name: "Projects",
                icon: PiFolder,
                href: "#",
                isCollapsible: true,
                items: []
            },
            {
                name: "Online Courses",
                icon: PiBookOpen,
                href: "#",
                isCollapsible: true,
                items: []
            }
        ]
    },
    {
        name: "Pages",
        items: [
            {
                name: "User Profile",
                icon: PiUser,
                href: "#",
                isCollapsible: true,
                items: [
                    {
                        name: "Overview",
                        href: "#"
                    },
                    {
                        name: "Projects",
                        href: "#"
                    },
                    {
                        name: "Campaigns",
                        href: "#"
                    },
                    {
                        name: "Documents",
                        href: "#"
                    },
                    {
                        name: "Followers",
                        href: "#"
                    }
                ]
            }
        ]
    }
]

const NavMain = () => {
    return (
        <div className='flex flex-col gap-y-8'>
            {
                data.map((d) => (
                    <div key={d.name}>
                        <span className='text-sm text-muted-foreground'>{d.name}</span>
                        {
                            d.items.map((ds) => (
                                <span
                                    key={ds.name}
                                    className="
                                    relative flex gap-x-2 p-2 rounded-lg group
                                    hover:bg-secondary cursor-pointer
                                    "
                                >
                                    <span
                                        className="
                                    absolute left-0 top-2.5 w-0 bg-primary
                                    transition-all duration-300
                                    group-hover:w-1 rounded-sm h-1/2
                                    "
                                    />
                                    <span className='flex items-center gap-x-1 justify-center'>
                                        {ds.isCollapsible ? (
                                            <ChevronRight className="w-4 h-4 text-muted group-hover:text-secondary-foreground " />
                                        ) : <span className='w-4 h-4' />}
                                        <ds.icon className="w-5 h-5" />
                                        {ds.name}
                                    </span>
                              
                                </span>

                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default NavMain