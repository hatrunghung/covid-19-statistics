import React from 'react'
import endpoint from '../api/endpoint'
import { useAnalyticsDispatch } from '../AnalyticsContext'
import GridIndicator from './GridIndicator/GridIndicator.component'

function AnalyticsState() {
  const dispatch = useAnalyticsDispatch()

  React.useEffect(() => {
    dispatch({ type: 'loading' })

    fetch(endpoint)
      .then(response => response.json())
      .then(data => dispatch({
        type: 'resolved',
        payload: {
          confirmed: data.confirmed.value,
          deaths: data.deaths.value,
          recovered: data.recovered.value,
          lastUpdate: data.lastUpdate
        }
      }))
      .catch(error => dispatch({
        type: 'error',
        payload: { error }
      }))
  }, [dispatch])

  return (
    <React.Fragment>
      <GridIndicator />
    </React.Fragment>
  )
}

export default AnalyticsState