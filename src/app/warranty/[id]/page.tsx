'use client';
import Title from '@/app/components/Title';
import axios from '../../../axios/axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ContentView from "react-froala-wysiwyg/FroalaEditorView";

type WarrantyType = {
    country: "",
    warranty: "",
    country_code: "",
}

function SingleWarrantyPage() {

    const { id } = useParams()
    const [details, setDetails] = useState<WarrantyType>()

    const getDetails = async () => {
        try {
            let result = await axios.get('warranty/' + String(id).toUpperCase())
            if (result.data.success) {
                setDetails(result.data.data)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getDetails()
    }, [])

    return (
        <div className='container mx-auto p-5 mt-5'>
            <div className='text-center mb-10'>
                <Title title={`Warranty for ${details?.country} (${details?.country_code})`} />
            </div>
            <div className='card !px-10  my-4 h-full'>
                <ContentView model={details?.warranty} />
            </div>
        </div>
    )
}

export default SingleWarrantyPage