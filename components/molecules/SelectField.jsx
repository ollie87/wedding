import React, { useState } from 'react';
import { SelectStyle } from '../atoms/select-style';

const SelectField = ({options, label, onChange, name}) => {
    return (
        <SelectStyle onChange={onChange} className='flex flex-row gap-6 w-full'>
            <div className='basis-2/6 text-right'>
                <label>{label}</label>
            </div>
            <div className='basis-4/6 text-right flex flex-row gap-3'>
                {options.map (option => (
                    <div key={option.id} value={option.id}>
                        <input 
                            type='radio'
                            name={name}
                            id={`${name}-${option.id}`}
                            value={option.id}
                        />
                        <label htmlFor={`${name}-${option.id}`}>{option.name}</label>
                    </div>
                ))}
            </div>
        </SelectStyle>
    )
}
export default SelectField