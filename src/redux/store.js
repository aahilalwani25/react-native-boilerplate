import { applyMiddleware, combineReducers, createStore } from "redux";
import userSlice from './slices/userSlice'
// import fetchPostsSlice from './slices/fetchPostsSlice';
// import fetchUserPostSlice from './slices/fetchUserPostsSlice'
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import {MMKV} from 'react-native-mmkv';
//import updateReactionSlice from "./slices/updateReactionSlice";

const storage= new MMKV()

export const reduxStorage = {
    setItem: (key, value) => {
      storage.set(key, value)
      return Promise.resolve(true)
    },
    getItem: (key) => {
      const value = storage.getString(key)
      return Promise.resolve(value)
    },
    removeItem: (key) => {
      storage.delete(key)
      return Promise.resolve()
    },
  }

const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    whitelist: ['user'], // Specify slices to persist
    //blacklist:['fetchPost','updateReaction','user'] // Alternatively, you could use `blacklist` to exclude certain slices

}

const rootReducer = combineReducers({
    user: userSlice,
    // fetchPost: fetchPostsSlice,
    // updateReaction: updateReactionSlice,
    // fetchUserPost: fetchUserPostSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor= persistStore(store);