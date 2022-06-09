import React, { useState} from 'react';
import {
    BrowserRouter,
    Route, Routes,
} from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import {setLogIn} from "../api/helper";
import GameList from "./GameList/GameList";

function App() {
    const [loggingFailed, setLoggingFailed] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false)


    const setUserLogin = (user: { name: string, password: string }): void => {
        setLoadingLogin(true)
        setLogIn(user).then((response) => {
            response.json().then((resource) => {
                if (!!resource?.logged) {
                    sessionStorage.setItem('user', resource.user);
                    setLoggingFailed(false);
                    window.location.href = 'game-list'
                } else {
                    setLoggingFailed(true)
                }
                setLoadingLogin(false)
            })
        })
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={
                    <LoginPage loading={loadingLogin}
                               loggingFailed={loggingFailed}
                               setUserLogin={setUserLogin}
                    />
                }
                />
                <Route path={`/game-list`} element={<GameList/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
