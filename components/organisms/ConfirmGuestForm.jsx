import React, { useState } from 'react';
import { Form } from '../atoms/form';
import InputField from '../molecules/InputField';
import InputCheckbox from '../molecules/InputCheckbox';
import SelectField from '../molecules/SelectField';
import { INITIAL_GUEST } from '../../constants/initial-guest'
import { AGE_TYPES } from '../../constants/age-types';
import { MENU_TYPES_OPTIONS } from '../../constants/menu-types';
import TextAreaField from '../molecules/TextAreaField';
import { InputSubmit } from '../atoms/input-submit';
import firebase from '../../firebase/firebase';
import { Title1 } from '../atoms/title-1';

export default function ConfirmGuestForm() {
    const [guest, saveGuest] = useState(INITIAL_GUEST);
    const {name, surname1, surname2, age, allergies, menu, bus} = guest
    const confirmGuest = async(e) => {
        e.preventDefault()
        try {
            const guestCreated = await firebase.confirmGuest(guest);
            console.log('creado: ', guestCreated)
        } catch(error) {
            console.log('ERROR al crear el usuario: ', error);
        }
    }
    const handleChange = e => {
        console.log('Target: ', e.target.value)
        if (e.target.name === 'bus') {
            saveGuest({ ...guest, [e.target.name]: e.target.checked });
        } else {
            saveGuest({ ...guest, [e.target.name]: e.target.value });
        }
    }
    return (
        <Form onSubmit={confirmGuest} noValidate>
            <Title1>Formulario</Title1>
            <InputField
                type="text"
                value={name}
                label='Nombre:'
                name="name"
                onChange={handleChange}
            />
            <InputField
                type="text"
                value={surname1}
                label='Primer apellido:'
                name="surname1"
                onChange={handleChange}
            />
            <InputField
                type="text"
                value={surname2}
                label='Segundo apellido:'
                name="surname2"
                onChange={handleChange}
            />
            <TextAreaField
                value={allergies}
                label='Alergias e intolerancias'
                name="allergies"
                onChange={handleChange}
            />
            <SelectField
                name='age'
                label='Edad:'
                value={age}
                options={AGE_TYPES}
                onChange={handleChange}
            />
            <SelectField
                name='menu'
                label='Tipo de menú:'
                value={menu}
                options={MENU_TYPES_OPTIONS}
                onChange={handleChange}
            />
            <InputCheckbox
                value={bus}
                label='¿Vas a usar el autobús?'
                name="bus"
                id="bus"
                onChange={handleChange}
            />
            <div className='flex flex-row w-full justify-end'>
                <InputSubmit
                    type="submit"
                    value="Enviar"
                />
            </div>
        </Form>
    )
}