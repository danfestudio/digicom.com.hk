import Modal from '@/app/components/Modal/Modal'
import axios from '../../../axios/axios'
import { Info, X } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppSelector } from '@/redux/store'
import SelectFile from '@/app/admin_components/media/SelectFile'
import Image from 'next/image'

function AddCategory({ showModal, setShowModal, getAllCategory }: { showModal: any, setShowModal: any, getAllCategory: any }) {

    const selectedCategory = useAppSelector((state) => state.categorySlice.value)
    const [showImageSelect, setShowImageSelect] = React.useState<any>()

    const [categoryName, setCategoryName] = useState<string>()
    const [image, setImage] = React.useState<any>()

    const addCategory = async () => {
        try {
            let result = await axios.post('category', {
                name: categoryName,
                parentCategoryId: selectedCategory._id,
                image: image?._id
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
        <>
            <div className='fixed z-[999]' >
                {
                    showImageSelect &&
                    <SelectFile selectedFile={image} setSelectedFile={setImage} setShowModal={setShowImageSelect} showModal={showImageSelect} accept='image' />
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} classname='max-w-3xl !z-0'>

                <button className='absolute mb-2 top-1 right-1' onClick={() => setShowModal(false)}>
                    <X size={20} />
                </button>
                <div className='flex flex-col '>
                    <h1 className='font-semibold text-xl'>Create Category</h1>

                    <div className='mt-4'>
                        {
                            selectedCategory &&
                            <div className='flex items-center justify-center gap-2 text-sm bg-blue-800 rounded p-1 mb-3 text-center text-white'>
                                <Info size={15} />
                                Category will be created inside {selectedCategory.name}
                            </div>
                        }
                        <label className='font-semibold text-sm opacity-60'>Name</label>
                        <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setCategoryName(e.target.value)
                        }} type='text' required className='inputfield mt-2' />

                        <div className='mt-2'>
                            <span className='font-semibold text-sm opacity-60'>Image</span>

                            <button
                                type='button'
                                onClick={() => {
                                    // handleButtonClick()
                                    setShowImageSelect(true)
                                }}
                                className='btn-dashed w-full h-15 mt-2'
                            >
                                Upload
                            </button>

                            {image && (
                                <div
                                    className='relative w-fit'
                                    style={{
                                        height: '150px',
                                    }}
                                >
                                    <Image fill={true} alt='currentimage' priority placeholder="blur" blurDataURL={'/logo.png'} className='border !relative my-2 w-full h-full' src={`${process.env.NEXT_PUBLIC_IMG_URL}${image.path}`} />

                                    <button
                                        type='button'
                                        onClick={() => {
                                            setImage('')
                                        }}
                                        className='absolute bottom-0 bg-red-400 w-full'>Remove</button>
                                </div>
                            )}
                        </div>

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
        </>
    )
}

export default AddCategory