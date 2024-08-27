import {Link, Route, Routes} from 'react-router-dom';
import {HomePageAsync} from './pages/HomePage/HomePage.async';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";



const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/home'}>
                home
            </Link>
            <Link to={'/about'}>
                about
            </Link>
            {/*<Counter/>*/}
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/home" element={<HomePageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;