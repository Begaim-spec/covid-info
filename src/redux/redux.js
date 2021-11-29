import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {countriesReducer} from "./reducers/countriesReducer";
import {dataReducer} from "./reducers/dataReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["countries", "data"]
}

const rootReducer = combineReducers ({
    countries: countriesReducer,
    data: dataReducer
})

export default persistReducer(persistConfig, rootReducer)