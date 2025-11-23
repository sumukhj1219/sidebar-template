"use client"
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PiChartPie, PiShoppingBagOpen, PiFolder, PiBookOpen, PiUser, PiIdentificationCard, PiUsersThreeLight } from "react-icons/pi";
import { motion, AnimatePresence } from "motion/react";
import { CgWebsite } from "react-icons/cg";
import { FiMessageCircle } from "react-icons/fi";
import { useSidebar } from '../sidebar-context';
import Link from 'next/link';

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
                items: [
                    {
                        name:"Orders",
                        href:"/orders"
                    }
                ]
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
            },
            {
                name: "Account",
                icon: PiIdentificationCard,
                href: "#",
                isCollapsible: true,
                items: []
            },
            {
                name: "Corporate",
                icon: PiUsersThreeLight,
                href: "#",
                isCollapsible: true,
                items: []
            },
            {
                name: "Blog",
                icon: CgWebsite,
                href: "#",
                isCollapsible: true,
                items: []
            },
            {
                name: "Social",
                icon: FiMessageCircle,
                href: "#",
                isCollapsible: true,
                items: []
            }
        ],

    }
]


const NavMain = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);
    const { leftOpen } = useSidebar();

    const toggle = (name: string) => {
        setOpenItem((prev) => (prev === name ? null : name));
    };

    return (
        <div className="flex flex-col gap-y-8">
            {data.map((d) => (
                <div key={d.name}>
                    {leftOpen && (
                        <span className="text-sm text-muted-foreground">{d.name}</span>
                    )}

                    {d.items.map((ds) => {
                        const isOpen = openItem === ds.name;

                        return (
                            <div key={ds.name}>
                                <div
                                    onClick={() => ds.items.length > 0 && toggle(ds.name)}
                                    className={`
                                        relative flex gap-x-2 p-2 rounded-lg group
                                        hover:bg-secondary cursor-pointer select-none
                                        ${!leftOpen && "items-center justify-center mx-auto transition-all duration-300 p-2.5"}
                                    `}
                                >
                                    {leftOpen && (
                                        <span
                                            className="
                                            absolute left-0 top-2 w-0 bg-primary
                                            transition-all duration-300
                                            group-hover:w-1 rounded-sm h-1/2
                                            "
                                        />
                                    )}

                                    <span className="flex items-center text-sm gap-x-2">

                                        {ds.isCollapsible && leftOpen ? (
                                            
                                            <motion.div
                                                animate={{ rotate: isOpen ? 90 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronRight className="w-4 h-4 text-sm text-muted group-hover:text-secondary-foreground" />
                                            </motion.div>
                                        )
                                        :
                                        (leftOpen && <span className='w-4 h-4' />)
                                    }

                                        <ds.icon className="w-5 h-5" />

                                        {leftOpen && ds.name}
                                    </span>
                                </div>

                                <AnimatePresence initial={false}>
                                    {leftOpen && isOpen && ds.items.length > 0 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="ml-8 mt-1 flex flex-col gap-y-1">
                                                {ds.items.map((sub) => (
                                                    <Link
                                                    href={sub.href}
                                                        key={sub.name}
                                                        className="
                                                            flex items-center gap-x-2 p-2 pl-3
                                                            text-muted-foreground hover:text-foreground
                                                            rounded-md text-sm cursor-pointer hover:bg-secondary
                                                        "
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};


export default NavMain;

