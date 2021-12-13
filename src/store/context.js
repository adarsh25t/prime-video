import { createContext, useState } from "react";

export const firebaseContext = createContext(null);

export const authContext = createContext(null);

export default function Context ({children}){

    const [userName,setuserName] = useState();
    return(
        <authContext.Provider value={{userName,setuserName}}>
            {children}
        </authContext.Provider>
    )
}