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
        position: relative;
        z-index: 10;
        border-radius: 10px;
        .card-name{
            background: blue;
            margin-left: 20px;
            margin-right: 20px;
            margin-top:60px;
            h3{
                margin:0;
                padding:0;
            }
        }
        .card-comment{
            background: #D7D3DA;
            margin:20px;
            margin-top:0;
            p{
                margin:0;
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
            border-radius:5px;
            outline:none;
        }
    }

    
`