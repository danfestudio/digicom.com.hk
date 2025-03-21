"use client"
import Modal from '@/app/components/Modal/Modal'
import React, { useRef, useState } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import toast from 'react-hot-toast'
import axios from '../../../axios/axios'
import { Trash } from 'lucide-react'

function SocialMediaModal({ showModal, setShowModal, preferences, getPreferences }: {
    showModal: any, setShowModal: any, preferences: any, getPreferences: any
}) {
    const imageRef = useRef<any>(null)

    const [currentImage, setCurrentImage] = useState<any>()

    interface MyFormValues {
        icon: String, //image
        name: String,
        link: String,
    }

    const initialValues: MyFormValues = {
        icon: "", //image
        name: "",
        link: "",
    }

    const updatePreferences = async (values: any) => {
        try {
            if (values?.icon) {
                const formData = new FormData();

                formData.append('icon', values.icon)
                formData.append('name', values.name)
                formData.append('link', values.link)

                let result = await axios.post('/preference/social-media/' + preferences?._id, formData)

                if (result.data.success) {
                    toast.success('Details Updated')
                    getPreferences()
                    setShowModal(false)

                }
            } else {
                toast.error('Please Add Image')
            }
        } catch (ERR) {
            console.log(ERR)
            toast.error("failed")

        }
    }

    return (
        <Modal
            classname={'max-w-3xl'}
            showModal={showModal}
            setShowModal={setShowModal}>
            <div className='text-sm'>
                <h1 className='font-semibold text-base'>Add Social Media Link</h1>
                <hr className='my-2' />
                <div className='mt-5'>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={(values: any) => {
                            updatePreferences(values)
                        }}
                    >
                        {props => (
                            <Form>
                                <div className='mt-3 '>

                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-3'>

                                        <div>
                                            <label className='font-semibold '>Name</label>
                                            <Field
                                                className="inputfield"
                                                placeholder='Name of the Platform'
                                                name={`name`} />
                                        </div>
                                        <div>
                                            <label className='font-semibold '>Link</label>
                                            <Field
                                                className="inputfield"
                                                placeholder='Link to the Platform'
                                                name={`link`} />
                                        </div>

                                        <div className=''>
                                            <label className='font-semibold '>Image</label>
                                            <input
                                                ref={imageRef}
                                                type="file"
                                                onChange={(e: any) => {
                                                    props.setFieldValue('icon', e.target.files[0])
                                                    setCurrentImage(e.target.files[0])

                                                }}
                                                accept="image/png, image/jpeg"
                                                className="inputfield"
                                                name={`icon`}
                                            />
                                            <div className='flex gap-4'>
                                                {
                                                    currentImage ?
                                                        <div className='relative border w-fit mt-3'>
                                                            <img className='h-10 w-10 mt-3 mx-auto ' src={URL.createObjectURL(currentImage)} />
                                                            <span className='text-xs bg-green-400 px-2 py-1 font-semibold'>New Image</span>
                                                            <button onClick={() => {
                                                                setCurrentImage("")
                                                                imageRef.current.value = ""
                                                            }} className='text-xs bg-red-400 px-2 py-1 font-bold absolute top-0 right-0'>
                                                                <Trash size={10} />
                                                            </button>
                                                        </div>
                                                        : ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='justify-end flex gap-3'>
                                    <button type='submit' className='btn-primary mt-4'>
                                        Confirm
                                    </button>
                                    <button onClick={() => {
                                        setShowModal(false)
                                    }} type='button' className='btn-danger mt-4'>
                                        Cancel
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Modal>
    )
}

export default SocialMediaModal