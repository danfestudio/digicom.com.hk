"use client"
import React, { useEffect, useState } from 'react'
import Title from '@/app/components/Title'
import axios from '../../../axios/axios'
import SocialMediaModal from './SocialMediaModal'
import { CheckCircle, Edit, Plus, Trash } from 'lucide-react'
import Swal from 'sweetalert2'
import EditSocialMedia from './EditSocialMedia'
import { preventDefault } from '@fullcalendar/core/internal'
import { Field, Form, Formik } from 'formik'
import toast from 'react-hot-toast'

function Preferences() {

    const [preferences, setPreferences] = useState<any>()
    const [socialMedia, setSocialMedia] = useState<any>()
    const [navbar, setNavbar] = useState<any>()

    const [showModal, setShowModal] = React.useState(false)
    const [editModal, setEditModal] = React.useState(false)
    const [selectedSocialMedia, setSelectedSocialMedia] = useState()

    const getPreferences = async () => {
        try {
            let result = await axios.get('preference')
            setPreferences(result.data.data)
            setSocialMedia(result.data.data.socialMedia)
            setNavbar(result.data.data.navbar)
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getPreferences()
    }, [])

    const deleteSocialMedia = async (id: any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let result = await axios.delete('preference/delete-social-media/' + id)
                if (result.data.success) {
                    getPreferences()
                }
            }
        })
    }


    return (
        <div className='p-5'>
            <Title title='Preferences'></Title>
            <hr className='my-3' />

            <div className='card'>
                <div className='flex flex-wrap gap-4 justify-between items-center'>
                    <h2 className='font-bold text-gray-400'>Navbar Links</h2>
                </div>

                {
                    navbar?.map((nav: any, index: number) => (
                        <div key={index} className='flex'>
                            <div className='px-2 py-1 flex flex-col'>
                                <label className='text-xs uppercase opacity-40 font-semibold my-2'>
                                    {nav.id}
                                </label>
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        name: nav.name,
                                        id: nav.id
                                    }}
                                    onSubmit={async (values: any) => {
                                        try {
                                            let result = await axios.put('preference/update-navbar/' + nav?._id,
                                                values
                                            )
                                            if (result.data.success) {
                                                toast.success('Updated')
                                                getPreferences()
                                            }
                                        } catch (ERR) {
                                            console.log(ERR)
                                        }

                                    }}
                                >
                                    {
                                        (props) => (

                                            <Form className='group flex gap-2' >
                                                <Field className='inputfield' name='name' />
                                                {
                                                    props.dirty ?
                                                        <button type='submit' className='btn-success'>
                                                            <CheckCircle size={14} />
                                                        </button>
                                                        : ""
                                                }

                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className='card mt-4'>
                <div className='flex flex-wrap gap-4 justify-between items-center'>
                    <h2 className='font-bold text-gray-400'>Social Media Links</h2>

                    <button
                        className='btn-primary text-xs flex items-center gap-2'
                        onClick={() => {
                            setShowModal(true)
                        }}>
                        <Plus size={14} /> Add

                    </button>
                </div>

                <div className='grid grid-cols-3 gap-3 my-4'>
                    {socialMedia?.length > 0 ?
                        socialMedia?.map((value: any, index: number) => (
                            <div key={index} className='border p-3 rounded flex gap-4 shadow items-center relative'>
                                <div className='absolute bg-white  right-1 top-1 flex gap-1'>
                                    <button onClick={() => {
                                        deleteSocialMedia(value?._id)
                                    }} className='btn-danger !p-2'>
                                        <Trash size={12} />
                                    </button>

                                    <button onClick={() => {
                                        setSelectedSocialMedia(value)
                                        setEditModal(true)
                                    }} className='btn-primary !p-2'>
                                        <Edit size={12} />
                                    </button>
                                </div>
                                <img className='h-10 w-10 object-contain rounded shadow' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.icon}`} ></img>
                                <div className=''>
                                    <p className='font-semibold'>{value.name}</p>
                                    <p className='text-sm font-semibold opacity-50'>{value.link}</p>
                                </div>
                            </div>
                        ))
                        : ""
                    }
                </div>
            </div>


            {
                showModal &&
                <SocialMediaModal showModal={showModal} setShowModal={setShowModal} preferences={preferences} getPreferences={getPreferences} />
            }

            {
                editModal &&
                <EditSocialMedia showModal={editModal} setShowModal={setEditModal} preferences={preferences} getPreferences={getPreferences} selectedSocialMedia={selectedSocialMedia} />
            }

        </div >
    )
}

export default Preferences