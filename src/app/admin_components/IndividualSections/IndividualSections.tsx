'use client';
import React from 'react'
import DefaultStyle1 from '../DefaultStyles/DefaultStyleOptions/DefaultStyle1';
import DefaultStyle3 from '../DefaultStyles/DefaultStyleOptions/DefaultStyle3';
import CustomStyles from '../custom_styles/CustomStyles';

function IndividualSections({ sectionListIndex, data, setSectionsList, sectionsList }: { sectionListIndex: number, data: any, setSectionsList: any, sectionsList: any }) {

    const renderStyledDiv = (type: string) => {
        try {
            switch (type) {
                case 'defaultStyle1':
                    return (
                        <DefaultStyle1 data={data} sectionsList={sectionsList} sectionListIndex={sectionListIndex} setSectionsList={setSectionsList} />
                    )
                case 'defaultStyle2':
                    return (
                        <DefaultStyle1 data={data} sectionsList={sectionsList} sectionListIndex={sectionListIndex} setSectionsList={setSectionsList} />
                    )
                case 'defaultStyle3':
                    return (
                        <DefaultStyle3 data={data} sectionsList={sectionsList} sectionListIndex={sectionListIndex} setSectionsList={setSectionsList} />
                    )
                case 'defaultStyle4':
                    return (
                        <DefaultStyle3 data={data} sectionsList={sectionsList} sectionListIndex={sectionListIndex} setSectionsList={setSectionsList} />
                    )
                default:
                    return (
                        <CustomStyles data={data} sectionsList={sectionsList} sectionListIndex={sectionListIndex} setSectionsList={setSectionsList} />
                    )
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    return (
        <>
            {renderStyledDiv(data?.name)}
        </>
    )
}

export default IndividualSections