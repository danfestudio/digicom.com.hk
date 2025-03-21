import React, { useEffect, useRef } from 'react'
import '@easylogic/colorpicker/dist/colorpicker.css'
import ColorPickerUI from '@easylogic/colorpicker'

function Gradientpicker({ setColor, color }: {
  setColor: any, color: string
}) {
  let colorPickerWrapperRef = useRef(null);

  useEffect(() => {
    const gradientPicker = ColorPickerUI.createGradientPicker({
      position: 'inline',
      container: colorPickerWrapperRef.current,
      gradient: color ? color : 'linear-gradient(90deg, white 0%,black 100%)',
      onChange: (gradientString: any) => {
        setColor(gradientString);
      },
    });

    // set value
    // gradientPicker.setValue('radial-gradient(circle, white 0%, black 100%)');

    // get value
    const gradientString = gradientPicker.getValue();

    // Cleanup when the component is unmounted
    return () => {
      gradientPicker.destroy();
    };
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div ref={colorPickerWrapperRef}>
      {/* The color picker will be initialized inside this div */}
    </div>

  )
}

export default Gradientpicker