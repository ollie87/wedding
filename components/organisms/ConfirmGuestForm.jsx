import React, { useState } from 'react';
import { Form } from '../atoms/form';
import InputField from '../molecules/InputField';
import InputCheckbox from '../molecules/InputCheckbox';
import SelectField from '../molecules/SelectField';
import { INITIAL_GUEST } from '../../constants/initial-guest';
import { AGE_TYPES } from '../../constants/age-types';
import { MENU_TYPES_OPTIONS } from '../../constants/menu-types';
import TextAreaField from '../molecules/TextAreaField';
import { InputSubmit } from '../atoms/input-submit';
import firebase from '../../firebase/firebase';
import { Title1 } from '../atoms/title-1';
import styled from 'styled-components';
import Image from 'next/image';
import formImage from '../../public/img/espiga_formulario.svg';
import { GuestList } from '../atoms/guest-list';
import { ButtonNewGuest } from '../atoms/button-new-guest';
import { INITIAL_ERRORS } from '../../constants/initial-errors';

const ImageContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 1536px;
    z-index: -1;
    @media (max-width: 768px) {
        display: none;
    }
`

export default function ConfirmGuestForm() {
    const [guest, saveGuest] = useState(INITIAL_GUEST);
    const [errors, saveError] = useState(INITIAL_ERRORS)
    const {name, surname1, surname2, age, allergies, menu, bus} = guest
    const [isFormSending, saveIsFormSending] = useState(false)
    const isFormErrors = () => {
        let hasError = false
        const requiredText = '* Campo obligatorio'
        let localErrors = INITIAL_ERRORS
        saveError(INITIAL_ERRORS)
        console.log('Validacion errores')
        if (!guest.name) {
            localErrors = {...localErrors, name: requiredText }
            hasError = true
        }
        if (!guest.surname1) {
            localErrors = {...localErrors, surname1: requiredText }
            hasError = true
        }
        if (!guest.age) {
            localErrors = {...localErrors, age: requiredText }
            hasError = true
        }
        if (!guest.menu) {
            localErrors = {...localErrors, menu: requiredText }
            hasError = true
        }
        saveError(localErrors)
        return hasError
    }
    const confirmGuest = async(e) => {
        e.preventDefault()
        try {
            if (isFormErrors()) {
                return
            }
            const guestCreated = await firebase.confirmGuest(guest);
            saveIsFormSending(true)
        } catch(error) {
            console.log('ERROR al crear el usuario: ', error);
        }
    }
    const handleChange = e => {
        if (e.target.name === 'bus') {
            saveGuest({ ...guest, [e.target.name]: e.target.checked });
        } else {
            saveGuest({ ...guest, [e.target.name]: e.target.value });
        }
    }
    const getBus = () => {
        return guest.bus ? 'Si' : 'No'
    }
    const getAge = () => {
        if (!guest.age) {
            return ''
        }
        const age = AGE_TYPES.find(age => age.id === Number(guest.age))
        if (age) {
            return age.name
        } else {
            return ''
        }
    }
    const getMenu = () => {
        if (!guest.menu) {
            return ''
        }
        const menu = MENU_TYPES_OPTIONS.find(age => age.id === Number(guest.menu))
        if (menu) {
            return menu.name
        } else {
            return ''
        }
    }
    const newGuest = () => {
        saveGuest(INITIAL_GUEST)
        saveError(INITIAL_ERRORS)
        saveIsFormSending(false)
    }
    return (
        <>
            { isFormSending ?
                <div>
                    <Title1>Formulario enviado</Title1>
                    <GuestList>
                        <li><span>Nombre: </span>{ guest.name || '' }</li>
                        <li><span>Primer apellido: </span>{ guest.surname1 || '' }</li>
                        <li><span>Segundo apellido: </span>{ guest.surname2 || '' }</li>
                        <li><span>Alergias: </span>{ guest.allergies || '' }</li>
                        <li><span>Edad: </span>{ getAge() }</li>
                        <li><span>Menú: </span>{ getMenu() }</li>
                        <li><span>Autobús: </span>{ getBus() }</li>
                    </GuestList>
                    <div className='flex flex-row w-full justify-center md:justify-center mb-6'>
                        <ButtonNewGuest onClick={newGuest}>Añadir otro invitado</ButtonNewGuest>
                    </div>
                </div>
                
                : <Form onSubmit={confirmGuest} noValidate>
                    <Title1>Formulario</Title1>
                    <InputField
                        type="text"
                        value={name}
                        label='Nombre:'
                        name="name"
                        error={errors.name}
                        onChange={handleChange}
                    />
                    <InputField
                        type="text"
                        value={surname1}
                        label='Primer apellido:'
                        name="surname1"
                        error={errors.surname1}
                        onChange={handleChange}
                    />
                    <InputField
                        type="text"
                        value={surname2}
                        label='Segundo apellido:'
                        name="surname2"
                        error=""
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
                        error={errors.age}
                        onChange={handleChange}
                    />
                    <SelectField
                        name='menu'
                        label='Tipo de menú:'
                        value={menu}
                        options={MENU_TYPES_OPTIONS}
                        error={errors.menu}
                        onChange={handleChange}
                    />
                    <InputCheckbox
                        value={bus}
                        label='¿Vas a usar el autobús?'
                        name="bus"
                        id="bus"
                        onChange={handleChange}
                    />
                    <div className='flex flex-row w-full justify-center md:justify-end'>
                        <InputSubmit
                            type="submit"
                            value="Enviar"
                        />
                    </div>
                </Form>
            }
            <ImageContainer>
                <Image
                    src={formImage}
                    alt=''
                    width={120}
                />
            </ImageContainer>
        </>
        
            
       
    )
}