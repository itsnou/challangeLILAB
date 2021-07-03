import './App.css';
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import PostByTags from './components/PostbyTags/PostByTags';

function App() {
  return (
    <>
    <Route exact path='/' component={Header}/>
    <Route path='/tags/:tag' component={PostByTags}/>
    </>
  );
}

export default App;
