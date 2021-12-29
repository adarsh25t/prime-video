import { createContext, useState } from "react";

export const watchListContext = createContext(null);

const WatchList = ({children})=>{
    const [watchlists,setwatchlist] = useState([]);
    return(
        <watchListContext.Provider value={{watchlists,setwatchlist}}>
            {children}
        </watchListContext.Provider>
    )
}
export default WatchList;