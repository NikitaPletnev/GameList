import React, {useState} from 'react';
import '../../styles/LoginPage.css'
import {Logo} from "../../images/logo";
import ButtonLoader from "./ButtonLoader";

interface LoginPageInterface {
    loggingFailed: boolean;
    loading: boolean;

    setUserLogin(user: { [p: string]: File | string }): void;
}

const LoginPage = ({loggingFailed, loading, setUserLogin}: LoginPageInterface) => {

    const [hidden, setHidden] = useState(true)
    return (
        <div className='container'>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = Object.fromEntries(new FormData(e.target as any).entries())
                setUserLogin(formData);
            }}>
                <Logo/>
                {loggingFailed && <p>No such user found, you may have entered the wrong username or password</p>}
                <input className={loggingFailed ? 'err' : ''} type='text' name="name" required/>
                <i/>
                <input className={loggingFailed ? 'err' : ''} type={hidden ? 'password' : 'text'} name="password"
                       required/>
                <i/>
                <div onClick={() => {
                    setHidden(!hidden)
                }} title={hidden ? 'Show password' : 'Hide Password'}
                     className={`passwordTooltip ${hidden ? 'closed' : 'opened'}`}/>
                <button type="submit">{loading ? <ButtonLoader/> : 'Login'}</button>
            </form>
        </div>
    )
}

export default LoginPage;
