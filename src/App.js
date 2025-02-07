import React from 'react';

import MainPage from "./pages/MainPage";
import LanguagePage from "./pages/LanguagePage"

import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/lang" element={<LanguagePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
