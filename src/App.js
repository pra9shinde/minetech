import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<SignIn />} />

                    <Route path='/register' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
