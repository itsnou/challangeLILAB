import {useState} from 'react';
import {Link} from 'react-router-dom';
import UserModal from '../Modals/UserModal/UserModal';
import CommentsModal from '../Modals/CommentsModal/CommentsModal'

const Post = ({data}) => {

    const [userModal, setUserModal] = useState(false);
    const [commentsModal, setCommentsModal] = useState(false);
    
    const userOpen = () =>{
        setUserModal(prev => !prev);
    };

    const commentsOpen = () =>{
        setCommentsModal( prev=> !prev);
    }
    
    return (
        <>
            <div className='container'>
                <button className='btn-modal' onClick={()=> userOpen()}>{data.owner.firstName} {data.owner.lastName}</button>
                <img src={data.image} alt={data.text}/>
                <p>{data.text}</p>
                <div>
                    {
                        data.link !== null ? <a href={data.link} className='ref-link'>Link a Redes 😍</a> : <div></div>
                    }
                    <p>Fecha de publicación: {data.publishDate.slice(0,10)}</p>
                </div>
                <ul className='card-list'>
                    {data.tags && data.tags.map((el,idx)=>{
                        return <Link key={idx} to={`/tags/${el}`} className='card-link'>
                                <li key={idx}>#{el}</li>
                            </Link>
                    })}
                </ul>
                <div className='card-social'>
                    <span>👍 {data.likes}</span>
                    <button onClick={() => commentsOpen()}>Comments</button>
                </div>
            </div>
            {
                userModal ? 
                <UserModal showModal={userModal} setShowModal={setUserModal} owner={data.owner}/>
                :null
            }
            {
                commentsModal ? 
                <CommentsModal showModal={commentsModal} setShowModal={setCommentsModal} id={data.id}/>
                :null
            }
        </>
    );
}
 
export default Post;