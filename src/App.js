import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles, { Main } from './styles/GlobalStyles';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Main>
                    <Routes />
                </Main>
                <GlobalStyles />
                <ToastContainer autoClose={2000} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
