import { createContext, useState } from "react";

export const navbarContext = createContext(null);


 const NavContext = ({children})=>{

    const [navShow,setNavShow] = useState(false);

     return(
        <navbarContext.Provider value={{navShow,setNavShow}}>
            {children}
        </navbarContext.Provider>
     )
 }

 export default NavContext;