"use client";
import axios from '../../../../../axios/axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Field, Form, Formik } from 'formik';
import continentData from '../../../../countries/countries.json'
import dynamic from 'next/dynamic';
import LoadingScreen from '@/app/components/Loading/LoadingScreen';
import { useParams, useRouter } from 'next/navigation';

const DynamicContentEditor = dynamic(() => import('../../../../admin_components/content_editor/ContentEditor'), {
    ssr: false,
})

type Item = {
    _id: "",
    country: "",
    continent: "",
    country_code: "",
}

function EditWarranty() {

    const { id } = useParams()

    const router = useRouter()

    const { continents } = continentData

    const [selectedContinent, setSelectedContinent] = useState<any>({})
    const [contentData, setContentData] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [previousData, setPreviousData] = useState<Item>()

    const handleModelChange = (data: any) => {
        setContentData(data)
    }

    const getCategory = async () => {
        try {
            setIsLoading(true)
            let result = await axios.get('warranty/' + id)
            if (result.data.success) {
                setPreviousData(result.data.data)
                setContentData(result.data.data.warranty)
                handleCountryData(result.data.data.continent)

                setIsLoading(false)
            }

        } catch (ERR: any) {
            setIsLoading(false)
            toast.error(ERR?.response?.data?.message ? ERR?.response?.data?.message : "Failed")
            console.log(ERR)
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    const editCategory = async (values: any) => {
        try {
            setIsLoading(true)
            if (contentData) {
                values.warranty = contentData
            }

            let result = await axios.put('warranty/' + previousData?._id, values)
            if (result.data.success) {
                toast.success(`Edited Successfully`)
                router.replace('/dashboard/warranty')
                setIsLoading(false)
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
            <h1 className='font-semibold text-xl'>Edit Warranty</h1>

            <div className='mt-4 card'>
                <Formik
                    enableReinitialize
                    initialValues={{
                        country: previousData?.country,
                        continent: previousData?.continent,
                        country_code: previousData?.country_code,
                    }}
                    onSubmit={(values) => {
                        editCategory(values)
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
                                    <button type='submit' className='btn-primary text-sm'>Edit</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default EditWarranty