import React from 'react'
import endpoint from '../api/endpoint'
import criticalCaseEndpoint from '../api/criticalCaseEndpoint'
import { useAnalyticsDispatch } from '../AnalyticsContext'
import GridIndicator from './GridIndicator/GridIndicator.component'

function AnalyticsState() {
  const dispatch = useAnalyticsDispatch()

  React.useEffect(() => {
    dispatch({ type: 'loading' })

    fetch(endpoint)
      .then(response => response.json())
      .then(data => dispatch({
        type: 'resolvedIndicate',
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

  React.useEffect(() => {
    dispatch({ type: 'loading' })

    fetch(criticalCaseEndpoint)
      .then(response => response.json())
      .then(response => {
        const confirmedCriticalCase = response.data.reduce((accumulator, current) => accumulator + current.latest_data.critical, 0)
        return dispatch({
          type: 'resolvedFetchMajorCase',
          payload: {
            critical: confirmedCriticalCase
          }
        })
      })
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