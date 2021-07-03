import {useEffect} from 'react';
import {StyledDiv} from './styled';
// import {GlobalStyles} from './globalStyles';
import {useDispatch,useSelector} from 'react-redux';
import {getUser} from '../../../actions/actions';



const UserModal = ({showModal, setShowModal, owner}) => {
    const dispatch= useDispatch();
    const user = useSelector(state=> state.user);

    useEffect(()=>{
        dispatch(getUser(owner.id));
        return () => dispatch(getUser(false));
    },[dispatch, owner.id]);


    return (  
        <>
        {showModal ? <StyledDiv>
            <div className='modalWrapper'>
                <img className='modalImg' src={user.picture} alt={user.firstName}/>
                <div>
                    <h1>{user.firstName} {user.lastName}</h1>
                    <p>Telefono: {user.phone}</p>
                    <p>Genero: {user.gender}</p>
                </div>
            <button className='closeModal' aria-label='Close modal' onClick={()=> setShowModal(prev => !prev)}>X</button>
            </div>
        </StyledDiv> : null}
        </>
    );
}
 
export default UserModal;