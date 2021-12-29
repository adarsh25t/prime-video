import { createContext, useState } from "react";

export const viewMovieContext = createContext(null);


function ViewMovie({children}){
    const [view,setView] = useState("");
    return(
        <viewMovieContext.Provider value={{view,setView}}>
            {children}
        </viewMovieContext.Provider>
    )
}
export default ViewMovie;