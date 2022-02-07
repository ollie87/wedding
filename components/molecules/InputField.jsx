import React from 'react';
import { InputStyle } from '../atoms/input-style';

const InputField = ({name, label, type, value, onChange}) => {
    return (
        <InputStyle className='flex flex-col md:flex-row gap-6 w-full'>
            <div className='basis-2/6 text-left md:text-right'>
                <label htmlFor={label}>{label}</label>
            </div>
            <div className='basis-4/6'>
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </div>
        </InputStyle>
    )
}
export default InputField