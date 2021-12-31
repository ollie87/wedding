import React, { useEffect, useState } from 'react';
import { CheckboxStyle } from '../atoms/checkbox-style';

const InputCheckbox = ({name, id, label, value, onChange}) => {
    return (
        <CheckboxStyle className='flex flex-row gap-6 w-full'>
            <div className='basis-2/6 text-right'>
                <label htmlFor={id}>{label}</label>
            </div>
            <div className='basis-4/6'>
                <div className="container">
                    <input
                        type='checkbox'
                        value={value}
                        name={name}
                        id={id}
                        onChange={onChange}
                    />
                    <label className="checkmark" htmlFor={id}></label>
                </div>
            </div>
        </CheckboxStyle>
    )
}
export default InputCheckbox