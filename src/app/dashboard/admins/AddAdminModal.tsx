import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import Modal from '@/app/components/Modal/Modal'
import axios from '../../../axios/axios'
import { toast } from 'react-hot-toast'
import Title from '@/app/components/Title'

function AddAdminModal({ showModal, setShowModal, getAllAdmins }: {
    showModal: any, setShowModal: any, getAllAdmins: any
}) {

    const addAdmin = async (values: any) => {
        try {
            let result = await axios.post('admin/', values)
            if (result.data.success) {
                toast.success('Added Successfully')
                setShowModal(false)
                getAllAdmins()
            }

        } catch (ERR) {
            console.log(ERR)
        }
    }
    return (
        <Modal classname='max-w-7xl' showModal={showModal} setShowModal={setShowModal} >
            <div>

                <Formik initialValues={{
                    firstname: "",
                    lastname: "",
                    contact: "",
                    email: "",
                    password: 'password',
                }}
                    onSubmit={(values) => {
                        addAdmin(values)
                    }}
                >
                    {(props) => (
                        <Form>

                            <div className='mb-5'>
                                <Title title='Add Admin' />
                            </div>

                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div className=''>
                                    <label className='font-semibold'>First Name</label>
                                    <Field
                                        required
                                        className=" inputfield mt-2"
                                        name='firstname'
                                        id='firstname'
                                        placeholder='First Name' />
                                </div>
                                <div className=''>
                                    <label className='font-semibold'>Last Name</label>
                                    <Field
                                        required
                                        className=" inputfield mt-2"
                                        name='lastname'
                                        id='lastname'
                                        placeholder='Last Name' />
                                </div>
                                <div className=''>
                                    <label className='font-semibold'>Email</label>
                                    <Field
                                        required
                                        className=" inputfield mt-2"
                                        name='email'
                                        id='email'
                                        placeholder='Email' />
                                </div>
                                <div className=''>
                                    <label className='font-semibold'>Contact</label>
                                    <Field
                                        required
                                        className=" inputfield mt-2"
                                        name='contact'
                                        id='contact'
                                        placeholder='Phone Number' />
                                </div>
                            </div>
                            <div className='flex gap-5 justify-end mt-4'>
                                <button className='btn-primary' type='submit'>Save Changes</button>
                                <button className='btn-danger' type='button' onClick={() => {
                                    setShowModal(false)
                                }}>Cancel</button>
                            </div>
                        </Form>
                    )
                    }
                </Formik>


            </div>
        </Modal>
    )
}

export default AddAdminModal