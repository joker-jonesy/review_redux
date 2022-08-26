import {createStore, combineReducers} from "redux";
import movieReducer from "./redux/MovieReducer";
import muppetReducer from "./redux/MuppetReducer";

const rootReducer = combineReducers({
    muppets: muppetReducer,
    movies: movieReducer
})


function configureStore(){
    return createStore(rootReducer)
}

export default configureStore;