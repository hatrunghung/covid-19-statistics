import React from 'react'
import analyticsReducer from './analytic/analyticReducer'
import initialState from './analytic/initialState'

const AnalyticsStateContext = React.createContext()
const AnalyticsDispatchContext = React.createContext()

const AnalyticsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(analyticsReducer, initialState)
  return (
    <AnalyticsStateContext.Provider value={state}>
      <AnalyticsDispatchContext.Provider value={dispatch}>
        {children}
      </AnalyticsDispatchContext.Provider>
    </AnalyticsStateContext.Provider>
  )
}

const useAnalyticsState = () => {
  const context = React.useContext(AnalyticsStateContext)
  if (context === undefined) {
    throw new Error('useAnalyticsState must be used inside AnalyticsProvider')
  }
  return context
}

const useAnalyticsDispatch = () => {
  const context = React.useContext(AnalyticsDispatchContext)
  if (context === undefined) {
    throw new Error('useAnalyticsDispatch must be used inside AnalyticsProvider')
  }
  return context
}

export { AnalyticsProvider, useAnalyticsState, useAnalyticsDispatch }