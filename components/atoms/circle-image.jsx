import styled from 'styled-components';
export const ImageCircle = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 50%;
    
    img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        filter: sepia(30%);
    }
`