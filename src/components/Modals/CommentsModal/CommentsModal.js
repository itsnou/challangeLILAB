import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getComments} from '../../../actions/actions';
import {StyledDiv} from './styled';


const CommentsModal = ({showModal, setShowModal, id}) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);

    useEffect(()=>{
        dispatch(getComments(id))
    },[dispatch, id]);

    console.log(comments);

    return (  
        <>
            {showModal ? 
                <StyledDiv>
                    <div className='modalWrapper'>
                        {
                            comments && comments.map((el,idx) => {
                                return <div key={idx}>
                                    <div className='card-name'>
                                        <h3>{el.owner.firstName} {el.owner.lastName}</h3>
                                    </div>
                                    <div className='card-comment'>
                                        <p>Comento: </p>
                                        <hr/>
                                        <p>"{el.message}"</p>
                                    </div>
                                </div>
                            })
                        }
                    <button className='closeModal' aria-label='Close modal' onClick={()=> setShowModal(prev => !prev)}>X</button>
                    </div>
                </StyledDiv> : null
            }
        </>
    );
}
 
export default CommentsModal;