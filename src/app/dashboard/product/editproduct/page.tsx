"use client";
import React, { useMemo, useState, useEffect, useRef } from 'react'
import Title from '@/app/components/Title'
import axios from '../../../../axios/axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch, useAppSelector } from '@/redux/store';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { ArrowLeft, FileText } from 'lucide-react'
import * as Yup from 'yup'
import { Field, FieldArray, Form, Formik } from 'formik';
import SelectCategoryModal from '@/app/admin_components/select_category/SelectCategoryModal';
import SelectFile from '@/app/admin_components/media/SelectFile';
import Link from 'next/link';

function EditProduct() {

    const selectedProduct = useAppSelector((state) => state.productSlice.value)
    const [image, setImage] = useState<any>(selectedProduct.front_image.path)
    const [showCategoryEditModal, setShowCategoryEditModal] = useState(false)
    const [finalCategory, setFinalCategory] = useState<any>(selectedProduct.category);

    const [showImageEditModal, setShowImageEditModal] = useState(false)
    const [showFileEditModal, setFileEditModal] = useState(false)

    const [selectedImage, setSelectedImage] = useState<any>(selectedProduct.front_image);
    const [userGuide, setUserGuide] = useState<any>(selectedProduct.user_guide)

    const uploadRef = useRef<any>(null)

    const myLoader = () => {
        return `${process.env.NEXT_PUBLIC_IMG_URL}${selectedImage?.path}`;
    }
    interface MyFormValues {
        product_name: "",
        // category: "",
        // product_sku: "",
        // images: '',
        // front_image: "",
        product_warranty: '',
        serial_number: '',
        specs: any

    }

    const initialValues: MyFormValues = {
        product_name: selectedProduct?.product_name,
        // category: selectedProduct.category,
        // product_sku: selectedProduct.product_name,
        // images: '',
        // front_image: selectedProduct.product_name,
        product_warranty: selectedProduct.product_warranty,
        serial_number: selectedProduct.serial_number,
        specs: selectedProduct.specs
    }

    const router = useRouter()
    const [contentData, setContentData] = useState()

    const handleModelChange = (data: any) => {
        setContentData(data)
    }

    const editProductDetail = async (values: any, actions: any) => {
        try {
            const formData = new FormData()
            // values.content = contentData
            // values.image = image

            // for (let value in values) {
            //     if (typeof values[value] === 'object') {
            //         formData.append(value, JSON.stringify(values[value]))
            //     } else {
            //         formData.append(value, values[value])
            //     }
            // }
            values.category = finalCategory?._id
            values.front_image = selectedImage?._id
            values.user_guide = userGuide?._id

            // if (finalCategory) {
            //     formData.append('category', finalCategory?._id)
            // }
            // if (selectedImage) {
            //     formData.append('front_image', selectedImage?._id)
            // }
            // if (userGuide) {
            //     formData.append('user_guide', userGuide?._id)
            // }

            let result = await axios.put('/product/' + selectedProduct?._id, values)
            if (result.data.success) {
                toast.success('Product Edited Successfully.')
                router.replace('/dashboard/product')
            } else toast.error('Failed')
        } catch (ERR) {
            toast.error('ERR')
            console.log(ERR)
        }
    }

    const handleImage = (value: any) => {
        if (value) {
            setImage(value)
        }
    }

    const handleButtonClick = () => {
        // Access and interact with the DOM element
        // if (uploadRef.current) {
        //     uploadRef.current.click()
        // }

        setShowImageEditModal(true)
    }

    const selectImage = (image: any) => {
        selectedImage(image)
    }

    return (
        <div>
            {
                showCategoryEditModal &&
                <SelectCategoryModal showModal={showCategoryEditModal} setShowModal={setShowCategoryEditModal} finalCategory={finalCategory} setFinalCategory={setFinalCategory} />
            }
            {
                showImageEditModal &&
                <SelectFile accept="image" showModal={showImageEditModal} setShowModal={setShowImageEditModal} setSelectedFile={setSelectedImage} selectedFile={selectedImage} />
            }
            {
                showFileEditModal &&
                <SelectFile accept="file" showModal={showFileEditModal} setShowModal={setFileEditModal} setSelectedFile={setUserGuide} selectedFile={userGuide} />
            }

            <div className='rounded p-4   mx-auto'>
                <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
                    <Title title='Edit Product'></Title>
                </div>
                <hr className='mb-4' />
                <div className='card'>
                    <button
                        className='flex items-center gap-2'
                        onClick={() => {
                            router.back()
                        }}
                    >
                        <ArrowLeft /> Go Back
                    </button>

                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            editProductDetail(values, actions)
                            // alert(JSON.stringify(values, null, 2));
                            // actions.setSubmitting(false);
                        }}
                    >
                        {props => (
                            <Form>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                                    <div className=''>
                                        <span className='font-semibold'>Product Name</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.product_name} className='inputfield' name='product_name' id='product_name' placeholder='Product Name' />
                                        </div>
                                    </div>

                                    <div className=''>
                                        <span className='font-semibold'>Category Name</span>
                                        <div className=' inputfield mt-2 flex justify-between !p-0'>

                                            {finalCategory
                                                ?
                                                <label className='p-2 px-3 text-gray-400'>
                                                    {finalCategory?.name}
                                                </label>
                                                :
                                                <label className='p-2 px-3 text-gray-400'>Select Category</label>
                                            }

                                            <button className='btn-primary text-sm' type='button' onClick={() => {
                                                setShowCategoryEditModal(true)
                                            }}>Select Category</button>

                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Product Warranty (in Years)</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.product_warranty} className='inputfield' name='product_warranty' id='product_warranty' placeholder='Product Warranty e.g 1 , 1.5 , 2' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>Serial Number</span>
                                        <div className='mt-2'>
                                            <Field required value={props.values.serial_number} className='inputfield' name='serial_number' id='serial_number' placeholder='Serial Number' />
                                        </div>
                                    </div>

                                    <div className=''>
                                        <span className='font-semibold'>Image</span>

                                        <button
                                            type='button'
                                            onClick={() => {
                                                handleButtonClick()
                                            }}
                                            className='btn-dashed w-full '
                                        >
                                            Upload
                                        </button>
                                        {selectedImage && (
                                            <div
                                                className='relative w-fit'
                                                style={{
                                                    height: '230px',
                                                }}
                                            >
                                                {/* <Image fill={true} alt='currentimage' placeholder="blur" blurDataURL={'/logo.png'} className='border !relative my-2 w-full h-full' src={`${process.env.NEXT_PUBLIC_IMG_URL}${selectedImage?.path}`} /> */}
                                                <img alt='currentimage' placeholder="blur" className='border !relative my-2 w-full h-full' src={`${process.env.NEXT_PUBLIC_IMG_URL}${selectedImage.path}`} />

                                                <button
                                                    type='button'
                                                    onClick={() => {
                                                        setSelectedImage('')
                                                    }}
                                                    className='absolute bottom-0 bg-red-400 w-full'>Remove</button>
                                            </div>
                                        )}
                                    </div>
                                    <div className=''>
                                        <span className='font-semibold'>User Guide</span>

                                        <button
                                            type='button'
                                            onClick={() => {
                                                setFileEditModal(true)
                                            }}
                                            className='btn-dashed w-full '
                                        >
                                            Upload
                                        </button>
                                        {userGuide && (
                                            <div
                                                className='relative w-fit grid place-items-center '
                                                style={{
                                                    height: '130px',
                                                }}
                                            >
                                                {/* <Image fill={true} alt='currentimage' placeholder="blur" blurDataURL={'/logo.png'} className='border !relative my-2 w-full h-full' src={`${process.env.NEXT_PUBLIC_IMG_URL}${selectedImage?.path}`} /> */}
                                                {/* <Image fill={true} loader={myLoader} alt='currentimage' placeholder="blur" blurDataURL={'/logo.png'} className='border !relative my-2 w-full h-full' src={`${process.env.NEXT_PUBLIC_IMG_URL}${selectedImage?.path}`} /> */}
                                                <Link href={`${process.env.NEXT_PUBLIC_IMG_URL}${userGuide.path}`} target='blanck'>
                                                    <FileText size={40} />
                                                </Link>
                                                <button
                                                    type='button'
                                                    onClick={() => {
                                                        setUserGuide('')
                                                    }}
                                                    className='absolute bottom-0 bg-red-400 w-fit'>Remove</button>
                                            </div>
                                        )}
                                    </div>

                                    <div className=' col-span-full  text-center text-gray-800 h-1 border-b-2 border-dashed'></div>

                                    <div className='col-span-full  '>
                                        <span className='font-semibold'>Specification</span>

                                        <FieldArray
                                            name="specs"
                                            render={(arrayHelpers) => (
                                                <div className=''>
                                                    {props.values.specs.map((desc: any, descIndex: number) => (
                                                        <div className='flex gap-2 items-start w-full border-b rounded mb-2  py-3 relative' key={descIndex}>
                                                            <div className='w-full'>
                                                                <label className='text-sm font-semibold'>Main Title</label>
                                                                <Field name={`specs[${descIndex}].main_title`} placeholder="Main Title" className="inputfield" />
                                                            </div>
                                                            <FieldArray
                                                                name={`specs[${descIndex}].content`}
                                                                render={(contentHelpers) => (
                                                                    <div className='w-full'>
                                                                        {desc.content.map((content: any, contentIndex: number) => (
                                                                            <div className='flex items-end relative mb-5 border p-2' key={contentIndex}>

                                                                                <div key={contentIndex} className='w-full'>
                                                                                    <div>
                                                                                        <label>Secondary Title</label>
                                                                                        <Field name={`specs[${descIndex}].content[${contentIndex}].subtitle`} placeholder="Subtitle" className="inputfield" />
                                                                                    </div>
                                                                                    <FieldArray
                                                                                        name={`specs[${descIndex}].content[${contentIndex}].items`}
                                                                                        render={(itemsArrayHelpers) => (
                                                                                            <div className='mt-2'>
                                                                                                <label>List</label>
                                                                                                {content.items.map((item: any, itemIndex: number) => (
                                                                                                    <div className='flex items-center gap-2' key={itemIndex}>
                                                                                                        <div className='w-full'>
                                                                                                            <Field
                                                                                                                className="inputfield"
                                                                                                                name={`specs[${descIndex}].content[${contentIndex}].items[${itemIndex}]`}
                                                                                                                placeholder="Item"
                                                                                                            />
                                                                                                        </div>
                                                                                                        {/* arrayHelpers.insert(index, '')} */}
                                                                                                        <button type="button" className='btn-success text-sm mb-1' onClick={() => itemsArrayHelpers.insert(itemIndex + 1, '')}>
                                                                                                            +
                                                                                                        </button>
                                                                                                        {
                                                                                                            content.items.length === 1 ?
                                                                                                                "" :
                                                                                                                <button className='btn-danger text-sm mb-1' type="button" onClick={() => itemsArrayHelpers.remove(itemIndex)}>
                                                                                                                    -
                                                                                                                </button>
                                                                                                        }
                                                                                                    </div>
                                                                                                ))}

                                                                                            </div>
                                                                                        )}
                                                                                    />
                                                                                    {/* <button type="button" onClick={() => arrayHelpers.remove(contentIndex)}>
                                                                                        Remove
                                                                                    </button> */}
                                                                                </div>

                                                                                {/* {desc.content.map((items: any, contentIndex: number) => (
                                                                                   
                                                                                ))} */}
                                                                                <div className='flex items-center gap-2 absolute top-0 right-0'>

                                                                                    <button type="button" className=' btn-success text-sm mb-1  !p-2 !py-0' onClick={() => contentHelpers.insert(contentIndex + 1, { subtitle: "", items: [''] })}>
                                                                                        {/* Edit Content */}
                                                                                        +
                                                                                    </button>

                                                                                    {
                                                                                        desc.content.length === 1 ?
                                                                                            "" :
                                                                                            <button className='btn-danger text-sm mb-1  !p-2 !py-0' type="button" onClick={() => contentHelpers.remove(contentIndex)}>
                                                                                                {/* Remove Content */}
                                                                                                -
                                                                                            </button>
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        ))}

                                                                    </div>
                                                                )}
                                                            />


                                                            <div className='flex gap-3 absolute bottom-2'>
                                                                {
                                                                    props.values.specs.length === 1 ?
                                                                        "" :
                                                                        <button type="button" className='btn-danger !p-2 !py-0' onClick={() => arrayHelpers.remove(descIndex)}>
                                                                            {/* Remove specs */}
                                                                            -
                                                                        </button>
                                                                }
                                                                <button type="button" className='btn-success !p-2 !py-0' onClick={() => arrayHelpers.insert(descIndex + 1, {
                                                                    main_title: '',
                                                                    content: [
                                                                        {
                                                                            subtitle: "",
                                                                            items: ['']
                                                                        },
                                                                    ]
                                                                })}>
                                                                    {/* Edit specs */}
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        />
                                    </div>

                                    {/* <div className='col-span-full'>
                                        <span className='font-semibold'>Product Details</span>
                                        <div className='mt-2'>
                                            <DynamicContentEditor allowPaste={true} model={contentData} handleModelChange={handleModelChange} />
                                        </div>
                                    </div> */}
                                </div>

                                <div className='justify-end flex'>
                                    <button type='submit' className='btn-primary mt-4'>
                                        Confirm
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default EditProduct