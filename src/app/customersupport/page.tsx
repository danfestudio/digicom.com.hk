"use client";
import React, { useEffect, useState } from 'react'
import axios from '../../axios/axios'
import { useRouter } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';

function CustomerSupport() {

    const router = useRouter()

    const [countries, setCountries] = useState<any>([])
    const [selectedContinent, setSelectedContinent] = useState<any>('')
    const [continents, setContinents] = useState<any>([])

    const getAllSupport = async (continent: string) => {
        try {
            let result = await axios.get('support/', {
                params: {
                    limit: 999,
                    page: 1,
                    continent: continent
                }
            })
            if (result.data.success) {
                setCountries(result.data.data.data)
                setContinents(result.data.data.continents)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getAllSupport('')
    }, [])


    return (
        <div className='mx-auto  h-full '>
            <div className='text-center py-10'>
                <h2 className='font-semibold text-4xl'>Customer Support</h2>
            </div>
            <div className='bg-white !min-h-[400px] w-full h-full p-10'>
                <div className='mt-5 text-center'>
                    <h2 className='font-semibold text-xl'>Select Location</h2>
                </div>
                <div className='flex overflow-auto justify-between max-w-5xl mx-auto items-center my-5 divide-x-2'>
                    {
                        continents?.map((value: any) => (
                            <button key={value} onClick={() => {
                                getAllSupport(value)
                                setSelectedContinent(value)
                            }} className={`text-center w-full p-2 px-4 min-w-max text-xs sm:text-base ${selectedContinent === value ? "font-semibold" : "text-gray-500"}`}>{value}</button>
                        ))
                    }
                </div>
                {
                    selectedContinent &&
                    <div className='grid  xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto items-center my-5'>
                        {
                            countries?.map((value: any) => (
                                <div
                                    key={value.country_code}
                                    className={` w-full p-2  px-4 min-w-max   sm:text-base `}>
                                    <label className='font-semibold'>
                                        {value.country} ({value.country_code})
                                    </label>
                                    <div className='text-sm my-2 text-gray-600'>
                                        {value.support_time}
                                        <div className='flex gap-2 items-center mt-3'><Phone size={12} /> {value.phone}</div>
                                        <div className='flex gap-2 items-center mt-1'><Mail size={12} /> {value.email}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default CustomerSupport