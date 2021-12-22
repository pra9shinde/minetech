import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    let initialState = localStorage.getItem('usersToken') ? localStorage.getItem('usersToken') : null;

    const [user, setUser] = useState(initialState);

    return <AuthContext.Provider value={[user, setUser]}>{props.children}</AuthContext.Provider>;
};
