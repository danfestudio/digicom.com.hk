import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import Modal from '@/app/components/Modal/Modal'
import { ImagePlus, Trash2, X } from 'lucide-react'
import axios from '../../../axios/axios'
import { toast } from 'react-hot-toast'
import { useAppSelector } from '@/redux/store'
import CustomStyles from '@/app/admin_components/custom_styles/CustomStyles'
import Title from '@/app/components/Title'
import AsyncSelect from 'react-select/async';
import LoadingScreen from '@/app/components/Loading/LoadingScreen'

type ProductOption = {
    value: string;
    label: string;
}

function EditBanner({ showModal, setShowModal, getAllBanners }: {
    showModal: any, setShowModal: any, getAllBanners: any
}) {
    const banner = useAppSelector((state) => state.bannerSlice.value)
    const [selectedProductData, setSelectedProductData] = React.useState<any>([])
    const [selectedBanner, setSelectedBanner] = React.useState<any>([])

    const [isLoading, setIsLoading] = useState(true)
    const [bannerName, setBannerName] = React.useState<string>()
    const [sectionsList, setSectionsList] = React.useState<any>()
    const [defaultValues, setDefaultValues] = React.useState<any>([])

    const [bannerNameError, setBannerNameEror] = React.useState<boolean>(false)

    const editBanner = async () => {
        try {
            if (bannerName) {

                let result = await axios.post('banner/',
                    {
                        _id: banner._id,
                        banner_name: bannerName,
                        banner_style: sectionsList,
                        link: {
                            for: "product",
                            value: selectedProductData.value
                        }
                    })
                if (result.data.success) {
                    toast.success('Added Successfully')
                    setShowModal(false)
                    getAllBanners()
                }
            } else {
                setBannerNameEror(true)
                toast.error('Please Give a Name To Your Banner')
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    const getSingleBannerData = async () => {
        try {
            setIsLoading(true)
            let result = await axios.get('banner/' + banner._id)
            if (result.data.success) {
                setBannerName(result.data?.data?.banner_name)
                setSectionsList(result.data?.data?.banner_style)
                setDefaultValues({
                    value: result.data?.data?.link?.value?.product_sku,
                    label: result.data?.data?.link?.value?.product_name
                })
                setTimeout(() => {
                    setIsLoading(false)
                }, 500)
            }
        } catch (ERR) {
            toast.error('Failed To Fetch Data')
            console.log(ERR)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getSingleBannerData()
    }, [])

    const getAllProduct = async (keyword: string) => {
        try {
            let result = await axios.get('product/', {
                params: {
                    'search': keyword
                }
            })
            if (result.data.success) {
                const options = result.data.data.data.map((value: any) => {
                    return {
                        value: value.product_sku,
                        label: value.product_name,
                    }
                })
                return options;
            }
            else {
                return [];
            }
        } catch (ERR) {
            toast.error('Failed To Fetch Data')
            console.log(ERR)
        }
    }

    const loadOptions = (inputValue: string) =>
        new Promise<ProductOption[]>((resolve) => {
            setTimeout(() => {
                resolve(getAllProduct(inputValue));
            }, 1000);
        });


    return (
        <Modal
            classname={'max-h-screen h-screen overflow-auto'}
            showModal={showModal}
            setShowModal={setShowModal}>

            {
                isLoading ?
                    <LoadingScreen />
                    :
                    <>
                        <Title title='Edit Your Banner' />
                        <button className='absolute top-1 right-1' type='button' onClick={() => {
                            setShowModal(false)
                        }}><X /></button>

                        <div className='mb-2 text-sm flex gap-2 items-center mt-4'>
                            <label className='min-w-max font-semibold mt-2 mb-3'>Banner name</label>
                            <input value={bannerName} onChange={(e) => {
                                setBannerName(e.target.value)
                            }} className={`${bannerNameError ? 'outline-red-700 outline ' : ""} inputfield !px-2 !py-1 !min-h-[10px] !max-h-[60px]`} type='text' placeholder='Give Your Banner a Unique Name' />
                        </div>

                        <div className='my-4 text-sm flex gap-2 items-center w-full'>
                            <label className='min-w-max font-semibold'>Link To:</label>

                            <AsyncSelect onChange={(e) => {
                                setSelectedProductData(e)
                            }} className='w-full' cacheOptions loadOptions={loadOptions} defaultValue={defaultValues} />
                        </div>

                        <div className='overflow-auto'>
                            <CustomStyles isBanner={false} data={sectionsList && sectionsList[0]} sectionsList={sectionsList} sectionListIndex={0} setSectionsList={setSectionsList} />
                        </div>

                        <div className='flex gap-5 justify-end mt-5'>
                            <button className='btn-primary' onClick={() => {
                                editBanner()
                            }} type='submit'>Save</button>
                            <button className='btn-danger' type='button' onClick={() => {
                                setShowModal(false)
                            }}>Cancel</button>
                        </div>
                    </>
            }
        </Modal>
    )
}

export default EditBanner