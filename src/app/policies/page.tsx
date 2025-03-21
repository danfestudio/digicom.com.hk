"use client";
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import axios from '../../axios/axios'
import dynamic from 'next/dynamic';

const ContentView = dynamic(() => import('react-froala-wysiwyg/FroalaEditorView'), {
  ssr: false,
})

function Page() {
  const [policyData, setPolicyData] = useState<any>("")

  const getAllPolicy = async () => {
    try {
      let result = await axios.get('policy/')
      if (result.data.success) {
        setPolicyData(result.data.data.data[0])
      }
    } catch (ERR) {
      (ERR)
    }
  }

  useEffect(() => {
    getAllPolicy()
  }, [])

  return (
    <div className='max-w-5xl mx-auto my-10 p-4'>
      <div className=''>
        <Title title='Policies' />
      </div>

      <div className='mt-5'>
        <ContentView model={policyData?.content} />
      </div>

    </div>
  )
}

export default Page