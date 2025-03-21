import Modal from '@/app/components/Modal/Modal'
import axios from '../../../../axios/axios'
import { X } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'

function AddFeaturedCategoryModal({ setShowModal, showModal, getAllCategory }: { showModal: any, setShowModal: any, getAllCategory: any }) {

  const [categoryName, setCategoryName] = useState<string>()

  const addCategory = async () => {
    try {
      let result = await axios.post('featured-product', {
        feature_name: categoryName,
      })

      if (result.data.success) {
        toast.success(`${categoryName} Added Successfully`)
        getAllCategory()
        setShowModal(false)
      }

    } catch (ERR: any) {
      toast.error(ERR.response.data.message)
      console.log(ERR)
    }
  }

  return (
    <Modal setShowModal={setShowModal} showModal={showModal} classname={'max-w-xl'}>
      <button className='absolute mb-2 top-1 right-1' onClick={() => setShowModal(false)}>
        <X size={20} />
      </button>
      <div className='flex flex-col '>
        <h1 className='font-semibold text-xl'>Create A Featured Category</h1>

        <div className='mt-4'>

          <label className='font-semibold text-sm opacity-60'>Name</label>
          <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCategoryName(e.target.value)
          }} type='text' required className='inputfield mt-2' />

          <div className='flex gap-2 mt-2 justify-end'>
            <button className='btn-primary text-sm' onClick={() => {
              addCategory()
            }}>Create</button>
            <button className='btn-danger text-sm' onClick={() => {
              setShowModal(false)
            }}>Close</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default AddFeaturedCategoryModal