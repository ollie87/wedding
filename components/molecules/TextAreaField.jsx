import React from 'react';
import { TextAreaStyle } from '../atoms/text-area-style';

const TextAreaField = ({name, label, type, value, onChange, cols}) => {
    const defaultCols = 5
    const textAreaCols = cols ? cols : defaultCols
    return (
        <TextAreaStyle className='flex flex-row gap-6 w-full'>
            <div className='basis-2/6 text-right'>
                <label>{label}</label>
            </div>
            <div className='basis-4/6'>
                <textarea
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    cols={textAreaCols}
                />
            </div>
        </TextAreaStyle>
    )
}
export default TextAreaField