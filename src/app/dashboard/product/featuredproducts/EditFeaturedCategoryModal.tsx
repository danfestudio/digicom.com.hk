import Modal from '@/app/components/Modal/Modal'
import axios from '../../../../axios/axios'
import { X } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'

function EditFeaturedCategoryModal({ setShowModal, showModal, getAllCategory, categoryData }: { showModal: any, setShowModal: any, getAllCategory: any, categoryData: any }) {

    const [categoryName, setCategoryName] = useState<string>(categoryData?.feature_name)

    const editCategory = async () => {
        try {
            let result = await axios.put('featured-product/' + categoryData?._id, {
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
                <h1 className='font-semibold text-xl'>Edit Featured Category</h1>

                <div className='mt-4'>

                    <label className='font-semibold text-sm opacity-60'>Name</label>
                    <input value={categoryName} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setCategoryName(e.target.value)
                    }} type='text' name='feature_name' required className='inputfield mt-2' />

                    <div className='flex gap-2 mt-2 justify-end'>
                        <button className='btn-primary text-sm' onClick={() => {
                            editCategory()
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

export default EditFeaturedCategoryModal