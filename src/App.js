import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import Countries from './pages/Countries';
import Country from './pages/Country';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<SignIn />} />
                    <Route path='/register' element={<SignUp />} />
                    <Route path='/country' element={<Countries />} />
                    <Route path='/country/:countryId' element={<Country />} />
                    <Route path='/' element={<Users />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
