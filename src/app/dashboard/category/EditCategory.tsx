import Modal from '@/app/components/Modal/Modal'
import axios from '../../../axios/axios'
import { Info, X, XCircle } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppSelector } from '@/redux/store'
import SelectFile from '@/app/admin_components/media/SelectFile'
import Image from 'next/image'

function EditCategory({ showModal, setShowModal, getAllCategory }: { showModal: any, setShowModal: any, getAllCategory: any }) {

    const selectedCategory = useAppSelector((state) => state.categorySlice.value)
    const [showImageSelect, setShowImageSelect] = React.useState<any>()
    const [image, setImage] = React.useState<any>()
    const [previousImage, setPreviousImage] = React.useState<any>(selectedCategory?.image?.path)

    const [categoryName, setCategoryName] = useState<string>(selectedCategory.name)

    const editCategory = async () => {
        try {
            let imagepath = ''
            if (!previousImage && !image) {
                imagepath = ""
            }
            if (previousImage && !image) {
                imagepath = selectedCategory?.image?._id
            }
            if (!previousImage && image) {
                imagepath = image._id
            }
            if (previousImage && image) {
                imagepath = image._id
            }

            let result = await axios.put('category/' + selectedCategory._id, {
                name: categoryName,
                image: imagepath
            })

            if (result.data.success) {
                toast.success(`${categoryName} edited Successfully`)
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
            <Modal showModal={showModal} setShowModal={setShowModal} classname='max-w-3xl'>
                <button className='absolute mb-2 top-1 right-1' onClick={() => setShowModal(false)}>
                    <X size={20} />
                </button>
                <div className='flex flex-col '>
                    <h1 className='font-semibold text-xl'>Edit Category</h1>

                    <div className='mt-4'>
                        <label className='font-semibold text-sm opacity-60'>Name</label>
                        <input value={categoryName} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setCategoryName(e.target.value)
                        }} type='text' required className='inputfield mt-2' />

                        <div className='mt-2'>
                            <span className='font-semibold text-sm opacity-60'>Image</span>

                            <div className='flex items-center gap-4'>

                                <button
                                    type='button'
                                    onClick={() => {
                                        setShowImageSelect(true)
                                    }}
                                    className='btn-dashed w-full h-15 mt-2'
                                >
                                    Upload
                                </button>

                                {
                                    (previousImage || image) &&
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setPreviousImage('')
                                            setImage('')
                                        }}
                                        className='btn-danger flex items-center justify-center gap-3 border-red-400 !border-2 !bg-red-400 w-full h-15 mt-2'>
                                        <XCircle /> Remove All Images
                                    </button>
                                }

                            </div>

                            <div className='flex items-center gap-5 my-5' >
                                {image && (
                                    <div
                                        className='relative w-fit'
                                        style={{
                                            height: '150px',
                                        }}
                                    >
                                        <Image fill={true} alt='currentimage' priority placeholder="blur" blurDataURL={'/logo.png'} className='border !relative  w-full h-full' src={`${process.env.NEXT_PUBLIC_IMG_URL}${image.path}`} />

                                        <button
                                            type='button'
                                            onClick={() => {
                                                setImage('')
                                            }}
                                            className='absolute bottom-0 bg-red-400 w-full'>
                                            Remove
                                        </button>
                                        <label className='absolute top-0 text-center bg-green-400 w-full'>
                                            New Image
                                        </label>

                                    </div>
                                )}
                                {previousImage && (
                                    <div
                                        className='relative w-fit'
                                        style={{
                                            height: '150px',
                                        }}
                                    >
                                        <Image fill={true} alt='currentimage' priority placeholder="blur" blurDataURL={'/logo.png'} className='border !relative w-full h-full' src={`${process.env.NEXT_PUBLIC_IMG_URL}${previousImage}`} />

                                        <label className='absolute top-0 text-center bg-blue-400 w-full'>
                                            Previous Image
                                        </label>
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className='flex gap-2 mt-2 justify-end'>
                            <button type='submit' className='btn-primary text-sm' onClick={() => {
                                editCategory()
                            }}>Edit</button>
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

export default EditCategory