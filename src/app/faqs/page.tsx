"use client";
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Accordion from '../components/Accordion/Accordion'
import axios from '../../axios/axios'

function FAQs() {

    const [faqData, setFaqData] = useState<any>([])
    const [expanded, setExpanded] = useState<boolean | number>(0);

    const getAllFaqs = async () => {
        try {
            let result = await axios.get('faq/', {
                params: {
                    limit: 999,
                    page: 1
                }
            })
            if (result.data.success) {
                setFaqData(result.data.data.data)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getAllFaqs()
    }, [])

    return (
        <div className='max-w-5xl mx-auto my-10'>
            <div className=''>
                <Title title='Frequently asked questions' />
            </div>

            <div className='mt-10 relative w-full h-full'>
                {
                    faqData.map((value: any, index: number) => (
                        <Accordion key={value?._id} i={value} header={value.question} body={value.answer} expanded={expanded} setExpanded={setExpanded} />
                    ))
                }
            </div>
        </div>
    )
}

export default FAQs