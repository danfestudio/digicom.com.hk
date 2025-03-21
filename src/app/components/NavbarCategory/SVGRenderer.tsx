import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SVGRenderer({ img }: { img: string }) {

    const [imgPath, setImgPath] = useState<string>('')

    useEffect(() => {
        const getImage = async () => {
            try {
                const response = await axios.get(img);
                // setImgPath(response.data);
                let modifiedSvgContent = response.data;

                // Override width, height, and color using string replacement
                modifiedSvgContent = response.data
                    .replace(/width="[0-9A-Fa-f]+"/g, 'width="10px"') // Override width
                    .replace(/height="[0-9A-Fa-f]+"/g, 'height="10px"') // Override height
                    .replace(/fill="#[0-9A-Fa-f]{6}"/g, `fill="${'white'}"`); // Override color
                setImgPath(modifiedSvgContent);

            } catch (error) {
                console.error('Error fetching image:', error);
                return null;
            }
        };

        getImage()

    }, [])


    return (
        <div className='text-red-600'
            dangerouslySetInnerHTML={{ __html: imgPath }}
            style={{ fill: 'red' }}
        />
    )
}

export default SVGRenderer