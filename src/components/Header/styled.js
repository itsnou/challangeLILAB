import styled from 'styled-components';


export const StyledDiv = styled.div`
    width:95%;
    margin:auto;
    display:grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%,25rem), 1fr));
    h1{
        text-align:center;
    }
    .container{
        border-radius:5px;
        background-color:#3C5186;
        color:white;
        text-align:center;
        padding-bottom:20px;
        img{
            width:350px;
            height:250px;
        }
        .card-list{
            display:flex;
            justify-content: space-around;
            .card-link{
                text-decoration:none;
                color:white;
                font-weight:bold;
            }
            li{
                list-style:none;
            }
        }
        .ref-link{
            color:white;
        }
        .btn-modal{
            outline:none;
            width:100%;
            padding: 5px;
            font-size:19px;
            cursor:pointer;
            background-color:white;
            border-radius:6px 6px 0 0;
            font-weight:bold;
        }
        .card-social{
            display:flex;
            justify-content: space-around;
            button{
                border-radius: 3px;
                padding:3px;
                cursor:pointer;
                background:white;
                border:none;
                font-weight:bold;
            }
        }
    }
`

export default StyledDiv;