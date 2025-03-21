import { Formik, Form, Field, FieldArray } from 'formik'
import Modal from '@/app/components/Modal/Modal'
import React from 'react'
import axios from '../../../axios/axios'
import { toast } from 'react-hot-toast'
import Title from '@/app/components/Title'

function EditFaqModal({ showModal, setShowModal, getAllFaqs, selectedFAQ }: {
    showModal: any, setShowModal: any, getAllFaqs: any, selectedFAQ: any
}) {

    const editFaq = async (values: any) => {
        try {
            let result = await axios.put('faq/' + selectedFAQ._id, values)
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
        <Modal
            classname=' max-w-7xl'
            showModal={showModal}
            setShowModal={setShowModal}>
            <div >

                <Formik initialValues={{
                    question: selectedFAQ.question,
                    answer: selectedFAQ.answer,
                }}
                    onSubmit={(values) => {
                        editFaq(values)
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

export default EditFaqModal