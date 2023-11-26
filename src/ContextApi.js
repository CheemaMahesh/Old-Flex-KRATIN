import { useState,useEffect, createContext, useContext } from 'react';



// import { data } from '../src/Components/Assets/Data';
import {data} from '../src/Componets/Assets/Data'

const Con = createContext();

function useValue() {
  const value = useContext(Con);
  return value;
}

function ContextApi({ children }) {
  const [pageCount, setPageCount] = useState(0);

  const handleClick = (e = 0) => {
    setPageCount(e);
   
  };
  

  return (
    <Con.Provider value={{ data, pageCount, handleClick,}}>
      {children}
    </Con.Provider>
  );
}

export { useValue };
export default ContextApi;
