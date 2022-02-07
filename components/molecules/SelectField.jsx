import React, { useState } from 'react';
import { SelectStyle } from '../atoms/select-style';

const SelectField = ({options, label, onChange, name}) => {
    return (
        <SelectStyle onChange={onChange} className='flex flex-col md:flex-row gap-6 w-full'>
            <div className='w-full md:basis-2/6 text-left md:text-right'>
                <label>{label}</label>
            </div>
            <div className='flex-wrap w-full md:basis-4/6 text-left md:text-right flex flex-row md:flex-row gap-3'>
                {options.map (option => (
                    <div key={option.id} value={option.id} className="mb-4 md:mb-0">
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