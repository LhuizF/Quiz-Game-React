import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles, { Main } from './styles/GlobalStyles';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes />
            </Main>
            <Footer />
            <GlobalStyles />
        </BrowserRouter>
    );
}

export default App;
