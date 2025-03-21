import { Field } from 'formik';
import React, { useState } from 'react'

function CategoryDropdown({ category, categoryIndex, formikProps, setTempCategory }: {
    category?: any, categoryIndex: any, formikProps: any, setTempCategory: any
}) {

    // setCategoryIndex={setCategoryIndex} categoryIndex={categoryIndex}
    const [selectedCategory, setSelectedCategory] = useState<any>()
    const [changed, setChanged] = useState<any>()

    const handleCategoryChange = (categoryId: string) => {
        const selected = category && category?.find((value: any) => value._id === categoryId);
        setSelectedCategory(selected || null);

        formikProps.setFieldValue('category', [
            ...formikProps.values.category.slice(0, categoryIndex + 1),
        ]);

        formikProps.setFieldValue(`category[${categoryIndex}]`, categoryId);

        extractFinalValue(categoryId)

        setTimeout(() => {
            setChanged(false)
        }, 100)
    };

    const extractFinalValue = (categoryId: any) => {

        const finalCat = category.filter((value: any) => {
            if (categoryId === value._id) {
                return value
            }
        })
        setTempCategory(finalCat[0])
    }

    return (
        <>
            <Field
                required
                as="select" name={`category[${categoryIndex}]`} value={formikProps.values.category[categoryIndex]} className='inputfield' onChange={(e: any) => {
                    setSelectedCategory('')
                    setChanged(true)
                    formikProps.handleChange(e)
                    handleCategoryChange(e.target.value)
                    // setTempCategory(e.target.value)
                }}>
                <option value="">Select a category</option>

                {category && category?.map((value: any) => (
                    <option key={value._id} value={value._id}>
                        {value.name}
                    </option>
                ))}
            </Field >
            {
                (!changed && selectedCategory?.children?.length) > 0 && <CategoryDropdown setTempCategory={setTempCategory} category={selectedCategory.children} categoryIndex={categoryIndex + 1} formikProps={formikProps} />
            }
        </>

    )
}

export default CategoryDropdown