'use client'
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/navigation'
import axios from '../../../../axios/axios'
import { toast } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import Title from '@/app/components/Title'
import { useAppSelector } from '@/redux/store'

const DynamicContentEditor = dynamic(() => import('../../../admin_components/content_editor/ContentEditor'), {
    ssr: false,
})

function EditPolicy() {

    let selectedPolicy = useAppSelector((state) => state.policySlice.value)

    const router = useRouter()
    const [contentData, setContentData] = useState(selectedPolicy?.content)

    const handleModelChange = (data: any) => {
        setContentData(data)
    }

    const editPolicyDetail = async (values: any, actions: any) => {
        try {
            values.content = contentData

            let result = await axios.put('/policy/' + selectedPolicy?._id, values)
            if (result.data.success) {
                toast.success('Policy Details Edited Successfully.')
                router.replace('/dashboard/policy')
            } else toast.error('Failed')
        } catch (ERR) {
            toast.error('ERR')
            console.log(ERR)
        }
    }

    return (
        <div className='container mx-auto'>

            {/* <button
                className='flex items-center gap-2'
                onClick={() => {
                    router.back()
                }}
            >
                <ArrowLeft /> Go Back
            </button> */}

            <div className='mt-4 p-8  mx-auto border rounded  bg-white'>
                <div className='mb-5'>
                    <Title title='Policy' />
                </div>

                <Formik
                    initialValues={{}}
                    onSubmit={(values, actions) => {
                        editPolicyDetail(values, actions)
                    }}
                >
                    {props => (
                        <Form>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>

                                <div className='col-span-full'>
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

export default EditPolicy