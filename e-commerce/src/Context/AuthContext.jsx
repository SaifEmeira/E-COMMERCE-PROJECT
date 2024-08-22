/* eslint-disable no-unused-vars */
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export let auth = createContext(null);


// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({children}) {
    let [login, setLogin] = useState(null);

    useEffect(()=>{
        if (localStorage.getItem("userToken")) {
            setLogin(jwtDecode(localStorage.getItem("userToken")))
        }
    },[])

    return <auth.Provider value={{ login, setLogin }}>
        {children}
    </auth.Provider>
}