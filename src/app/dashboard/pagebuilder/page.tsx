"use client";

import DefaultStyles from '@/app/admin_components/DefaultStyles/DefaultStyles';
import IndividualSections from '@/app/admin_components/IndividualSections/IndividualSections';
import { useAppSelector } from '@/redux/store';
import axios from '../../../axios/axios';
import { Expand, Eye, Scale, Shrink } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setBreakpoint, setIsPreview } from '@/redux/features/CustomStyleSlice';

function PageBuilder() {
  const dispatch = useDispatch()

  const product = useAppSelector((state) => state.productSlice.value)
  const breakpoint = useAppSelector((state) => state.customStyleSlice.breakpoint)
  const isPreview = useAppSelector((state) => state.customStyleSlice.isPreview)

  const [sectionsList, setSectionsList] = useState<any>([])


  const [fullScreen, setFullscreen] = useState<boolean>(false)
  const [showDefaultStyles, setShowDefaultStyles] = useState<boolean>(false)

  const [divWidth, setDivWidth] = useState<number | string>(breakpoint ? breakpoint : '100%')

  const screenWidths = [
    1440,
    1024,
    768,
    425,
    320
  ]

  // const breakpoint = useAppSelector((state) => state.customStyleSlice.breakpoint)

  // console.log('breakpoint', breakpoint)

  const saveDesign = async () => {
    try {
      const result = await axios.post('page-style/' + product?.product_sku, {
        style_name: product?.product_sku,
        theme: sectionsList
      })
      if (result.data.success) {
        toast.success('Successfully Added')
        getDesign()
      }
    } catch (ERR) {
      console.log(ERR)
      toast.error('Failed To Save Design')
    }
  }

  const getDesign = async () => {
    try {
      const result = await axios.get('page-style/' + product?.product_sku)
      if (result.data.success) {
        setSectionsList(result.data.data.theme ? result.data.data.theme : [])
      }
    } catch (ERR) {
      console.log(ERR)
      toast.error('Failed To Fetch Design')
    }
  }

  useEffect(() => {
    getDesign()
  }, [])


  const handlePreview = () => {
    if (isPreview) {
      dispatch(setIsPreview(false))
    } else dispatch(setIsPreview(true))
  }

  const [targetWidth, setTargetWidth] = useState(1920)
  const [pageWidth, setPageWidth] = useState(document.documentElement.clientWidth)
  const [scalePercentage, setScalePercentage] = useState(100);

  // console.log('scalePercentage', scalePercentage)
  // console.log('pageWidth', pageWidth)

  useEffect(() => {
    const calculateScale = () => {
      const currentScreenWidth = document.documentElement.clientWidth;
      setPageWidth(currentScreenWidth);

      if (divWidth !== "100%") {
        const scale = currentScreenWidth / 1920;
        if (scale >= 1) {
          setScalePercentage(1);
        } else setScalePercentage(scale);
      } else setScalePercentage(1);

      // const scalePercentage = scale * 100;
    };

    // Calculate scale on initial render
    calculateScale();

    // Add event listener to recalculate on window resize
    window.addEventListener('resize', calculateScale);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateScale);
    };
  }, [breakpoint]);

  return (
    <div className=''  >
      {/* <button onClick={() => {
        setTargetWidth(1920)
      }}>1920p </button> */}
      <div className='bg-white sticky top-16 w-full text-sm flex justify-center z-[9] gap-3 p-3'>
        <button className={`${divWidth === '100%' ? "bg-blue-500 text-white border-gray-500" : " "} p-1 px-3 rounded-full border `} onClick={() => {
          dispatch(setBreakpoint(1440))
          setDivWidth('100%')
        }}>{'100%'}</button>
        {/* <button className={`${divWidth === 1875 ? "bg-blue-500 text-white border-gray-500" : " "} p-1 px-3 rounded-full border `} onClick={() => {
          dispatch(setBreakpoint(1440))
          setDivWidth(1875)
        }}>{'1920'}</button> */}
        {
          screenWidths.map((value, index) => (
            <button className={`${divWidth === value ? "bg-blue-500 text-white border-gray-500" : " "} p-1 px-3 rounded-full border `} key={index} onClick={() => {
              dispatch(setBreakpoint(value))
              setDivWidth(value)
            }}>{value}</button>
          ))
        }
      </div>

      {/* Controls */}
      <div className='h-screen w-full fixed top-0 -z-10' />
      {
        showDefaultStyles &&
        <DefaultStyles
          // showDefaultStyles={showDefaultStyles}
          setShowDefaultStyles={setShowDefaultStyles}
          setSectionsList={setSectionsList}
          sectionsList={sectionsList}
        />
      }

      <div className='flex fixed top-1 z-10 left-1/2 -translate-x-1/2 justify-between p-3 gap-3'>
        {
          !isPreview ?
            <>
              <button onClick={() => {
                setShowDefaultStyles(!showDefaultStyles)
              }} className='px-3 border rounded-full py-1 bg-white text-xs md:text-sm w-full min-w-max'>Add Section</button>
              <button onClick={() => {
                saveDesign()
              }} className=' bg-green-600 text-white px-3 border rounded-full py-1 text-xs md:text-sm  w-full min-w-max'>Apply Changes</button>
            </>
            :
            <button disabled onClick={() => {
              handlePreview()
            }} className={`flex items-center gap-3  px-3 border rounded-full py-1 text-xs md:text-sm  w-full min-w-max`}><Eye size={14} /> Preview Mode Is Active</button>
          // <label></label>
        }
        <button onClick={() => {
          handlePreview()
        }} className={`${isPreview ? 'bg-red-600' : "bg-blue-600"} flex items-center gap-3 text-white px-3 border rounded-full py-1 text-xs md:text-sm  w-full min-w-max`}>{!isPreview ? <><Eye size={14} />  Preview Mode</> : 'Turn off'}</button>
      </div>

      <div className='w-1/2 mx-auto' style={{
        // transform: `scale(${scalePercentage})`,
        // transformOrigin: "top center",
        // overflow: 'hidden',
        // maxWidth: pageWidth + 'px',
        width: divWidth === "100%" ? "100%" : divWidth + 'px'
      }}>
        <div
          // style={{
          //   transform: 'scale(0.9)'
          // }}
          className={`${fullScreen ? "fixed top-0 left-0 bg-white min-h-full transform scale-50 w-full z-20 max-h-screen overflow-auto" : "w-full bg-white "}`}>
          {/* <button onClick={() => {
            setFullscreen(!fullScreen)
          }}>{
              !fullScreen ?
                <Expand /> :
                <Shrink />
            } </button> */}

          {/* <div className='flex justify-between mb-5'>
            <button onClick={() => {
              setShowDefaultStyles(!showDefaultStyles)
            }} className='px-3 border rounded-full py-1 bg-white text-sm'>Add Section</button>
            <button onClick={() => {
              saveDesign()
            }} className=' bg-green-600 text-white px-3 border rounded-full py-1 text-sm '>Apply Changes</button>
          </div> */}

          {
            sectionsList?.map((value: any, index: number) => (
              <IndividualSections key={value.id} sectionListIndex={index} data={value} sectionsList={sectionsList} setSectionsList={setSectionsList} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default PageBuilder