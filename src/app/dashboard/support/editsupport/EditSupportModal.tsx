"use client";
import axios from '../../../../axios/axios'
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import Modal from '@/app/components/Modal/Modal'
import { toast } from 'react-hot-toast'
import Title from '@/app/components/Title'
import continentData from '../../../countries/countries.json'

function EditSupportModal({ showModal, setShowModal, getAllSupport, selectedSupport }: {
    showModal: any, setShowModal: any, getAllSupport: any, selectedSupport: any
}) {
    const { continents } = continentData
    const [selectedContinent, setSelectedContinent] = useState<any>({})

    const editSupport = async (values: any) => {
        try {
            let result = await axios.put('support/' + selectedSupport?._id, values)
            if (result.data.success) {
                toast.success('Edited Successfully')
                setShowModal(false)
                getAllSupport()
            }

        } catch (ERR) {
            console.log(ERR)
        }
    }

    const handleCountryData = (continent: string) => {
        try {
            const data = continents.find((value) => (value.name === continent))
            setSelectedContinent(data)
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        handleCountryData(selectedSupport?.continent)
    }, [])

    return (
        <Modal classname='max-w-7xl' showModal={showModal} setShowModal={setShowModal} >
            <div>
                <h1 className='font-semibold text-xl mb-5'>Edit Support</h1>

                <Formik
                    enableReinitialize
                    initialValues={{
                        country: selectedSupport?.country,
                        continent: selectedSupport?.continent,
                        country_code: selectedSupport?.country_code,
                        phone: selectedSupport?.phone,
                        support_time: selectedSupport?.support_time,
                        email: selectedSupport?.email,
                    }}
                    onSubmit={(values) => {
                        editSupport(values)
                    }}
                >
                    {
                        (props) => (
                            <Form>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-semibold text-sm opacity-60'>Continent</label>
                                    <Field required onChange={(e: { target: { value: any; }; }) => {
                                        handleCountryData(e.target.value)
                                        props.setFieldValue('continent', e.target.value)
                                    }} name="continent" as="select" placeholder="Select Continent" className="inputfield mt-2">
                                        <option value={""}>Select Continent</option>
                                        {
                                            continents.map((value, index) => (
                                                <option value={value.name} key={index}>{value.name} </option>
                                            ))
                                        }
                                    </Field>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-semibold text-sm opacity-60'>Country</label>
                                    <Field required onChange={(e: { target: { value: any; }; }) => {
                                        props.setFieldValue('country', e.target.value)
                                        props.setFieldValue('country_code', (selectedContinent?.countries?.find((value: any) => value.name === e.target.value)).code)
                                    }} name="country" as="select" placeholder="Select Continent" className="inputfield mt-2">
                                        <option value={""}>Select Country</option>
                                        {
                                            selectedContinent && selectedContinent?.countries?.map((value: any, index: any) => (
                                                <option value={value.name} key={index}>{value.name} </option>
                                            ))
                                        }
                                    </Field>
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-semibold text-sm opacity-60'>Support Time</label>
                                    <Field required name="support_time" placeholder="Support Time e.g: Mon--Fri 9:00-20:00 FST" className="inputfield mt-2" />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-semibold text-sm opacity-60'>Phone</label>
                                    <Field required name="phone" placeholder="Phone Number" className="inputfield mt-2" />
                                </div>
                                <div className='flex flex-col mb-3'>
                                    <label className='font-semibold text-sm opacity-60'>Email</label>
                                    <Field required name="email" placeholder="Email" className="inputfield mt-2" />
                                </div>


                                <div className='flex gap-2 mt-2 justify-end'>
                                    <button type='submit' className='btn-primary text-sm'>Create</button>
                                    <button type='button' onClick={() => {
                                        setShowModal(false)
                                    }} className='btn-danger text-sm'>Close</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>


            </div>
        </Modal>
    )
}

export default EditSupportModal