import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import Modal from '@/app/components/Modal/Modal'
import axios from '../../../axios/axios'
import { toast } from 'react-hot-toast'
import Title from '@/app/components/Title'

function AddFaqModal({ showModal, setShowModal, getAllFaqs }: {
    showModal: any, setShowModal: any, getAllFaqs: any
}) {

    const addFaq = async (values: any) => {
        try {
            let result = await axios.post('faq/', values)
            if (result.data.success) {
                toast.success('Added Successfully')
                setShowModal(false)
                getAllFaqs()
            }

        } catch (ERR) {
            console.log(ERR)
        }
    }
    return (
        <Modal classname='max-w-7xl' showModal={showModal} setShowModal={setShowModal} >
            <div>

                <Formik initialValues={{
                    question: "",
                    answer: "",
                }}
                    onSubmit={(values) => {
                        addFaq(values)
                    }}
                >
                    {(props) => (
                        <Form>

                            <div className='mb-5'>
                                <Title title='Add Faq' />
                            </div>

                            <div className='grid  gap-4'>
                                <div className=''>
                                    <label className='font-semibold'>Question</label>
                                    <Field
                                        required
                                        className=" inputfield mt-2"
                                        name='question'
                                        id='question'
                                        placeholder='Question' />
                                </div>
                                <div className=''>
                                    <label className='font-semibold'>Answer</label>
                                    <Field
                                        as="textarea"
                                        required
                                        className=" inputfield mt-2"
                                        name='answer'
                                        id='answer'
                                        placeholder='Answer' />
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

export default AddFaqModal