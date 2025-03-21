import React, { useEffect, useState } from 'react'
import RenderCategory from '../../dashboard/category/RenderCategory'
import Modal from '@/app/components/Modal/Modal'
import { X } from 'lucide-react'
import CategoryDropdown from './CategoryDropdown'
import { Field, Form, Formik } from 'formik'
import axios from '../../../axios/axios'

function SelectCategoryModal({ showModal, setShowModal, finalCategory, setFinalCategory }: { showModal: any, setShowModal: any, finalCategory: any, setFinalCategory: any }) {

    const [categoryData, setCategoryData] = useState<any>([])

    const getAllCategory = async () => {
        try {
            let result = await axios.get('category/')
            if (result.data.success) {
                setCategoryData(result.data.data)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    const [selectedCategory, setSelectedCategory] = useState<any>(null);
    const [changed, setChanged] = useState<any>()

    const [tempCategory, setTempCategory] = useState()
    const categoryIndex = 0

    const debounce = (func: any, delay: any) => {
        let timeoutId: any
        return (...args: any) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleCategoryChange = debounce((categoryId: any, props: any, e: any) => {
        const selected = categoryData.find((category: any) => category._id === categoryId);
        setSelectedCategory(selected || null);
        setChanged(false);
        props.setFieldValue('category', [e.target.value]);
    }, 0);


    // const handleCategoryChange = (categoryId: string, props: any, e: any) => {
    //     const selected = categoryData.find((category) => category._id === categoryId);
    //     setSelectedCategory(selected || null);
    //     setTimeout(() => {
    //         setChanged(false)
    //     }, 300)

    //     props.setFieldValue('category', [e.target.value])
    // };

    return (
        <div>
            <Modal showModal={showModal} setShowModal={setShowModal} classname='max-w-4xl'>
                <button className='absolute mb-2 top-1 right-1' onClick={() => setShowModal(false)}>
                    <X size={20} />
                </button>
                <h1 className='font-semibold text-xl'>Select Category</h1>
                <div className='flex flex-col '>

                    <div className='mt-5'>
                        {
                            categoryData?.length === 0 ?
                                <div className='px-5 pb-4'>
                                    <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                </div>
                                :
                                <div className=''>

                                    <Formik
                                        enableReinitialize
                                        initialValues={{
                                            category: ['']
                                        }}
                                        onSubmit={(values) => {
                                            setFinalCategory(tempCategory)
                                            setShowModal(false)
                                        }}
                                    >
                                        {(props) => (
                                            <Form className=''>
                                                <div className='flex gap-5'>
                                                    <Field as="select" name={`category[${categoryIndex}]`} value={props.values.category[0]} required className='inputfield' onChange={(e: any) => {
                                                        props.handleChange(e)
                                                        setChanged(true)
                                                        handleCategoryChange(e.target.value, props, e)
                                                    }}>
                                                        <option value="">Select a category</option>
                                                        {categoryData.map((category: any) => (
                                                            <option key={category._id} value={category._id}>
                                                                {category.name}
                                                            </option>
                                                        ))}
                                                    </Field>

                                                    {
                                                        (!changed && selectedCategory?.children.length) &&
                                                        <CategoryDropdown setTempCategory={setTempCategory} category={selectedCategory.children} categoryIndex={categoryIndex + 1} formikProps={props} />
                                                    }
                                                </div>

                                                <div className='mt-5 flex gap-3'>
                                                    <button className='btn-primary' type='submit'>
                                                        Submit
                                                    </button>
                                                    <button className='btn-danger' onClick={() => {
                                                        setShowModal(false)
                                                    }} type='button'>
                                                        Close
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                    {/* <select required className='inputfield' onChange={(e) => handleCategoryChange(e.target.value)}>
                                        <option value="">Select a category</option>
                                        {categoryData.map((category) => (
                                            <option key={category._id} value={category._id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>

                                    {
                                        selectedCategory?.children.length &&
                                        <CategoryDropdown category={selectedCategory.children} />
                                    } */}

                                </div>
                        }
                    </div>

                </div>
            </Modal >
        </div >
    )
}

export default SelectCategoryModal