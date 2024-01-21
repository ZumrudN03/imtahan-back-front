import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

function SarchProvider({children}) {
    const [search, setserach] = useState("")

    function handleSeacrh(e) {
        setserach(e.target.value)
    }
    
  return (
    <SearchContext.Provider value={{search,handleSeacrh}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SarchProvider