'use client'
import React, { useMemo, useState, useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import axios from '../../../../axios/axios'
import { toast } from 'react-hot-toast'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Title from '@/app/components/Title'
import { ArrowLeft } from 'lucide-react'
import { useAppSelector } from '@/redux/store'
import SelectFile from '@/app/admin_components/media/SelectFile'

const DynamicContentEditor = dynamic(() => import('../../../admin_components/content_editor/ContentEditor'), {
    ssr: false,
})

function EditBlog() {
    const [openFile, setOpenFile] = useState<boolean>(false)

    const selectedBlog = useAppSelector((state: any) => state.blogSlice.value)
    const [image, setImage] = useState<any>()

    const uploadRef = useRef<any>(null)

    interface MyFormValues {
        title: string
        description: string
        author: string
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
        title: selectedBlog.title,
        description: selectedBlog.description,
        author: selectedBlog.author
    }

    const router = useRouter()
    const [contentData, setContentData] = useState(selectedBlog.content)

    const handleModelChange = (data: any) => {
        setContentData(data)
    }

    const editBlogDetail = async (values: any, actions: any) => {
        try {
            // const formData = new FormData()
            values.content = contentData
            values.image = image
            // for (let value in values) {
            //     if (typeof values[value] === 'object') {
            //         formData.append(value, JSON.stringify(values[value]))
            //     } else {
            //         formData.append(value, values[value])
            //     }
            // }

            // if (image) {
            //     formData.append('image', image)
            // }

            // if (contentData) {
            //     formData.append('content', contentData)
            // }

            let result = await axios.put('/blog/' + selectedBlog._id, values)
            if (result.data.success) {
                toast.success('Blog Details Edited Successfully.')
                router.replace('/dashboard/blog')
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
        <div className='container mx-auto'>
            {
                openFile &&
                <SelectFile selectedFile={image} setSelectedFile={setImage} setShowModal={setOpenFile} showModal={openFile} accept='image' />
            }


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
                    <Title title='Edit Blog' />
                </div>

                <Formik
                    // enableReinitialize
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        editBlogDetail(values, actions)
                        // alert(JSON.stringify(values, null, 2));
                        // actions.setSubmitting(false);
                    }}
                >
                    {props => (
                        <Form>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div className=''>
                                    <span className='font-semibold'>Blog Title</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.title} className='inputfield' name='title' id='title' placeholder='Blog Title' />
                                    </div>
                                </div>
                                <div className=''>
                                    <span className='font-semibold'>Author</span>
                                    <div className='mt-2'>
                                        <Field required value={props.values.author} className='inputfield' name='author' id='author' placeholder='Blog Author' />
                                    </div>
                                </div>

                                <div className='col-span-full'>
                                    <span className='font-semibold'>Short Description</span>
                                    <div className='mt-2'>
                                        <Field
                                            as="textarea"
                                            required
                                            value={props.values.description}
                                            className='inputfield'
                                            name='description'
                                            id='description'
                                            placeholder='Short Description'
                                        />
                                    </div>
                                </div>

                                <div className=''>
                                    <span className='font-semibold'>Image</span>
                                    <div className='mt-2'>
                                        {/* <input
                                            ref={uploadRef}
                                            type='file'
                                            accept="image/png, image/jpeg"
                                            onChange={(e: any) => handleImage(e.target.files[0])}
                                            className='inputfield hidden'
                                            name='image'
                                            id='image'
                                            placeholder='End Date'
                                        /> */}
                                    </div>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            // handleButtonClick()
                                            setOpenFile(true)
                                        }}
                                        className='btn-dashed  h-14 mb-2 w-full '
                                    >
                                        Upload
                                    </button>
                                    <div className='flex gap-3 '>
                                        {image && (
                                            <div className='relative border w-full'>
                                                <span className='absolute rounded text-center p-1 font-semibold text-sm top-0 bg-green-700 text-white w-full'>
                                                    New Image
                                                </span>
                                                {/* <img alt='currentImage' className='h-52 mx-auto' src={URL.createObjectURL(image)} /> */}
                                                <img alt='currentImage' className='h-44 bg-gray-200 object-contain mx-auto' src={`${process.env.NEXT_PUBLIC_IMG_URL}/${image.path}`} />
                                                <button
                                                    type='button'
                                                    onClick={() => {
                                                        setImage('')
                                                        // uploadRef.current.value = ''
                                                    }}
                                                    className='absolute bottom-0 bg-red-400 w-full'
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        )}
                                        {selectedBlog.image && (
                                            <div className='relative border w-full'>
                                                <span className='absolute rounded text-center p-1 font-semibold text-sm top-0 bg-blue-700 text-white w-full'>
                                                    Current Image
                                                </span>
                                                <img
                                                    alt='previousImage'
                                                    className='mx-auto h-44 object-contain bg-gray-200'
                                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${selectedBlog.image.path}`}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='col-span-full'>
                                    <span className='font-semibold'>Blog Details</span>
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

export default EditBlog