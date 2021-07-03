import {createStore, applyMiddleware, compose} from 'redux';
import socialMedia from '../reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(socialMedia, compose(applyMiddleware(thunk)));

export default store;
