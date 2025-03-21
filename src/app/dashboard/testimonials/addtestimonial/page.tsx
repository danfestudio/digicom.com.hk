'use client'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import axios from '../../../../axios/axios'
import { toast } from 'react-hot-toast'
import CreatableSelect from 'react-select/creatable';
import dayjs from 'dayjs'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Title from '@/app/components/Title'
import { ArrowLeft } from 'lucide-react'
// import Skeleton from '@/components/SkeletonLoader/Skeleton'

// const DynamicContentEditor = dynamic(() => import('../../../components/content_editor/ContentEditor'), {
//     ssr: false,
// })

function AddTestimonials() {
    const [image, setImage] = useState<any>()
    const uploadRef = useRef<any>(null)

    interface MyFormValues {
        author: string
        content: string
        designation: string
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('First name is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must contain a lowercase letter')
            .matches(/[A-Z]/, 'Password must contain an uppercase letter')
            .matches(/[0-9]/, 'Password must contain a number')
            .matches(/[$@$!%*?&]/, 'Password must contain a special character')
            .test('has-missing-requirements', 'Password is missing a requirement', function (value) {
                const hasLowercase = /[a-z]/.test(value)
                const hasUppercase = /[A-Z]/.test(value)
                const hasNumber = /[0-9]/.test(value)
                const hasCharacters = /[$@$!%*?&]/.test(value)

                return hasLowercase && hasUppercase && hasNumber && hasCharacters
            }),
    })

    const initialValues: MyFormValues = {
        author: '',
        content: '',
        designation: '',
    }

    const router = useRouter()
    const [contentData, setContentData] = useState()

    const addTestimonialDetail = async (values: any, actions: any) => {
        try {
            const formData = new FormData()
            // values.content = contentData
            // values.image = image

            for (let value in values) {
                if (typeof values[value] === 'object') {
                    formData.append(value, JSON.stringify(values[value]))
                } else {
                    formData.append(value, values[value])
                }
            }

            if (image) {
                formData.append('image', image)
            }
            if (contentData) {
                formData.append('content', contentData)
            }

            let result = await axios.post('testimonial/', formData)
            if (result.data.success) {
                toast.success('Testimonials Added Successfully.')
                router.replace('/dashboard/testimonials')
            } else toast.error('Failed')
        } catch (ERR) {
            toast.error('ERR')
            console.log(ERR)
        }
    }

    const handleImage = (value: any) => {
        if (value) {
            setImage(value)
        }
    }

    const handleButtonClick = () => {
        // Access and interact with the DOM element
        if (uploadRef.current) {
            uploadRef.current.click()
        }
    }

    return (
        <>
            <div className='container mx-auto'>
                <button
                    className='flex items-center gap-2'
                    onClick={() => {
                        router.back()
                    }}
                >
                    <ArrowLeft /> Go Back
                </button>
                <div className='mt-4 p-8  mx-auto  rounded  bg-white shadow'>
                    <div className='mb-5'>
                        <Title title='Add Testimonial' />
                        {/* <label className='font-semibold text-xl'>Add Testimonial</label> */}
                    </div>

                    <Formik
                        // enableReinitialize
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            addTestimonialDetail(values, actions)
                        }}
                    >
                        {props => (
                            <Form>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                    <div className=''>
                                        <span className='font-semibold'>Name</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.author} className='inputfield' name='author' id='author' placeholder='Name of the Person' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Designation</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.designation} className='inputfield' name='designation' id='designation' placeholder='Designation of the Person' />
                                        </div>
                                    </div>

                                    <div className='col-span-full'>
                                        <span className='font-semibold'>Testimonial</span>
                                        <div className='mt-2'>
                                            <Field
                                                as="textarea"
                                                required
                                                value={props.values.content}
                                                className='inputfield'
                                                name='content'
                                                id='content'
                                                placeholder='Description'
                                            />
                                        </div>
                                    </div>
                                    {/* <div className=''>
                                        <span className='font-semibold'>Registration Start Date</span>
                                        <div className='mt-2'>
                                            <Field
                                                required
                                                // min={dayjs().format('YYYY-MM-DDTHH:mm')}
                                                value={props.values.registration_startDate}
                                                className='inputfield'
                                                type='datetime-local'
                                                name='registration_startDate'
                                                id='registration_startDate'
                                            />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Registration End Date</span>
                                        <div className='mt-2'>
                                            <Field
                                                required
                                                min={props.values.registration_startDate}
                                                disabled={!props.values.registration_startDate}
                                                value={props.values.registration_endDate}
                                                className='inputfield'
                                                type='datetime-local'
                                                name='registration_endDate'
                                                id='registration_endDate'
                                                placeholder='Testimonial Title'
                                            />
                                        </div>
                                    </div> */}

                                    {/* <div className=''>
                                        <span className='font-semibold'>Venue</span>
                                        <div className='mt-2'>
                                            <Field required className='inputfield' name='venue' id='venue' placeholder='Enter Venue' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Total Seats</span>
                                        <div className='mt-2'>
                                            <Field required type='number' className='inputfield' name='totalSeat' id='totalSeat' placeholder='Total Seats' />
                                        </div>
                                    </div> */}

                                    <div className=''>
                                        <span className='font-semibold'>Image</span>
                                        <div className='mt-2'>
                                            <input
                                                ref={uploadRef}
                                                type='file'
                                                accept="image/png, image/jpeg"
                                                onChange={(e: any) => handleImage(e.target.files[0])}
                                                className='inputfield hidden'
                                                name='image'
                                                id='image'
                                                placeholder='End Date'
                                            />
                                        </div>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                handleButtonClick()
                                            }}
                                            className='btn-dashed w-full h-20'
                                        >
                                            Upload
                                        </button>
                                        {image && (
                                            <div
                                                className='relative w-fit'
                                                style={{
                                                    height: '230px',
                                                }}
                                            >
                                                <Image fill={true} alt='currentimage' className='border !relative my-2 w-full h-full' src={URL.createObjectURL(image)} />

                                                <button
                                                    type='button'
                                                    onClick={() => {
                                                        setImage('')
                                                        uploadRef.current.value = ''
                                                    }}
                                                    className='absolute bottom-0 bg-red-400 w-full'>Remove</button>
                                            </div>
                                        )}
                                    </div>

                                    {/* <div className='col-span-full'>
                                        <span className='font-semibold'>Testimonial Details</span>
                                        <div className='mt-2'>
                                            <DynamicContentEditor allowPaste={true} model={contentData} handleModelChange={handleModelChange} />
                                        </div>
                                    </div> */}
                                </div>

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
        </>
    )
}

export default AddTestimonials
