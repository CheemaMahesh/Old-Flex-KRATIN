import { useState,useEffect, createContext, useContext } from "react";

import {data} from './Componets/Assets/Data'
const Con=createContext();

function useValue(){
    const value=useContext(Con);
    return value;
}


function ContextApi({children}){
    
    return(
        <Con.Provider value={{
            data
        }}>
            {children}
        </Con.Provider>
    )
}

export {useValue};
export default ContextApi;