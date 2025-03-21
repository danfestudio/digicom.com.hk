"use client";
import React, { useEffect, useState } from 'react'
import axios from '../../axios/axios'
import { useRouter } from 'next/navigation';

function Warranty() {

    const router = useRouter()

    const [countries, setCountries] = useState<any>([])
    const [selectedContinent, setSelectedContinent] = useState<any>('')
    const [continents, setContinents] = useState<any>([])

    const getAllWarranty = async (continent: string) => {
        try {
            let result = await axios.get('warranty/', {
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
        getAllWarranty('')
    }, [])

    return (
        <div className='mx-auto  h-full '>
            <div className='text-center py-10'>
                <h2 className='font-semibold text-4xl'>Warranty</h2>
            </div>
            <div className='bg-white !min-h-[400px] w-full h-full p-10'>
                <div className='mt-5 text-center'>
                    <h2 className='font-semibold text-xl'>Select Location</h2>
                </div>
                <div className='flex overflow-auto justify-between max-w-5xl mx-auto items-center my-5 divide-x-2'>
                    {
                        continents?.map((value: any) => (
                            <button key={value} onClick={() => {
                                getAllWarranty(value)
                                setSelectedContinent(value)
                            }} className={`text-center w-full p-2 px-4 min-w-max text-xs sm:text-base ${selectedContinent === value ? "font-semibold" : "text-gray-500"}`}>{value}</button>
                        ))
                    }
                </div>
                {
                    selectedContinent &&
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-5xl mx-auto items-center my-5'>
                        {
                            countries?.map((value: any) => (
                                <button key={value.country_code} onClick={() => {
                                    router.push('/warranty/' + String(value.country_code).toLowerCase())
                                    // getAllWarranty(value.name)
                                    // setSelectedContinent(value.name)
                                }} className={`text-center w-full p-2 underline hover:no-underline px-4 min-w-max text-xs border sm:text-base font-semibold`}>{value.country}</button>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Warranty