import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Text } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            ...createForms({
                text: Text
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
