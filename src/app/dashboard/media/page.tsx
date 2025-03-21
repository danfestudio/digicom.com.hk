"use client"
import Title from '@/app/components/Title'
import axios from '../../../axios/axios'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import CreateFolderModal from './CreateFolderModal'
import { Edit, FileText, Folder, PlayCircle, Trash, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { setSelectedFolder } from '@/redux/features/mediaSlice'
import Swal from 'sweetalert2'
import LoadingScreen from '@/app/components/Loading/LoadingScreen'
import { startLoading, stopLoading } from '@/redux/features/loaderSlice'
import EditFolderModal from './EditFolderModal'
import Link from 'next/link'

function Media() {

    const uploadImageRef = useRef<any>(null)
    const [folderList, setFolderList] = useState([])
    const [mediaList, setMediaList] = useState([])
    const [dir_path, setDir_path] = useState([])
    const [showFolderModal, setShowFolderModal] = useState<boolean>(false)
    const [showEditFolderModal, setShowEditFolderModal] = useState<boolean>(false)
    const [folderForEdit, setFolderForEdit] = useState<any>('')

    const dispatch = useDispatch<AppDispatch>()
    const selectedFolder = useAppSelector((state) => state.mediaSlice.selectedFolder)
    const isLoading = useAppSelector((state) => state.loaderSlice.value)

    const imageHandler = (images: any) => {
        const imageList = [...images]
        setTimeout(() => {
            uploadImage(imageList)
        }, 300)
    }

    const openFolderModal = () => {
        setShowFolderModal(true)
    }

    const closeFolderModal = () => {
        setShowFolderModal(true)
    }

    const uploadImage = async (imageList: any) => {
        try {
            dispatch(startLoading())

            const formData = new FormData

            for (let value in imageList) {
                formData.append('files', imageList[value])
            }
            if (selectedFolder._id) {
                formData.append('folder', selectedFolder._id)
            }

            let result = await axios.post('media', formData)

            if (result.data.success) {
                toast.success('Images Uploaded')
                dispatch(stopLoading())
                getMedia()
            }
        } catch (ERR: any) {
            toast.error(ERR.response.data.message)
            console.log(ERR)
            dispatch(stopLoading())
        }
    }

    const getMedia = async () => {
        try {
            dispatch(startLoading())
            let result = await axios.get('/media/folder', {
                params: {
                    folder: selectedFolder
                }
            })

            if (result.data.success) {
                setFolderList(result.data.data.folder)
                setMediaList(result.data.data.media)
                setDir_path(result.data.data.path)
                dispatch(stopLoading())
            }
        } catch (ERR: any) {
            toast.error(ERR.response.data.message)
            console.log(ERR)
            dispatch(stopLoading())
        }
    }

    const deleteFolder = async (id: string) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let result = await axios.delete('media/folder/' + id)
                    if (result.data.success) {
                        getMedia()
                    }
                }
            })
        } catch (ERR) {
            console.log(ERR)
            dispatch(stopLoading())

        }
    }

    const deleteImage = async (id: string) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let result = await axios.delete('media/' + id)
                    if (result.data.success) {
                        getMedia()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
            dispatch(stopLoading())

        }
    }

    useEffect(() => {
        getMedia()
    }, [selectedFolder])

    const editFolder = (value: any) => {
        dispatch(setSelectedFolder(value))
        setShowEditFolderModal(true)
    }

    const renderIcons = (type: any) => {
        switch (true) {
            case type.includes('video'):
                return <PlayCircle size={40} />
            case type.includes('application'):
                return <FileText size={40} />
            default:
                break;
        }
    }

    return (
        <div className=''>

            {
                isLoading && <LoadingScreen />
            }

            {
                showFolderModal && <CreateFolderModal setShowModal={setShowFolderModal} showModal={showFolderModal} getMedia={getMedia} />
            }
            {
                showEditFolderModal && <EditFolderModal setShowModal={setShowEditFolderModal} showModal={showEditFolderModal} getMedia={getMedia} folderForEdit={folderForEdit} />
            }

            <Title title='Media'></Title>

            <hr className='my-4' />
            <div className='card mt-4'>
                <div className='flex justify-between gap-4'>
                    <div className='flex gap-2 flex-wrap mb-3 opacity-70 '>
                        <button disabled={selectedFolder === ""} className='text-sm' onClick={() => {
                            dispatch(setSelectedFolder(""))
                        }}>Home Directory</button>

                        {
                            dir_path.map((value: any, index: number) => (
                                <>
                                    <p className='font-semibold'>{`>`}</p>
                                    <button
                                        disabled={selectedFolder._id === value._id}
                                        key={index} className='text-sm' onClick={() => {
                                            dispatch(setSelectedFolder(value))
                                        }}>{value?.name}</button>
                                </>
                            ))
                        }
                    </div>
                    <div className='flex gap-3'>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files) {
                                imageHandler(e.target.files)
                            }
                        }} ref={uploadImageRef} type='file' multiple className='hidden' />

                        <button className='btn-primary min-w-max text-sm' onClick={() => {
                            uploadImageRef.current.click()
                        }}>Upload + </button>

                        <button className='btn-primary min-w-max text-sm' onClick={() => {
                            openFolderModal()
                        }}>Create Folder</button>
                    </div>
                </div>

                {
                    folderList.length > 0 &&
                    <div className='grid lg:grid-cols-10 md:grid-cols-8 grid-cols-4 text-xs md:text-sm gap-3 my-5'>
                        {
                            folderList.map((value: any, index: number) => (
                                <div role='button' onClick={() => {
                                    dispatch(setSelectedFolder(value))
                                }} className='flex flex-col items-center group relative' key={index}>
                                    <button onClick={(e) => {
                                        e.stopPropagation()
                                        deleteFolder(value?._id)
                                    }} className='absolute top-0 right-3 shadow hidden group-hover:block bg-white border p-2 rounded-full'>
                                        <Trash2 size={12} color='#c51515' strokeWidth={"2px"} />
                                    </button>
                                    <button onClick={(e) => {
                                        e.stopPropagation()
                                        setShowEditFolderModal(true)
                                        setFolderForEdit(value)
                                        // dispatch(setSelectedFolder(value))
                                    }} title='Edit Folder' className='absolute text-blue-500 top-0 left-3 shadow hidden group-hover:block bg-white border p-2 rounded-full'>
                                        <Edit size={12} strokeWidth={"2px"} />
                                    </button>

                                    <Folder size={40} fill='orange' color='orange' />
                                    <label className='mt-1 text-center'>{value?.folder_name}</label>
                                </div>
                            ))
                        }
                    </div>
                }

                {
                    mediaList.length > 0 &&
                    <div className='grid md:grid-cols-6 lg:grid-cols-8 grid-cols-3 gap-3 my-5 text-xs md:text-sm'>
                        {
                            mediaList.map((value: any, index: number) => (
                                <div className='flex flex-col  relative items-center hover:bg-gray-100 overflow-hidden group' key={index}>
                                    <button onClick={() => {
                                        deleteImage(value?._id)
                                    }} className='absolute top-2 right-3 shadow hidden group-hover:block bg-white border p-2 rounded-full'><Trash2 size={14} color='#c51515' strokeWidth={"2px"} /></button>
                                    {/* <img src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.path}`} className='h-32 bg-gray-100 rounded-md shadow p-1 w-full object-contain' /> */}
                                    {
                                        value.file_details.mimetype.includes("image") ?
                                            <img src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.path}`} className='h-32 rounded-md shadow p-1 w-full object-contain' />
                                            :
                                            <Link target='blank' title='Click to view in new tab' href={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.path}`} className='h-32 grid place-items-center rounded-md shadow p-1 w-full border'>
                                                {renderIcons(value.file_details.mimetype)}
                                            </Link>
                                    }
                                    <label className='mt-1 p-1 w-28 whitespace-break-spaces text-ellipsis text-center overflow-hidden'>{value?.name}</label>
                                </div>
                            ))
                        }
                    </div>
                }

                {
                    (mediaList.length === 0 && folderList.length === 0) &&
                    < p className='text-red-500 font-semibold'>No Files</p>

                }
            </div>
        </div >
    )
}

export default Media