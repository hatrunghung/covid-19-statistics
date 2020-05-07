const analyticsReducer = (state, action) => {
  switch (action.type) {
    case 'loading': {
      return {
        ...state,
        loading: true
      }
    }
    case 'resolvedIndicate': {
      return {
        ...state,
        confirmed: action.payload.confirmed,
        deaths: action.payload.deaths,
        recovered: action.payload.recovered,
        lastUpdate: action.payload.lastUpdate,
        loading: false,
      }
    }
    case 'resolvedFetchMajorCase': {
      return {
        ...state,
        critical: action.payload.critical
      }
    }
    case 'resolvedCountries': {
      return {
        ...state,
        countries: action.payload.countries
      }
    }
    case 'resolvedDailyData': {
      return {
        ...state,
        dailyData: action.payload.dailyData
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

export default analyticsReducer