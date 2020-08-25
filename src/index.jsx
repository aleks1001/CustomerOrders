import React from 'react';
import {render} from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas';
import App from './components/App';
import {ThemeProvider} from 'pcln-design-system'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Running all sagas at the root
sagaMiddleware.run(rootSaga);

render(
    <ThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);