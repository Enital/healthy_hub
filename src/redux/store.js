import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { userGoalReducer } from './usersGoal/slice';
import userReducer from './user/userSlice';
import { graphReducer } from './dashboard/slice';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token', 'step'],
};

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['breakfast', 'lunch', 'dinner', 'snack', 'id'],
};

// const graphPersistConfig = {
//   key: 'graph',
//   storage,
//   whitelist: ['items'],
// };

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    goals: userGoalReducer,
    user: persistedUserReducer,
    graph: graphReducer,
    // graph: persistReducer(graphPersistConfig, graphReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['transactions.date'],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
