/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export let counter = createContext(0);

 export default function CounterContext({children})

{
    let [count ,setCount]=useState(0)
    function increase() 
    {
        setCount(count+1);
    }


    return <counter.Provider value={{increase,count}}>
            {children}
    </counter.Provider>
}