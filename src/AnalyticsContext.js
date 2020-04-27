import React from 'react'

const AnalyticsStateContext = React.createContext()
const AnalyticsDispatchContext = React.createContext()

const analyticsReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    case 'loading': {
      return {
        ...state,
        loading: true
      }
    }
    case 'resolved': {
      return {
        ...state,
        confirmed: action.payload.confirmed,
        deaths: action.payload.deaths,
        recovered: action.payload.recovered,
        lastUpdate: action.payload.lastUpdate,
        loading: false,
      }
    }
    case 'error': {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    default: {
      return state
    }
  }
}

const initialState = {
  count: 0,
  confirmed: 0,
  deaths: 0,
  recovered: 0,
  lastUpdate: null,
  loading: false,
  error: null
}

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