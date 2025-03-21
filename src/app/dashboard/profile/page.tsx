"use client"

import Title from '@/app/components/Title'
import axios from '../../../axios/axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Field, Form, Formik } from 'formik'

function Profile() {

    interface MyFormValues {
        firstname: string | undefined,
        lastname: string | undefined,
        email: string | undefined,
        contact: string | undefined,
        // whatsapp: string | undefined,
        address: string | undefined,
    }

    const [userDetails, setUserDetails] = useState<MyFormValues>()

    const getUserDetails = async () => {
        try {
            let result = await axios.get('/user/get-profile/')
            setUserDetails(result.data.data)
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    const updateUserDetails = async (values: MyFormValues) => {
        try {
            let result = await axios.put('/user/update-profile', values)

            if (result.data.success) {
                toast.success('Details Updated')
                getUserDetails()
            }
        } catch (ERR) {
            console.log(ERR)
            toast.error("failed")
        }
    }

    const initialValues: MyFormValues = {
        firstname: userDetails?.firstname,
        lastname: userDetails?.lastname,
        email: userDetails?.email,
        contact: userDetails?.contact,
        // whatsapp: userDetails?.whatsapp,
        address: userDetails?.address,
    }

    return (
        <div className='p-8 rounded shadow bg-white'>
            <Title title='Profile Details'></Title>
            <div className='mt-5'>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={(values: MyFormValues) => {
                        updateUserDetails(values)
                    }}
                >
                    {props => (
                        <Form>
                            <h2 className='font-bold mb-3 text-gray-400'>Personal Information</h2>

                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div className=''>
                                    <span className='font-semibold'>First Name</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.firstname} type="text" className='inputfield' name='firstname' id='firstname' placeholder='First Name' />
                                    </div>
                                </div>
                                <div className=''>
                                    <span className='font-semibold'>Last Name</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.lastname} type="text" className='inputfield' name='lastname' id='lastname' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className=''>
                                    <span className='font-semibold'>Email</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.email} type="email" className='inputfield' name='email' id='email' placeholder='Email' />
                                    </div>
                                </div>
                                <div className=''>
                                    <span className='font-semibold'>Address</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.address} type="string" className='inputfield' name='address' id='address' placeholder='Address' />
                                    </div>
                                </div>
                                <div className=''>
                                    <span className='font-semibold'>Contact</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.contact} type="number" className='inputfield' name='contact' id='contact' placeholder='Contact' />
                                    </div>
                                </div>
                                {/* <div className=''>
                                    <span className='font-semibold'>Whatsapp</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.whatsapp} type="number" className='inputfield' name='whatsapp' id='whatsapp' placeholder='Whatsapp' />
                                    </div>
                                </div> */}
                            </div>
                            <hr className='mt-5' />
                            {/* <div className='mt-3 '>
                                <h2 className='font-bold text-gray-400'>Social Media Links</h2>

                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-3'>
                                    <div className=''>
                                        <span className='font-semibold'>Facebook</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.facebook} type="text" className='inputfield' name='facebook' id='facebook' placeholder='Facebook' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Instagram</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.instagram} type="text" className='inputfield' name='instagram' id='instagram' placeholder='Instagram' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Tiktok</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.tiktok} type="text" className='inputfield' name='tiktok' id='tiktok' placeholder='Tiktok' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Linkedin</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.linkedin} type="text" className='inputfield' name='linkedin' id='linkedin' placeholder='Linkedin' />
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className='justify-end flex'>
                                <button type='submit' className='btn-primary mt-4'>
                                    Confirm
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default Profile