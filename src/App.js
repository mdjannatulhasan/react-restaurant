import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DarkMode from "./components/hooks/DarkMode";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
    const [dark, setDark] = useState(false);
    const changeTheme = () => {
        setDark(!dark);
    };
    return (
        <div data-theme={dark ? "night" : "mytheme"}>
            <Header changeTheme={changeTheme}></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
