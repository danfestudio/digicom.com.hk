"use client";
import React, { useState } from 'react'
import axios from '../../../../axios/axios'
import { toast } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid';
import Title from '@/app/components/Title'
import { debounce } from 'lodash'
import AsyncSelect from 'react-select/async';
import { useDispatch } from 'react-redux'
import { setBreakpoint } from '@/redux/features/CustomStyleSlice'
import IndividualSections from '@/app/admin_components/IndividualSections/IndividualSections'
import { useRouter } from 'next/navigation';

type ProductOption = {
    value: string;
    label: string;
}

function AddBanner() {

    const router = useRouter()

    const dispatch = useDispatch()
    const [divWidth, setDivWidth] = useState<number | string>('100%')
    const screenWidths = [
        1440,
        1024,
        768,
        425,
        320
    ]

    const submitRef = React.useRef<any>(null)
    const [selectedProductData, setSelectedProductData] = useState<any>([])
    const [defaultOptions, setDefaultOptions] = useState<any>()
    const [keyword, setKeyword] = useState()
    const [productData, setProductData] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [bannerName, setBannerName] = useState<string>('')
    const [bannerNameError, setBannerNameEror] = useState<boolean>(false)

    const [sectionsList, setSectionsList] = React.useState<any>([
        {
            id: uuidv4(),
            name: "customStyle",
            type: "customStyle",
            components: [
                {
                    "id": uuidv4(),
                    "elements": [],
                    "styles": {
                        1440: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        1024: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        768: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        425: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                        320: {
                            "paddingTop": 0,
                            "paddingBottom": 0,
                            "paddingLeft": 0,
                            "paddingRight": 0,
                            "backgroundImage": "",
                            "backgroundColor": "#ffffff",
                            "backgroundRepeat": "no-repeat",
                            "backgroundPosition": "center",
                            "backgroundSize": "cover",
                            "height": 500,
                            "alignItems": "start",
                            "display": "flex",
                            "flexDirection": "column",
                            "justifyContent": "start",
                            "gap": 1
                        },
                    },
                    "hasOverlay": false,
                    "overlayColor": "repeating-radial-gradient(ellipse at 54.751% 60.204%, rgba(255,255,255,0)  0%,black  100%)"
                }
            ],
            styles: {
                1440: {
                    "contentWidth": "w-full",
                    name: "1440",
                },
                1024: {
                    "contentWidth": "w-full",
                    name: "1024",
                },
                768: {
                    "contentWidth": "w-full",
                    name: "769",
                },
                425: {
                    "contentWidth": "w-full",
                    name: "425",
                },
                320: {
                    "contentWidth": "w-full",
                    name: "320",
                },
            },
        },
    ])

    const addBanner = async () => {
        try {
            if (bannerName) {

                let result = await axios.post('banner/', {
                    banner_name: bannerName,
                    banner_style: sectionsList,
                    link: {
                        for: "product",
                        value: selectedProductData.value
                    }
                })
                if (result.data.success) {
                    toast.success('Added Successfully')
                    router.push('/dashboard/banner')
                }
            } else {
                setBannerNameEror(true)
                toast.error('Please Give a Name To Your Banner')
            }

        } catch (ERR) {
            console.log(ERR)
        }
    }
    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

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
        <div className='card w-full'>
            <Title title='Design Banner' />

            <div className='my-4 text-sm flex gap-2 items-center'>
                <label className='min-w-max font-semibold'>Banner name</label>
                <input onChange={(e) => {
                    setBannerName(e.target.value)
                    setBannerNameEror(false)
                }} className={`${bannerNameError ? 'outline-red-700 outline ' : ""} inputfield !px-2 !py-1 !min-h-[10px] !max-h-[60px]`} type='text' placeholder='Give Your Banner a Unique Name' />
            </div>
            <div className='my-4 text-sm flex gap-2 items-center w-full'>
                <label className='min-w-max font-semibold'>Link To:</label>

                <AsyncSelect onChange={(e) => {
                    setSelectedProductData(e)
                }} className='w-full' cacheOptions loadOptions={loadOptions} />
            </div>

            <div className='bg-white sticky top-16 w-full text-sm flex justify-center gap-3 p-3'>
                <button type='button' className={`${divWidth === '100%' ? "bg-blue-500 text-white border-gray-500" : " "} p-1 px-3 rounded-full border `} onClick={() => {
                    dispatch(setBreakpoint(1440))
                    setDivWidth('100%')
                }}>{'100%'}</button>
                {
                    screenWidths.map((value, index) => (
                        <button className={`${divWidth === value ? "bg-blue-500 text-white border-gray-500" : " "} p-1 px-3 rounded-full border `} key={index} onClick={() => {
                            dispatch(setBreakpoint(value))
                            setDivWidth(value)
                        }}>{value}</button>
                    ))
                }
            </div>
            <div className='w-1/2 mx-auto' style={{
                width: divWidth === "100%" ? "100%" : divWidth + 'px'
            }}>
                {
                    sectionsList?.map((value: any, index: number) => (
                        <IndividualSections key={value.id} sectionListIndex={index} data={value} sectionsList={sectionsList} setSectionsList={setSectionsList} />
                    ))
                }
            </div>

            {/* <CustomStyles isBanner={false} data={sectionsList[0]} sectionsList={sectionsList} sectionListIndex={0} setSectionsList={setSectionsList} /> */}

            <div className='flex gap-5 justify-end mt-5'>
                <button className='btn-primary' onClick={() => {
                    addBanner()
                }} type='submit'>Save Changes</button>

            </div>
        </div>
    )
}

export default AddBanner