import { applyMiddleware, combineReducers, createStore } from "redux";
import { lottoNumberReducer } from "../reducer/lottoNumbers";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";

const rootReducer = combineReducers({
  numbers: lottoNumberReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    stateReconciler: hardSet,
  },
  rootReducer
);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
