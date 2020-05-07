/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import endpoint from '../api/endpoint'
import { Container } from 'react-bootstrap'
import client from '../utils/client'
import criticalCaseEndpoint from '../api/criticalCaseEndpoint'
import { useAnalyticsDispatch } from '../context/AnalyticsContext'
import GridIndicator from './GridIndicator/GridIndicator.component'
import Chart from './Chart/Chart.component'

function AnalyticsState() {
  const dispatch = useAnalyticsDispatch()

  React.useEffect(() => {
    dispatch({ type: 'loading' })

    client(endpoint).then(data => dispatch({
      type: 'resolvedIndicate',
      payload: {
        confirmed: data.confirmed.value,
        deaths: data.deaths.value,
        recovered: data.recovered.value,
        lastUpdate: data.lastUpdate
      }
    })).catch(error => dispatch({
      type: 'error',
      payload: { error }
    }))

    client(criticalCaseEndpoint).then(response => {
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
  }, [])

  return (
    <Container>
      <GridIndicator />
      <Chart />
    </Container>
  )
}

export default AnalyticsState