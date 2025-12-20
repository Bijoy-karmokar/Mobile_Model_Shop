/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { getCart } from '../Utility';

const AuthProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        setCart(getCart);
    },[])
    return (
        <AuthContext.Provider value={{cart,setCart}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;