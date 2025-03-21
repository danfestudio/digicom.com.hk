"use client";
import axios from '../../../../axios/axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Field, Form, Formik } from 'formik';
import continentData from '../../../countries/countries.json'
import dynamic from 'next/dynamic';
import LoadingScreen from '@/app/components/Loading/LoadingScreen';
import { useRouter } from 'next/navigation';

const DynamicContentEditor = dynamic(() => import('../../../admin_components/content_editor/ContentEditor'), {
    ssr: false,
})

function AddWarranty() {

    const { continents } = continentData

    const router = useRouter()

    const [selectedContinent, setSelectedContinent] = useState<any>({})
    const [contentData, setContentData] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleModelChange = (data: any) => {
        setContentData(data)
    }

    const addCategory = async (values: any) => {
        try {
            setIsLoading(true)
            if (contentData) {
                values.warranty = contentData
            }

            let result = await axios.post('warranty', values)
            if (result.data.success) {
                toast.success(`Added Successfully`)
                setIsLoading(false)
                router.replace('/dashboard/warranty')

            }

        } catch (ERR: any) {
            setIsLoading(false)
            toast.error(ERR?.response?.data?.message ? ERR?.response?.data?.message : "Failed")
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

    return (
        <div className='flex flex-col'>
            {
                isLoading &&
                <LoadingScreen />
            }
            <h1 className='font-semibold text-xl'>Add Warranty</h1>

            <div className='mt-4 card'>
                <Formik
                    enableReinitialize
                    initialValues={{
                        country: "",
                        continent: "",
                        country_code: "",
                    }}
                    onSubmit={(values) => {
                        addCategory(values)
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
                                <div className='col-span-full'>
                                    <span className='font-semibold text-sm opacity-60'>Blog Details</span>
                                    <div className='mt-2'>
                                        <DynamicContentEditor allowPaste={true} model={contentData} handleModelChange={handleModelChange} />
                                    </div>
                                </div>

                                <div className='flex gap-2 mt-2 justify-end'>
                                    <button type='submit' className='btn-primary text-sm'>Create</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default AddWarranty