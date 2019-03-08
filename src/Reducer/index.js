import { combineReducers } from 'redux';

// import all reducer
// import RootNavigator from '../../navigators/RootNavigator';
import authReducer from './authReducer';
import CharaReducer from "./CharaReducer";

// const reducerRouter = createNavigationReducer(RootNavigator);

const reducers = combineReducers({
    // router: reducerRouter,
    // products: productsReducer,
    auth: authReducer,
    chara: CharaReducer
});

export default reducers;