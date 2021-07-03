import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTag} from '../../actions/actions';
import Post from '../ElementPost/Post';
import {StyledDiv, BtnBack} from './styled.js';
import {Link} from 'react-router-dom';

const PostByTags = ({match}) => {
    const dispatch = useDispatch();
    const postTags = useSelector(state=> state.postsByTags);
    const tagss = useSelector(state=> state.tagss);
    const fixedMatch = useRef(match.params.tag);


    useEffect(()=>{
        dispatch(getTag(fixedMatch.current))
    },[dispatch, tagss]);


    return (  
        <>
            <h1>Bienvenido a RedLima</h1>
            <Link to='/'>
                <BtnBack className='btn-comeBack'>Volver Atras</BtnBack>
            </Link>
            <StyledDiv>
                {
                    postTags && postTags.map((el,idx)=>{
                        return <Post key={idx} data={el}/>
                    })
                }
            </StyledDiv>
        </>
    );
}
 
export default PostByTags;