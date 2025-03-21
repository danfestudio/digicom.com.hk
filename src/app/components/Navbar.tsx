"use client";
import axios from '../../axios/axios';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '@/redux/store';
import { getPreferences } from '@/redux/features/preferenceSlice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import NavbarCategory from './NavbarCategory/NavbarCategory';
import SearchModal from './SearchModal/SearchModal';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import SearchDropdown from './SearchDropdown/SearchDropdown';

function Navbar() {
  // const dispatch = useDispatch()

  const [show, setShow] = useState<boolean>()
  const [showCategory, setShowCategory] = useState<boolean>(false)
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false)
  const [selectedCategoryData, setSelectedCategoryData] = useState<any>('')
  const [navbarList, setNavbarList] = useState<any>([])
  const navbarList1 = useAppSelector((state) => state.preferenceSlice.navbarData)
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getNavbarLinks = async () => {
    try {
      let result = await axios.get('category', {
        params: {
          show_in_nav: true
        }
      })
      if (result.data.success) {
        setNavbarList(result.data.data)
      }
    } catch (ERR) {
      console.log(ERR)
    }
  }

  useEffect(() => {
    getNavbarLinks()
    // dispatch(getPreferences())
    setNavbarList(navbarList1)
  }, [])

  const renderChildren = useCallback((parent: any, parentName: string, index1?: number) => {

    return <div className='mb-10'>
      {
        parentName &&
        <Link onClick={() => {
          setSelectedCategoryData('')
          setShowCategory(false)
        }} href={`/category/${parent._id}`} className={`font-semibold parentName${index1}`}>{parentName}</Link>
      }
      {parent?.children?.length > 0 &&
        parent.children.map((child: any, index: number) => (
          <Link onClick={() => {
            setSelectedCategoryData('')
            setShowCategory(false)
          }} href={`/category/${parent._id}`} key={index}>
            <label className='font-semibold'>
              {child.name}
            </label>
            {/* {renderChildren(child, child.name, index1)} */}
          </Link>
        ))
      }
    </div>
  }, [])

  return (
    <>
      {/* {
        showSearchModal && <SearchModal showModal={showSearchModal} setShowModal={setShowSearchModal} />
      } */}

      {/*Category Overlay */}
      <AnimatePresence >
        {
          (selectedCategoryData || showSearchModal) &&
          <motion.div
            onClick={() => {
              console.log(setShowSearchModal(false))
            }}
            key={selectedCategoryData._id}
            initial={{ opacity: 0, height: '100%' }}
            animate={{ opacity: 1, height: '100%' }}
            exit={{ opacity: 0, height: '100%' }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className='fixed top-0 left-0 h-screen w-full  bg-black/10 isolate backdrop-blur-sm z-10' />
        }
      </AnimatePresence>

      <div className='fixed w-full top-0 z-10 bg-black bg-opacity-80 backdrop-blur-[5px] h-[52px]'>
        <div className='z-20 w-full relative '>
          <div className='container flex w-full justify-between items-center mx-auto px-6'>
            {/* logo */}
            <Link href={'/'} className='py-4 font-bold text-white  uppercase'>
              <Image src={'/logo.png'} alt='logo' priority height={26} width={120} />
            </Link>
            {/* MID */}
            <div className='hidden lg:block '>
              <ul className='flex items-center gap-5 '>
                {
                  navbarList?.map((value: any, index: number) => (
                    <div
                      key={value._id}
                      role='button'
                      onMouseLeave={() => {
                        setSelectedCategoryData('')
                        setShowCategory(false)
                      }}
                      className='group'>
                      <AnimatePresence mode="sync">
                        {selectedCategoryData._id === value._id && (
                          <motion.div
                            key={selectedCategoryData._id}
                            className='text-white absolute top-[52px] left-0 bg-[#0c0b0b] bg-opacity-[0.88] shadow w-full min-h-fit z-0 '
                            initial={{ y: 0, opacity: 0, height: 0 }}
                            animate={{ y: 0, opacity: 1, height: 'fit-content' }}
                            exit={{ y: 0, opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut", height: '800px' }}
                          >
                            <NavbarCategory selectedCategoryData={selectedCategoryData} setSelectedCategoryData={setSelectedCategoryData} setShowCategory={setShowCategory} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <Link
                        onMouseOver={() => {
                          setSelectedCategoryData(value)
                          setShowCategory(true)
                          setShowSearchModal(false)
                        }}
                        onClick={() => {
                          setSelectedCategoryData('')
                          setShowCategory(false)
                        }}
                        href={`/category/${value.slug}`}
                        key={index}
                        className={`px-3 py-[15px] capitalize text-sm flex gap-2 items-center border-b-2 text-white ${selectedCategoryData._id === value._id ? ` border-green-600 !text-green-600` : "border-transparent"} font-extralight tracking-wider`}>{value.name}
                        {/* <ChevronDown size={15} />  */}
                      </Link>
                    </div>
                  ))
                }
              </ul>
            </div>

            {/* End */}
            <div className='py-2 flex items-center justify-end gap-2'>

              <button onMouseOver={() => {
                if (inputRef.current) {
                  inputRef.current.focus()
                }
                setShowSearchModal(true)
              }} className='uppercase tracking-widest font-base text-sm px-3 text-green-600 '>
                <Search size={20} />
              </button>

              <SearchDropdown setShowSearchModal={setShowSearchModal} showSearchModal={showSearchModal} inputRef={inputRef} />

              {/* 
              <motion.div
                className='flex relative'
                ref={containerRef}
                initial={["open", "closed"]}
                animate={showSearchModal ? "open" : "closed"}
              >
                <motion.div className=' absolute right-0 -top-4' variants={{
                  open: {
                    width: '230px',
                    zIndex: "1",
                    overflow: "hidden",
                  },
                  closed: {
                    width: '0px',
                    overflow: "hidden",
                    zIndex: "-1"
                  }
                }}>

                  <input
                    type='search'
                    ref={inputRef}
                    placeholder='Search Products'
                    className='w-full text-xs p-2 rounded'
                    onChange={(e) => {
                      handleInputChangeDebounced(e.target.value)
                    }}
                  />

                  {keyword &&
                    <div className="card !p-2 divide-y-2 overflow-auto" style={{
                      maxHeight: "200px",
                    }}>
                      {
                        productData?.length > 0 ?
                          productData?.map((product: any) => (
                            <div key={product?._id} role='button' onClick={() => {
                              router.push('/product/' + product.product_sku)
                              setKeyword('')
                              setShowSearchModal(false)
                              if (inputRef.current) {
                                inputRef.current.value = ""
                              }
                            }} className=' text-left flex items-center gap-4 p-2 rounded hover:shadow hover:bg-gray-100'>
                              <Image
                                className='object-contain'
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${product.front_image.path}`}
                                alt='Product Image'
                                width={30}
                                height={30}
                              />
                              <div>
                                <h3 className='font-semibold leading-4 text-sm'>{product.product_name}</h3>
                              </div>
                            </div>
                          ))
                          :
                          <div className='col-span-full '>
                            {keyword ?
                              <label className='text-red-700 bg-white p-4 text-sm'>Found No Results for "{keyword}"</label>
                              :
                              ""
                            }
                          </div>
                      }

                    </div>
                  }
                </motion.div>
              </motion.div> */}

              {/* {
                showSearchModal ?
                  <button onClick={() => {
                    setShowSearchModal(false)
                    setKeyword('')
                    if (inputRef.current) {
                      inputRef.current.value = ""
                    }
                  }} className='uppercase tracking-widest font-base text-sm px-3 text-green-600 '>
                    <X size={20} />
                  </button>
                  :
                  <button onClick={() => {
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                    setShowSearchModal(true)
                  }} className='uppercase tracking-widest font-base text-sm px-3 text-green-600 '>
                    <Search size={20} />
                  </button>
              } */}

              <button type='button' className='block lg:hidden text-white' onClick={() => setShow(true)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>

        {/* <div className='text-white -translate-y-full group-hover:translate-y-full -z-20 bg-gray-900 fixed w-full left-0'>
        {renderChildren(selectedCategoryData)}
      </div> */}


        {/*Mobile responsive sidebar*/}
        < div
          className={show ? "w-full min-h-screen top-0 fixed z-40 transform  translate-x-0 " : "w-full h-full absolute z-0 transform -translate-x-full"}
          id="mobile-nav" >
          <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() =>
            setShow(false)
          }
          />
          <div className="fixed h-screen top-0 overflow-auto z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-black text-white lg:hidden transition duration-150 ease-in-out">
            <div className="flex flex-col h-full w-full">
              <div className="flex items-center justify-between px-8">
                <div className="h-16 w-full flex items-center">
                  <Image src={'/logo.png'} alt='logo' priority height={30} width={140} />
                </div>
                <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-x"
                    width={20} height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>

              <ul aria-orientation="vertical" className="px-6 overflow-auto flex flex-col">
                {
                  navbarList?.map((value: any, index: number) => (
                    // <Link href={`/#${value.id}`} className='px-3 py-2 capitalize'>{value.name}</Link>
                    <Link key={index} onClick={() => setShow(false)} href={`/category/${value.slug}`} className='px-3 py-2'>{value.name}</Link>
                  ))
                }

                {/* <Link href={"/"} onClick={() => { setShow(false), scrollToTop() }} className='px-3 py-2'>Home</Link>
              <li className='px-3 py-2'>Sustainability</li>
              <Link onClick={() => setShow(false)} href={"/#testimonials"} className='px-3 py-2'>Testimonials</Link>
              <li className='px-3 py-2'>Speaking</li>
              <Link onClick={() => setShow(false)} href={"/#events"} className='px-3 py-2'>Events</Link>
              <Link onClick={() => setShow(false)} href={"/#"} className='px-3 py-2'>About</Link> */}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className='bg-black h-[52px]'></div>

    </>
  )
}

export default Navbar