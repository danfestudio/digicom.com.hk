"use client";
import { removeToken } from "@/redux/features/authSlice";
import { closeSidebar, openSidebar } from "@/redux/features/sidebarSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

function DashboardHeader() {
    // const [show, setShow] = useState(false);
    const dispatch = useDispatch<AppDispatch>()
    const pathname = usePathname()
    const show = useAppSelector((state) => state.sidebarSlice.value)

    useEffect(() => {
        dispatch(closeSidebar())
    }, [])

    const logout = () => {
        try {
            typeof window !== 'undefined' && localStorage.removeItem('_kh_token_')
            typeof window !== 'undefined' && window.location.replace('/login?key=ap-7879')
            dispatch(removeToken())
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to Logout')
        }
    }

    return (
        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow  z-10 sticky top-0">
            <div className="hidden lg:flex w-full pr-6">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">

                    <div className={`text-gray-600 mr-8 visible  relative ${(pathname.includes('pagebuilder') || pathname.includes('addbanner') || pathname.includes('editbanner')) ? "" : "lg:hidden"}`} onClick={() =>
                        dispatch(openSidebar())
                        // setShow(!show)
                    }
                    >
                        {show ? (
                            " "
                        ) : (
                            <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={4} y1={8} x2={20} y2={8} />
                                <line x1={4} y1={16} x2={20} y2={16} />
                            </svg>
                        )}
                    </div>


                    {/* <div className="relative w-full">
          <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={10} cy={10} r={7} />
              <line x1={21} y1={21} x2={15} y2={15} />
            </svg>
          </div>
          <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
        </div> */}
                </div>
                <div className="w-1/2 hidden lg:flex">
                    <div className="w-full flex items-center pl-8 justify-end">
                        <button onClick={() => {
                            logout()
                        }} className="text-sm">
                            <LogOut />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`text-gray-600 mr-8 visible lg:hidden relative`} onClick={() =>
                dispatch(openSidebar())
                // setShow(!show)
            }
            >
                {show ? (
                    " "
                ) : (
                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={4} y1={8} x2={20} y2={8} />
                        <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                )}
            </div>
        </nav >
    )
}

export default DashboardHeader