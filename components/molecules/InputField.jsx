import React from 'react';
import { ErrorStyle } from '../atoms/error';
import { InputStyle } from '../atoms/input-style';

const InputField = ({name, label, type, value, onChange, error}) => {
    return (
        <InputStyle className='w-full'>
            <div className='flex flex-col md:flex-row gap-6 '>
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
            </div>
            { error && <ErrorStyle>{ error }</ErrorStyle> }
        </InputStyle>
    )
}
export default InputField