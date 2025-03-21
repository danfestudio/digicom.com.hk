"use client";
import { Formik, Form, Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { Facebook, Instagram } from 'lucide-react'
import axios from '../../axios/axios'
import toast from 'react-hot-toast'
import Link from 'next/link';
import { useAppSelector } from '@/redux/store';

function Contact() {

    const initialValues = {
        fullname: "",
        email: "",
        message: "",
    }

    type userType = {
        whatsapp: "",
        contact: "",
        email: "",
    }

    const [userDetails, setUserDetails] = useState<userType | undefined>()
    const [socialMedia, setSocialMedia] = useState<any>()

    const socialData = useAppSelector(state => state.preferenceSlice.socialMedia)
    
    const addContact = async (values: any, action: any) => {
        try {
            let result = await axios.post('/contact', values)
            if (result.data.success) {
                action()
                toast.success('Thankyou for reaching out, Your Message Has Been Delivered')
            } else toast.error("Failed")
        } catch (ERR) {
            console.log(ERR)
        }
    }

    const getDetails = async () => {
        try {
            let result = await axios.get('user/get-profile')
            if (result.data.success) {
                setUserDetails(result.data.data)
            } else toast.error("Failed to get Contact information")
        } catch (ERR) {
            console.log(ERR)
        }
    }

    // const getSocialMedia = async () => {
    //     try {
    //         let result = await axios.get('preference')
    //         if (result.data.success) {
    //             setSocialMedia(result.data.data.socialMedia)
    //         } else toast.error("Failed to get Contact information")
    //     } catch (ERR) {
    //         console.log(ERR)
    //     }
    // }


    useEffect(() => {
        getDetails()
        setSocialMedia(socialData)

        // getSocialMedia()
    }, [])

    return (
        <div id='contact' className='relative min-h-screen flex items-center'>
            <div className='lg:flex max-w-7xl mx-auto items-start w-full'>
                <div className='grid order-last sm:grid-cols-2 grid-cols-1 w-[500px]:text-red-900 md:px-10 px-5 py-5 justify-center mt-10 gap-10 mx-auto flex-1 items-center'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-xl font-bold'>Email</label>
                        <label>{userDetails?.email}</label>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {/* <label className='text-xl font-bold'>Whatsapp</label>
                        <label>{userDetails?.whatsapp}</label> */}
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-xl font-bold'>Phone Number</label>
                        <label>{userDetails?.contact}</label>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {/* <label className='text-xl font-bold'>Follow Me</label>
                        <div className='flex gap-4 flex-wrap items-center'>
                            {
                                socialMedia?.map((value: any, index: number) => (
                                    <Link href={value.link} target='blanck' key={index}>
                                        <img className='h-6 w-6 object-contain' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.icon}`} />
                                    </Link>
                                ))
                            }
                        </div> */}
                    </div>
                </div>

                <div className=' p-5  lg:w-1/2 w-full rounded'>
                    <div className=' lg:w-4/5 bg-gray-900 text-gray-200 p-10'>
                        <span className='md:text-3xl text-xl font-bold '>Contact Us</span>
                        <p className='md:text-xl text-base font-bold text-gray-400'>Looking forward to hear from you.</p>
                        <div className='mt-5'>
                            <Formik initialValues={initialValues}
                                onSubmit={(values, { resetForm }) => {
                                    addContact(values, resetForm)
                                }}
                            >
                                {(props) => (
                                    <Form>
                                        <div className='bg-gray-800 flex flex-col p-4 mb-5'>
                                            <label className='text-xs font-bold'>Full Name</label>
                                            <Field
                                                required
                                                className=" bg-transparent opacity-60 border-none focus:outline-none mt-2"
                                                name='fullname'
                                                id='fullname'
                                                placeholder='Your Full Name'
                                            />
                                        </div>
                                        <div className='bg-gray-800 flex flex-col p-4 mb-5'>
                                            <label className='text-xs font-bold'>Email</label>
                                            <Field
                                                required
                                                className=" bg-transparent opacity-60 border-none focus:outline-none mt-2"
                                                name='email'
                                                id='email'
                                                placeholder='Your Email'
                                            />
                                        </div>
                                        <div className='bg-gray-800 flex flex-col p-4 mb-5'>
                                            <label className='text-xs font-bold'>Message</label>
                                            <Field
                                                as="textarea"
                                                rows={5}
                                                required
                                                className=" bg-transparent opacity-60 border-none focus:outline-none mt-2"
                                                name='message'
                                                id='message'
                                                placeholder='Write Your Message Here'
                                            />
                                        </div>
                                        <button type='submit' className='bg-white text-black w-full p-3 font-bold text-sm md:text-base'>
                                            Contact
                                        </button>
                                    </Form>
                                )
                                }
                            </Formik>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-black h-1/2 w-full -z-10 absolute bottom-0' >
            </div>

        </div>
    )
}

export default Contact