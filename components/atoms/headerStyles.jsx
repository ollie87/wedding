import styled from 'styled-components';

export const HeaderStyle = styled.div`
    width: 100%;
    height: 500px;
    background: url("/img/headerbg.jpg");
    background-position-x: center;
    background-size: 100% auto;
    background-position-y: 75%;
    div {
        width: 100%;
        backdrop-filter: blur(4px);
    }
    .img-header-container {
        width: 300px;
        position: relative;
    }
    @media (max-width: 768px) {
        height: 150px;
        background-position-y: 100%;
        .img-header-container {
            width: 100px;
        }
    }
`