import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;

    .modalWrapper{
        width: 800px;
        height: 500px;
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
        background: #fff;
        color: #000;
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        z-index: 10;
        border-radius: 10px;
        .modalImg{
            width: 100%;
            height: 100%;
            border-radius: 10px 0 0 10px;
            background: #000;
        }
    }

    .closeModal{
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 32px;
        padding: 0;
        z-index: 10;
    }
    
`