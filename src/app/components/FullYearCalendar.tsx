'use client';

import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import multiMonthPlugin from '@fullcalendar/multimonth' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

import esLocale from '@fullcalendar/core/locales/es';
import neLocale from '@fullcalendar/core/locales/ne';
import listPlugin from '@fullcalendar/list';

function FullYearCalendar() {
    const [locale, setlocale] = useState('en')

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <select value={locale} onChange={(e) => {
                setlocale(e.target.value)
            }}>
                <option value={"ne"}>Nepali</option>
                <option value={"en"}>English</option>
            </select>
            <div className='min-h-screen w-full h-fit flex'>
                <div className='smallCalendar w-full lg:w-3/4'>
                    <FullCalendar
                        headerToolbar={{
                            start: 'title', // will normally be on the left. if RTL, will be on the right
                            center: '',
                            end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
                        }}
                        plugins={[multiMonthPlugin, interactionPlugin, listPlugin]}
                        initialView={"multiMonthYear"}
                        // initialView="listYear"
                        locales={[esLocale, neLocale]}
                        locale={locale}
                        editable={true}
                        selectable={true}
                        dateClick={(e) => console.log("Hello", e)}
                        droppable={true}
                        events={[
                            { title: 'event 1', date: '2023-04-01' },
                            { title: 'event 1', date: '2023-04-01' },
                            { title: 'event 1', date: '2023-04-01' },
                            { title: 'event 1', date: '2023-04-01' },
                            { title: 'event 1', date: '2023-04-01' },
                            { title: 'June Event', date: '2023-06-01' },
                            { title: 'event 2', date: '2023-04-02' }
                        ]}
                        eventClick={() => alert('Clicked on event')}
                        aspectRatio={3}
                        eventBackgroundColor='#0000FF'
                    // contentHeight={100}
                    />
                </div>

                <div className='h-full w-1/4'>
                    <FullCalendar
                        // headerToolbar={{
                        //     start: 'title', // will normally be on the left. if RTL, will be on the right
                        //     center: '',
                        //     end: 'today prev,next' // will normally be on the right. if RTL, will be on the left
                        // }}
                        plugins={[multiMonthPlugin, interactionPlugin, listPlugin]}
                        // initialView={"multiMonthYear"}
                        initialView="listYear"
                        locales={[esLocale, neLocale]}
                        locale={locale}
                        editable={true}
                        selectable={true}
                        dateClick={(e) => console.log("Hello", e)}
                        droppable={true}
                        events={[
                            { title: 'event 1', date: '2023-04-01'},
                            { title: 'event 1', date: '2023-04-01'},
                            { title: 'event 1', date: '2023-04-01'},
                            { title: 'event 1', date: '2023-04-01'},
                            { title: 'event 1', date: '2023-04-01'},
                            { title: 'June Event', date: '2023-06-01'},
                            { title: 'event 2', date: '2023-04-02'}
                        ]}
                        eventClick={() => alert('Clicked on event')}
                        eventBackgroundColor='#0000FF'
                    // contentHeight={100}
                    />
                </div>
            </div>
        </main>
    )
}

export default FullYearCalendar