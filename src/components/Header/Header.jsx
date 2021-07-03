import { useEffect } from "react";
import Post from '../ElementPost/Post';
import {useSelector, useDispatch} from 'react-redux';
import {getPost} from '../../actions/actions';
import StyledDiv from './styled.js';

const Header = () => {
    const dispatch = useDispatch();
    const posts= useSelector(state=> state.post);
    
    useEffect(()=>{
        dispatch(getPost());    
    },[dispatch]);

    console.log(posts);

    return (
        <>
            <h1>Bienvenido a RedLima</h1>
            <StyledDiv>
                {
                    posts && posts.map((el,idx)=>{
                        return <Post key={idx} data={el}/>
                    })
                }
            </StyledDiv>
        </>
    );
}
 
export default Header;