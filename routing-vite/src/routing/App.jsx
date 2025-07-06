import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Options } from './components/Options';
import { Option1 } from './components/Option1';
import { Option2 } from './components/Option2';
import { Option3 } from './components/Option3';
import { UserDetails } from './components/UserDetails';
import { UserInfo } from './components/UserInfo';

export const App = () => {

    return (

        <BrowserRouter>
            <Navbar />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />

                {/* Nested Routing */}
                <Route path='/options' element={<Options />} >
                    <Route index element={<Option1 />} />
                    <Route path='option2' element={<Option2 />} />
                    <Route path='option3' element={<Option3 />} />
                </Route>
                <Route path='/users' element={<UserDetails />} />
                <Route path='/users/:slug' element={<UserInfo />} />
            </Routes>
        </BrowserRouter>
    )
}
