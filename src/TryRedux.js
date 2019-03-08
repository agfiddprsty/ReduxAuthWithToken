import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    chara: []
};

const reducer = function(state = initialState, action){
    switch (action.type) {
        case 'FETCH_CHARA_PENDING':
        return{...state, fetching: true};
        break;
        case 'FETCH_CHARA_FULFILLED':
        return{...state, fetching: false, fetched: true, chara: action.payload};
        break;
        case 'FETCH_CHARA_REJECTED':
        return{...state, fetching: false, error: action.payload};
        break;
    
        default:
            break;
    }
}

const middleware = applyMiddleware(logger, thunk, promise());

const store = createStore(reducer, middleware);

store.subscribe(()=>{
    console.log('current state = ', store.getState());
})

store.dispatch({
    type: 'FETCH_CHARA',
    payload: axios.get('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=40ffbc8acaf748698a35698d49a7b0cd')
})

// store.dispatch((dispatch)=>{
//     dispatch({type: 'FETCH_NEWS_PENDING'})
//     axios.get('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=40ffbc8acaf748698a35698d49a7b0cd')
//     .then((response)=>{
//         dispatch({type: 'FETCH_NEWS_FULFILLED', payload: response.data});
//     })
//     .catch((err)=>{
//         dispatch({type: 'FETCH_NEWS_REJECTED', payload: err});
//     })
// });