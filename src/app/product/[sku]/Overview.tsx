import CustomStyles from '@/app/components/clientStyleComponents/ClientStyleOptions/CustomStyles'
import DefaultStyle1 from '@/app/components/clientStyleComponents/ClientStyleOptions/DefaultStyle1'
import DefaultStyle3 from '@/app/components/clientStyleComponents/ClientStyleOptions/DefaultStyle3'
import React from 'react'

function Overview({ pageStyle }: { pageStyle: any }) {

    const renderStyledDiv = (value: any) => {
        try {
            switch (value.name) {
                case 'defaultStyle1':
                    return (
                        <DefaultStyle1 data={value} />
                    )
                case 'defaultStyle2':
                    return (
                        <DefaultStyle1 data={value} />
                    )
                case 'defaultStyle3':
                    return (
                        <DefaultStyle3 data={value} />
                    )
                case 'defaultStyle4':
                    return (
                        <DefaultStyle3 data={value} />
                    )
                default:
                    return (
                        <CustomStyles data={value} />
                    )
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    return (
        <>

            {
                pageStyle?.map((value: any, index: any) => (
                    <div key={index} className='bg-white'>
                        {renderStyledDiv(value)}
                    </div>
                ))
            }
        </>
    )
}

export default Overview