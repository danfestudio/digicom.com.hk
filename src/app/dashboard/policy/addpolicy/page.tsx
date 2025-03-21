'use client'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import axios from '../../../../axios/axios'
import { toast } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import Title from '@/app/components/Title'
import { ArrowLeft } from 'lucide-react'
import SelectFile from '@/app/admin_components/media/SelectFile'

const DynamicContentEditor = dynamic(() => import('../../../admin_components/content_editor/ContentEditor'), {
    ssr: false,
})

function AddBlog() {

    interface MyFormValues {
        description: string
    }

    const router = useRouter()
    const [contentData, setContentData] = useState()

    const handleModelChange = (data: any) => {
        setContentData(data)
    }

    const addBlogDetail = async (values: any) => {
        try {
            values.content = contentData
            let result = await axios.post('/policy', values)
            if (result.data.success) {
                toast.success('Policy Added Successfully.')
                router.replace('/dashboard/policy')
            } else toast.error('Failed')
        } catch (ERR) {
            toast.error('ERR')
            console.log(ERR)
        }
    }


    return (
        <div className='container mx-auto'>
            <button
                className='flex items-center gap-2'
                onClick={() => {
                    router.back()
                }}
            >
                <ArrowLeft /> Go Back
            </button>

            <div className='mt-4 p-8  mx-auto border rounded  bg-white'>
                <div className='mb-5'>
                    <Title title='Add Policy' />
                </div>

                <Formik
                    initialValues={{
                        content: ""
                    }}
                    onSubmit={(values, actions) => {
                        addBlogDetail(values)
                    }}
                >
                    {props => (
                        <Form>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>

                                <div className='col-span-full'>
                                    <span className='font-semibold'>Policy Details</span>
                                    <div className='mt-2'>
                                        <DynamicContentEditor allowPaste={true} model={contentData} handleModelChange={handleModelChange} />
                                    </div>
                                </div>
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
    )
}

export default AddBlog