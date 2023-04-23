import { createContext } from "react";

export const AppContext = createContext();

// import React, {useState} from "react";
// import { createContext } from "react";

// const AppContext = React.createContext();

// export const AppProvider = ({children}) => {
//     const [selectedLanguage, setSelectedLanguage] = useState("")
//     return (
//         <AppContext.Provider value={{selectedLanguage, setSelectedLanguage}}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export default AppContext