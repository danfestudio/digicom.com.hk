"use client";
import { useAppSelector } from '@/redux/store';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '@/redux/features/loaderSlice';
import dynamic from 'next/dynamic';
import Page from './login/page';
import LoadingScreen from './components/Loading/LoadingScreen';
import DashboardHeader from './dashboard/DashboardHeader';
import DashboardSidebar from './dashboard/DashboardSideBar';

function RouteGuard({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const router = useRouter();
    const user = useAppSelector((state) => state.authSlice.value);
    let token = useAppSelector((state) => state.authSlice.token);

    // useEffect(() => {
    //     const consoleToken = async () => {
    //         token = await localStorage.getItem('_kh_token_')
    //     }
    //     consoleToken()
    // }, [])

    // Move the hooks here
    const [isLoading, setIsLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        dispatch(startLoading());

        const authCheck = () => {
            if (token) {
                setAuthorized(true);
                setIsLoading(false); // Set loading state to false when authorized
                dispatch(stopLoading());
            } else {
                setAuthorized(false);
                setIsLoading(false); // Set loading state to false when not authorized
                dispatch(stopLoading());
                // Redirect logic if not authorized
                // router.replace('/login');
                // window.location.replace('/login');
            }
        };

        setTimeout(() => {
            authCheck();
        }, 400)
    }, [dispatch, token, user.role]);


    return (
        <>
            {!isLoading ? (
                <>
                    {!authorized ? (
                        <Page />
                    ) : (
                        <>
                            <DashboardHeader />
                            <main className="flex items-start relative w-full bg-gray-50">
                                <DashboardSidebar />
                                <div
                                    className={`${pathname.includes('login') ? 'p-0' : 'p-8'
                                        } ${(pathname.includes('pagebuilder') || pathname.includes('addbanner') || pathname.includes('editbanner')) ? '!p-1' : 'mx-auto container overflow-auto'
                                        }  flex-1`}
                                >
                                    {children}
                                </div>
                            </main>
                        </>
                    )}
                </>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}

export default dynamic(() => Promise.resolve(RouteGuard), { ssr: false });
