"use client";
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import axios from '../../axios/axios'
import { FileDown } from 'lucide-react';
import Link from 'next/link';
import { debounce } from 'lodash';
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import toast from 'react-hot-toast';

function UserGuides() {

    const dispatch = useDispatch()
    const [userGuideList, setUserGuideList] = useState<any>([])
    const [keyword, setKeyword] = useState<string>('')

    const isLoading = useAppSelector((state) => state.loaderSlice.value)

    const getUserGuides = async () => {
        try {
            dispatch(startSkeletonLoad())
            let result = await axios.get('product/user_guide/', {
                params: {
                    search: keyword
                }
            })

            if (result.data.success) {
                setUserGuideList(result.data.data.data)
                dispatch(stopSkeletonLoad())
            }
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed To Get User Guides');

            dispatch(stopSkeletonLoad())
        }
    }

    useEffect(() => {
        getUserGuides()
    }, [keyword])

    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    console.log('userGuideList', userGuideList)

    return (
        <div className='my-5 mx-auto container card'>
            <div className='text-center'>
                <Title title='User Guides' />
            </div>

            <div className='mt-10'>
                <input type='search' onChange={(e) => {
                    handleInputChangeDebounced(e.target.value)
                }} placeholder='Search Product' className='inputfield focus:outline-none ' />
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-2  border-collapse '>
                {
                    userGuideList?.map((value: any, index: number) => (
                        <Link key={value?._id} target='blanck' href={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.user_guide?.path}`} download className='border rounded-lg hover:shadow flex items-center border-collapse group cursor-pointer justify-between p-4 gap-4'>
                            <div className='flex flex-col'>
                                <label className='font-bold text-xl capitalize group-hover:underline underline-offset-2'>{value?.product_name}</label>
                                <label className='opacity-50 text-sm font-semibold'>{value.category?.name}</label>
                            </div>
                            <div className=' transition-all transform duration-300 ease-in-out'>
                                <FileDown />
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default UserGuides