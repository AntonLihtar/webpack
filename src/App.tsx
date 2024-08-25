import { Counter } from './components/Counter';
import './index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { HomePageAsync } from './pages/HomePage/HomePage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense } from 'react';

const App = () => {
    return (
        <div className="app">
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