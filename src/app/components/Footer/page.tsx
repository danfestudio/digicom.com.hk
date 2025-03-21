"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import HorizontalDivider from '../Divider/HorizontalDivider'
import { ArrowRight, ChevronRight, Facebook, Globe, Instagram, LinkedinIcon, Mail, MapPin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import axios from '../../../axios/axios'
import toast from 'react-hot-toast'

function Page() {

    const [email, setEmail] = useState('')
    const submitRef = useRef<any>(null)

    const addContact = async () => {
        try {
            let result = await axios.post('/stay-in-touch', {
                email: email
            })
            if (result.data.success) {
                toast.success('Thankyou for reaching out')
                setEmail("")
            } else toast.error("Failed")
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        if (submitRef.current !== null) {
            // Now TypeScript knows that submitRef.current is not null
            // console.log(submitRef.current);Featured Products
        }
    }, []);

    return (
        <div id='footer' className='bg-black text-white  '>
            <div className='container mx-auto w-full md:py-12 p-10 pt-16 relative' >
                <div className='flex flex-col gap-3 col-span-full lg:col-span-1 mb-2'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-5'>
                            <Image src={'/logo.png'} priority height={40} width={150} alt='Digicom Logo' />
                            {/* <h1 className='text-sm'>Digicom Futuristics Technologies Limited</h1> */}
                        </div>
                        <div className='flex  items-center gap-5'>
                            <Link href={'https://www.facebook.com/godigicom/'} target='blanck' className='border border-white rounded-full p-1.5' title='Facebook'>
                                <Facebook size={14} />
                            </Link>
                            <Link href={'https://www.youtube.com/@digicomnepal7530/featured'} target='blanck' className='border border-white rounded-full p-1.5' title='Youtube'>
                                <Youtube size={14} />
                            </Link>
                            <Link href={'https://www.instagram.com'} target='blanck' className='border border-white rounded-full p-1.5' title='Instagram'>
                                <Instagram size={14} />
                            </Link>
                            {/* <Link href={'https://www.instagram.com'} target='blanck' className='border border-white rounded-full p-1.5' title='Twitter'>
                                <LinkedinIcon />
                            </Link> */}
                        </div>
                    </div>
                    <div>
                        <HorizontalDivider opacity={'30'} color='white' />
                        {/* <h1 className='text-xs'>© 2024 Digicom . Property All Rights Reserved</h1> */}
                    </div>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-1 text-sm mx-auto'>
                    <div className='grid h-full'>
                        <h2 className='mb-4 font-semibold'>Support</h2>
                        <div className='flex flex-col gap-2 text-gray-500 font-light'>
                            <Link href={'/faqs'}>Help & FAQ</Link>
                            <Link href={'/userguides'}>User Guides</Link>
                            <Link href={'/warranty'}>Warranty</Link>
                        </div>
                    </div>

                    <div className='grid h-full'>
                        <h2 className='mb-4 font-semibold'>About Digicom</h2>
                        <div className='flex flex-col gap-2 text-gray-500 font-light'>
                            <Link href={'/about#history'}>History</Link>
                            <Link href={'/about#overview'}>Overview</Link>
                            <Link href={'/investor-inquiry'}>Investor Relations</Link>
                        </div>
                    </div>
                    <div className=' h-full'>
                        <h2 className='mb-4 font-semibold'>Contact</h2>
                        <div className='flex flex-col gap-2 text-gray-500 font-light'>
                            <Link href={'/customersupport'}>Contact Us</Link>
                            <Link href={'/customersupport'}>Customer Center</Link>
                        </div>
                    </div>

                    <div />

                    <div className='flex flex-col items-left gap-5'>
                        <span>Stay in Touch</span>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            addContact()
                        }} className='relative'>
                            {submitRef.current !== null &&
                                <span className='absolute top-1/2 transform -translate-y-1/2 right-2 ' onClick={() => {
                                    if (email) {
                                        submitRef.current.click()
                                    }
                                }}><ChevronRight /></span>
                            }
                            <input type='email' value={email} className='px-4 py-2 text-sm rounded-lg w-full border-white border !bg-black text-white' placeholder='Enter email id' onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                            <input type="submit" ref={submitRef} className='hidden'></input>
                        </form>
                    </div>

                </div>
            </div>
            <div className='bg-[#191919] text-xs'>
                <div className='container px-10 py-4 mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-10' >
                    <div className='flex flex-wrap gap-10 '>
                        <div className='flex gap-3 items-center'>
                            <Globe color='#3CC303' />
                            International, English
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Link href={'/policies'}>Privacy & Legal</Link>
                            {/* |
                            <Link href={'/policies'}>Sitemap</Link> */}
                        </div>
                    </div>
                    <div className='text-[#929292] font-semibold'>
                        © DIGICOM FUTURISTIC TECHNOLOGIES  2024
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page