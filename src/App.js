import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
import Countries from './pages/Countries';
import Country from './pages/Country';

import AuthRoute from './pages/AuthRoute';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/login' element={<SignIn />} />
                    <Route exact path='/register' element={<SignUp />} />

                    <Route exact path='/country' element={<AuthRoute />}>
                        <Route exact path='/country' element={<Countries />} />
                    </Route>

                    <Route exact path='/country/:countryId' element={<AuthRoute />}>
                        <Route exact path='/country/:countryId' element={<Country />} />
                    </Route>

                    <Route exact path='/' element={<AuthRoute />}>
                        <Route exact path='/' element={<Users />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
