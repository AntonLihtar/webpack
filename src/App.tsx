import {Counter} from './components/Counter';
import {Link, Route, Routes} from 'react-router-dom';
import {HomePageAsync} from './pages/HomePage/HomePage.async';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {Suspense, useState} from 'react';
import './styles/index.scss'

export enum Theme {
    NORMAL = 'normal',
    DARK = 'dark',
}

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.NORMAL)

    const toggleTheme = () => {
        setTheme(theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL);
    }

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