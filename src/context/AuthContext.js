import React from 'react';
import { useSetState } from 'react-use';

export const AuthContext = React.createContext(null);

const initialState = {
    isLoggedIn: false,
}

export const ContextProvider = props => {
    const [state, setState] = useSetState(initialState);
    const setLoginSuccess = (isLoggedIn) => setState({ isLoggedIn });

    const setUserData = (email, name, password) => {
        const data = JSON.stringify({
            email: email,
            name: name,
            password: password
        })
        localStorage.setItem('userData', data)
    }

    const removeUserData = () => {
        localStorage.removeItem('userData')
    }

    const login = () => {
        setLoginSuccess(true);
    }

    const logout = () => {
        setLoginSuccess(false);
        removeUserData()
    }

    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                logout,
                setUserData
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
