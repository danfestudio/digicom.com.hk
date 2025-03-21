"use client";
import React from 'react'
import IndexPage from './dashboard/page'
import { usePathname, useRouter } from 'next/navigation'
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from 'react-hot-toast';
import RouteGuard from './RouteGuard';
import Navbar from './components/Navbar';
import Page from './components/Footer/page';

function LayoutManager({ children }: { children: React.ReactNode }) {
    const loggedin = true
    const router = useRouter()
    const pathname = usePathname()

    return (
        <>
            <ReduxProvider>
                <Toaster />
                {
                    pathname.includes('dashboard') ?
                        <RouteGuard>
                            {/* <IndexPage> */}
                            {children}
                            {/* </IndexPage> */}
                        </RouteGuard>
                        :
                        <div className='flex flex-col min-h-screen'>
                            <Navbar />
                            <div className='flex-1'>
                                {children}
                            </div>
                            <Page />
                        </div>
                }
            </ReduxProvider>

        </>
    )
}

export default LayoutManager