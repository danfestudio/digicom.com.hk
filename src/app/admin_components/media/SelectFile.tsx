"use client"
import Title from '@/app/components/Title'
import axios from '../../../axios/axios'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Check, File, FileText, Folder, Info, Play, PlayCircle, Trash, Trash2, VideoIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { setSelectedFolder } from '@/redux/features/mediaSlice'
import Swal from 'sweetalert2'
import LoadingScreen from '@/app/components/Loading/LoadingScreen'
import { startLoading, stopLoading } from '@/redux/features/loaderSlice'
import CreateFolderModal from '@/app/dashboard/media/CreateFolderModal'
import Modal from '../../components/Modal/Modal'

function SelectFile({ showModal, handleChanges, filepath, setShowModal, setSelectedFile, selectedFile, accept }: { showModal: any, setShowModal: any, filepath?: string, handleChanges?: any, setSelectedFile: any, selectedFile: any, accept?: 'image' | 'file' | 'video' | undefined }) {

    const [filterParam, setFilterParam] = useState<string | undefined>(undefined)

    const filterFiles = () => {
        switch (accept) {
            case 'image':
                setFilterParam("image")
                break;
            case 'file':
                setFilterParam("application")
                break;
            case 'video':
                setFilterParam("video")
                break;
            default:
                setFilterParam(undefined)
                break;
        }
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

    useEffect(() => {
        filterFiles()
    }, [])

    const uploadImageRef = useRef<any>(null)
    const [folderList, setFolderList] = useState([])
    const [mediaList, setMediaList] = useState([])
    const [dir_path, setDir_path] = useState([])
    const [showFolderModal, setShowFolderModal] = useState<boolean>(false)
    const [tempFile, setTempFile] = useState<any>('')


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


    return (
        <Modal showModal={showModal} setShowModal={setShowModal} classname='max-w-4xl'>

            {
                isLoading && <LoadingScreen />
            }

            {
                showFolderModal && <CreateFolderModal setShowModal={setShowFolderModal} showModal={showFolderModal} getMedia={getMedia} />
            }

            <Title title='Media'></Title>

            <div className='flex items-center gap-3 bg-blue-600 p-2 rounded mt-3 text-sm text-white font-semibold capitalize'>
                <Info />
                <label className='info'>Only {accept} are being shown</label>
            </div>

            <hr className='my-4' />
            <div className='shadow p-4 relative !pt-1 overflow-y-auto ' style={{
                maxHeight: "400px",
            }}>
                <div className='flex justify-between gap-4 sticky -top-1.5 pt-2 bg-white z-10 '>
                    <div className='flex gap-2 flex-wrap mb-3 opacity-70 '>
                        <button disabled={selectedFolder === ""} className='text-sm' onClick={() => {
                            dispatch(setSelectedFolder(""))
                            setTempFile('')
                        }}>Home Directory</button>

                        {
                            dir_path.map((value: any, index: number) => (
                                <div className='flex items-center gap-2' key={index}>
                                    <p className='font-semibold'>{`>`}</p>
                                    <button
                                        disabled={selectedFolder._id === value._id}
                                        key={index} className='text-sm' onClick={() => {
                                            dispatch(setSelectedFolder(value))
                                        }}>{value?.name}</button>
                                </div>
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
                                <button disabled={selectedFolder === value} onClick={() => {
                                    dispatch(setSelectedFolder(value))
                                    setTempFile('')
                                }} className='flex flex-col items-center group relative' key={index}>
                                    <div role='button' onClick={(e) => {
                                        e.stopPropagation()
                                        deleteFolder(value?._id)
                                    }} className='absolute top-0 right-0 shadow hidden group-hover:block bg-white border p-1 rounded-full'><Trash2 size={14} color='#c51515' strokeWidth={"2px"} /></div>
                                    <Folder size={40} fill='orange' color='orange' />
                                    <label className='mt-1'>{value?.folder_name}</label>
                                </button>
                            ))
                        }
                    </div>
                }
                {/* filter((type)=> type.file_details.mimetype) */}
                {
                    mediaList.length > 0 &&
                    <div className='grid md:grid-cols-6 lg:grid-cols-6 grid-cols-3 gap-3 my-5 text-xs md:text-sm'>

                        {
                            filterParam ?
                                mediaList.filter((file: any) => file.file_details.mimetype.includes(filterParam)).map((value: any, index: number) => (
                                    <div role='button' key={index} onClick={() => {
                                        if (tempFile === value) {
                                            setTempFile('')
                                        } else setTempFile(value)
                                    }} className={`flex flex-col relative items-center hover:bg-gray-100 overflow-hidden group ${tempFile === value ? "border-2 border-blue-400 rounded shadow" : " border-2 border-transparent"}`}>

                                        <button onClick={(e) => {
                                            e.stopPropagation()
                                            deleteImage(value?._id)
                                        }} className='absolute top-0 right-0 shadow hidden group-hover:block bg-white border p-1 rounded-full'><Trash2 size={14} color='#c51515' strokeWidth={"2px"} /></button>


                                        {tempFile === value ?
                                            <label className='absolute top-1 right-1 p-1 bg-blue-400'>
                                                <Check size={14} strokeWidth={"3px"} />
                                            </label>
                                            : ""}

                                        {
                                            value.file_details.mimetype.includes("image") ?
                                                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.path}`} className='h-32 rounded-md shadow p-1 w-full object-contain' />
                                                :
                                                renderIcons(value.file_details.mimetype)
                                        }

                                        <label className='mt-1 p-1'>{value?.name}</label>
                                    </div>
                                ))
                                :
                                mediaList.map((value: any, index: number) => (
                                    <div role='button' key={index} onClick={() => {
                                        if (tempFile === value) {
                                            setTempFile('')
                                        } else setTempFile(value)
                                    }} className={`flex flex-col relative items-center hover:bg-gray-100 overflow-hidden group ${tempFile === value ? "border-2 border-blue-400 rounded shadow" : " border-2 border-transparent"}`}>

                                        <button onClick={(e) => {
                                            e.stopPropagation()
                                            deleteImage(value?._id)
                                        }} className='absolute top-0 right-0 shadow hidden group-hover:block bg-white border p-1 rounded-full'><Trash2 size={14} color='#c51515' strokeWidth={"2px"} /></button>


                                        {tempFile === value ?
                                            <label className='absolute top-1 right-1 p-1 bg-blue-400'>
                                                <Check size={14} strokeWidth={"3px"} />
                                            </label>
                                            : ""}
                                        {
                                            value.file_details.mimetype.includes("image") ?
                                                <img src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.path}`} className='h-32 rounded-md shadow p-1 w-full object-contain' />
                                                :
                                                renderIcons(value.file_details.mimetype)
                                        }

                                        {/* <img src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.path}`} className='h-32 rounded-md shadow p-1 w-full object-contain' /> */}

                                        <label className='mt-1 p-1'>{value?.name}</label>
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

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 text-sm text-blue-600 font-semibold'>
                    <Info />
                    Click on a file to Select
                </div>
                <div className='flex mt-5 gap-3 justify-end'>
                    {
                        tempFile &&
                        <button className='btn-primary' onClick={() => {
                            setSelectedFile(tempFile)
                            if (handleChanges) {
                                handleChanges(filepath, tempFile)
                            }
                            setShowModal(false)
                        }}>Select</button>
                    }
                    <button className='btn-danger' onClick={() => {
                        setShowModal(false)
                    }}>Close</button>
                </div>
            </div>
        </Modal >
    )
}

export default SelectFile