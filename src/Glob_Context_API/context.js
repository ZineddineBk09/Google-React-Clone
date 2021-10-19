import React, { useContext, useReducer, createContext, useState } from 'react'
import { initialState, reducer } from './reducer'

const AppContext = createContext()


const AppProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{state,dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobContext = () => useContext(AppContext)

export { AppContext, AppProvider }
