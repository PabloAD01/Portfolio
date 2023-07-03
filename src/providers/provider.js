import React, {createContext, useState} from 'react'


export const GlobalContext= createContext(null)


export function GlobalProvider({children}) {
    const [authUser, setAuthUser] = useState(null);

  return (
    <GlobalContext.Provider value={{
        authUser,
        setAuthUser
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

