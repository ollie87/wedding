import styled from 'styled-components';

export const CheckboxStyle = styled.div`
    label {
        color: ${({ theme: { colors } }) => colors.primary};
    }

    .container {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        cursor: pointer;
        border-top: 1px solid ${({ theme: { colors } }) => colors.primary};
        border-left: 2px solid ${({ theme: { colors } }) => colors.primary};
        border-bottom: 2px solid ${({ theme: { colors } }) => colors.primary};
        border-right: 1px solid ${({ theme: { colors } }) => colors.primary};
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: ${({ theme: { colors } }) => colors.primary};
        border: 1px solid ${({ theme: { colors } }) => colors.primary};
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
    content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left:7px;
        top: 0px;
        width: 10px;
        height: 18px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(40deg);
    }

`