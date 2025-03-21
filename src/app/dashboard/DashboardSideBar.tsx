"use client";
import React, { useEffect, useState } from "react";
import { LayoutDashboard, Newspaper, User, RectangleHorizontal, Image, Users, Boxes, ShoppingBag, HelpCircle, ShieldCheck, Contact, File, CircleDollarSign } from 'lucide-react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { closeSidebar, openSidebar } from "@/redux/features/sidebarSlice";

function DashboardSidebar() {
    const pathname = usePathname()
    const dispatch = useDispatch()

    const show = useAppSelector((state) => state.sidebarSlice.value)

    const sidebarLinks = [
        // {
        //     link: "/dashboard",
        //     name: "Dashboard",
        //     icon: LayoutDashboard,
        // },
        // {
        //     id: "admins",
        //     link: "/dashboard/admins",
        //     name: "Admins",
        //     icon: Users,
        // },
        {
            id: "category",
            link: "/dashboard/category",
            name: "Category",
            icon: Boxes,
        },
        {
            id: "product",
            link: "/dashboard/product",
            name: "Products",
            icon: ShoppingBag,
        },
        {
            id: "banner",
            link: "/dashboard/banner",
            name: "Banner",
            icon: RectangleHorizontal,
        },
        // {
        //     id: "pagebuilder",
        //     link: "/dashboard/pagebuilder",
        //     name: "Page Builder",
        //     icon: RectangleHorizontal,
        // },
        {
            id: "blog",
            link: "/dashboard/blog",
            name: "blog",
            icon: Newspaper,
        },
        // {
        //     id: "testimonials",
        //     link: "/dashboard/testimonials",
        //     name: "testimonials",
        //     icon: MessageSquarePlus,
        // },
        // {
        //     id: "contacts",
        //     link: "/dashboard/contacts",
        //     name: "Contacts",
        //     icon: Phone,
        // },
        {
            id: "media",
            link: "/dashboard/media",
            name: "Media",
            icon: Image,
        },
        {
            id: "warranty",
            link: "/dashboard/warranty",
            name: "warranty",
            icon: ShieldCheck,
        },
        {
            id: "support",
            link: "/dashboard/support",
            name: "support",
            icon: ShieldCheck,
        },
        {
            id: "profile",
            link: "/dashboard/profile",
            name: "Profile Details",
            icon: User,
        },
        // {
        //     id: "preferences",
        //     link: "/dashboard/preferences",
        //     name: "preferences",
        //     icon: Settings,
        // },
        {
            id: "faqs",
            link: "/dashboard/faqs",
            name: "FAQs",
            icon: HelpCircle,
        },
        {
            id: "investor-enquires",
            link: "/dashboard/investor-enquires",
            name: "Investor Enquires",
            icon: CircleDollarSign,
        },
        {
            id: "contact",
            link: "/dashboard/contacts",
            name: "Contacts",
            icon: Contact,
        },
        {
            id: "policy",
            link: "/dashboard/policy",
            name: "policy",
            icon: File,
        },
    ]

    useEffect(() => {
        dispatch(closeSidebar())
    }, [])

    return (
        <>
            {/* Sidebar starts */}
            <div className={`${(pathname.includes('pagebuilder') || pathname.includes('addbanner') || pathname.includes('editbanner')) ? "!hidden " : " "} z-20 bg-white  w-64 min-h-screen overflow-auto h-screen -mt-16 border-r hidden lg:block  sticky top-0`}>
                <div className="h-16 z-20 w-full flex items-center px-8 bg-white font-bold text-center sticky top-0 mx-auto">
                    DIGICOM
                </div>
                <ul aria-orientation="vertical" className="p-6 ">
                    <Link href={'/dashboard'} className={`pl-6 flex items-center rounded cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-4 hover:font-bold duration-100 ease-in-out  transform outline-none    focus:outline-none
                        ${pathname === '/dashboard'
                            ?
                            "focus:text-gray-200 bg-blue-600 text-white hover:text-gray-200 font-bold tracking-wide "
                            :
                            "text-gray-600 hover:bg-gray-100"} 
                                    `}>
                        <div>
                            <LayoutDashboard height={18} strokeWidth={2} />
                        </div>
                        <span className="ml-2">Dashboard</span>
                    </Link>

                    {
                        sidebarLinks.map((value: any, index: number) => (

                            <li key={index} >
                                <Link href={value?.link} className={`flex  items-center h-full w-full pl-6 rounded cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-4 hover:font-bold duration-100 ease-in-out  transform focus:outline-none
                             ${pathname.includes(value?.id) ? "  bg-blue-600 text-white hover:text-gray-200 font-bold tracking-wide" : "text-gray-600 hover:bg-gray-100"} `}>
                                    <div>
                                        <value.icon height={18} strokeWidth={2} />
                                    </div>
                                    <span className="ml-2 capitalize">{value?.name}</span>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div >
            {/*Mobile responsive sidebar*/}
            < div
                className={show ? "w-full min-h-screen top-0 fixed z-40 transform  translate-x-0 " : "w-full h-full absolute z-0 transform -translate-x-full"}
                id="mobile-nav" >
                <div className={`${(pathname.includes('pagebuilder') || pathname.includes('addbanner') || pathname.includes('editbanner')) ? " " : "lg:hidden "} bg-gray-800 opacity-50 absolute h-full w-full `} onClick={() =>
                    dispatch(closeSidebar())
                    // setShow(!show)
                }
                />
                <div className={`${(pathname.includes('pagebuilder') || pathname.includes('addbanner') || pathname.includes('editbanner')) ? " " : "lg:hidden "} fixed h-screen top-0 overflow-auto z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100  transition duration-150 ease-in-out`}>
                    <div className="flex flex-col h-full w-full">
                        <div className="flex items-center justify-between px-8">
                            <div className="h-16 w-full flex items-center font-semibold">
                                DIGICOM
                            </div>
                            <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => dispatch(closeSidebar())}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-x"
                                    width={20} height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                        </div>
                        <ul aria-orientation="vertical" className="px-6 overflow-auto">

                            <Link onClick={() => {
                                dispatch(closeSidebar())
                            }} href={'/dashboard'} className={`pl-6 flex items-center rounded cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-4 hover:font-bold duration-100 ease-in-out  transform outline-none    focus:outline-none
                        ${pathname === '/dashboard'
                                    ?
                                    "focus:text-gray-200 bg-blue-600 text-white hover:text-gray-200 font-bold tracking-wide "
                                    :
                                    "text-gray-600 hover:bg-gray-100"} 
                                    `}>
                                <div>
                                    <LayoutDashboard height={18} strokeWidth={2} />
                                </div>
                                <span className="ml-2">Dashboard</span>
                            </Link>

                            {
                                sidebarLinks.map((value: any, index: number) => (

                                    <li key={index} >
                                        <Link onClick={() => {
                                            dispatch(closeSidebar())
                                        }} href={value?.link} className={`flex  items-center h-full w-full pl-6 rounded cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-4 hover:font-bold duration-100 ease-in-out  transform focus:outline-none
                             ${pathname.includes(value?.id) ? "  bg-blue-600 text-white hover:text-gray-200 font-bold tracking-wide" : "text-gray-600 hover:bg-gray-100"} `}>
                                            <div>
                                                <value.icon height={18} strokeWidth={2} />
                                            </div>
                                            <span className="ml-2 capitalize">{value?.name}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default DashboardSidebar