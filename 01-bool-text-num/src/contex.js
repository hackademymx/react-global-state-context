import React, {createContext, useReducer, useContext} from 'react'

const initialGlobalState = {
  num: 0,
  text: 'foo',
  bool: false
}

const GlobalStateContext = createContext(initialGlobalState)
const DispatchStateContext = createContext(undefined)

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue}),
    initialGlobalState
  )


  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => [
  useContext(GlobalStateContext),
  useContext(DispatchStateContext)
]