"use client"
import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import axios from '../../axios/axios';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';
import Modal from './Modal/Modal';
import { X } from 'lucide-react';

function Events() {
    const dispatch = useDispatch<AppDispatch>()
    const [eventData, setEventData] = useState<any>([])
    const getEventDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('event/')
            if (result.data.success) {
                // setEventData(result.data.data.data)

                const newData = result.data.data.data.map((value: any) => {
                    return {
                        // ...value,
                        end: value.endDate,
                        start: value.startDate,
                        createdAt: value.createdAt,
                        description: value.description,
                        eventSlug: value.eventSlug,
                        images: value.images,
                        is_deleted: value.is_deleted,
                        title: value.title,
                        type: value.type,
                        updatedAt: value.updatedAt,
                        __v: value.__v,
                        _id: value._id,
                    }
                })
                setEventData(newData)
            }
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to fetch Event Data')
            setTimeout(() => {
                dispatch(stopSkeletonLoad())
            }, 200)
        }
    }

    useEffect(() => {
        getEventDetails()
    }, [])

    const formatDate = (date: Date | string) => {
        if (!date) return ''; // Handle null or undefined dates
        return dayjs(date).format('MMM D, YYYY - h:mm a'); // Format the date as "August 6, 2023"
    };

    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedEvent, setSelectedEvent] = useState<any>()

    return (
        <>
            {
                showModal &&
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <div className='relative bg-white p-6 max-w-2xl mx-auto rounded'>
                        <button className='absolute mb-2 top-1 right-1' onClick={() => setShowModal(false)}>
                            <X size={20}/>
                        </button>
                        <div className='flex flex-col mt-2'>
                            {
                                selectedEvent.extendedProps.images.length > 0 ?
                                    <img className='object-center mb-4' style={{
                                        maxHeight: "350px",
                                        width: "auto",
                                        objectFit: "cover"
                                    }} src={`${process.env.NEXT_PUBLIC_IMG_URL}${selectedEvent.extendedProps.images[0]}`} />
                                    : ""
                            }
                            <strong className='text-2xl'>{selectedEvent.title}</strong>
                            <label className='font-semibold text-sm opacity-60'>{selectedEvent.extendedProps.type}</label>
                            <div className='mt-4 flex flex-wrap gap-5'>
                                <label className='text-sm'>From: <b>{formatDate(selectedEvent.start || "")}</b></label>
                                <label className='text-sm'>To: <b>{formatDate(selectedEvent.end || "")} </b></label>
                            </div>
                            <p className='my-4'>{selectedEvent.extendedProps?.description}</p>
                        </div>
                    </div>
                </Modal>
            }

            <div className='max-w-7xl mx-auto p-5 flex items-center justify-center w-full' id='event'>
                <div className='h-full w-full'>
                    <FullCalendar
                        headerToolbar={{
                            start: 'title', // will normally be on the left. if RTL, will be on the right
                            center: '',
                            end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
                        }}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView={"dayGridMonth"}
                        // initialView="listYear"
                        editable={false}
                        // selectable={true}
                        // dateClick={(e) => console.log("Hello", e)}
                        // droppable={true}
                        events={eventData}
                        // events={[
                        //     { title: 'event 1', start: '2023-09-23T14:05:00.000Z', end: "2023-09-24T12:15:00.000Z" },
                        //     { title: 'event 1', date: '2023-09-23T14:05:00.000Z' },
                        //     { title: 'June Event', date: '2023-06-01' },
                        // ]}
                        eventClick={(el) => {
                            setShowModal(true)
                            setSelectedEvent(el.event)

                            // Swal.fire({
                            //     title: `<strong class="text-left w-full flex">${el.event.title}</strong>`,
                            //     // icon: 'info',

                            //     html:
                            //         `<div 
                            //             style=" text-align: left; font-size: 14px; margin-top: -3px; margin-bottom: 5px;">
                            //              <b>${el.event.extendedProps.type}</b>
                            //         </div>`+

                            //         `<div 
                            //             style=" text-align: left; font-size: 14px; margin-bottom: 20px;">
                            //              From <b>${formatDate(el.event.start || "")}</b> to <b>${formatDate(el.event.end || "")}</b>
                            //         </div>`+

                            //         `<div style="text-align: left;">
                            //          ${el.event.extendedProps.description}
                            //         </div>`,
                            //     imageUrl: `${process.env.NEXT_PUBLIC_API_URL}${el.event.extendedProps.images[0]}`,
                            //     imageWidth: "auto",
                            //     imageHeight: "300",
                            //     imageAlt: 'Custom image',

                            //     showCloseButton: true,
                            //     showCancelButton: false,
                            //     focusConfirm: false,
                            //     showConfirmButton: false
                            //     // confirmButtonText:
                            //     //     '<i class="fa fa-thumbs-up"></i> Great!',
                            //     // confirmButtonAriaLabel: 'Thumbs up, great!',
                            // })
                        }
                        }
                        // aspectRatio={2}
                        height={600}
                        eventBackgroundColor='#0000FF'
                    // contentHeight={100}
                    />
                </div>
            </div>
        </>
    )
}

export default Events