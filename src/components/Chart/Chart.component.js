/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useAnalyticsDispatch } from '../../context/AnalyticsContext'
import client from '../../utils/client'
import endpoint from '../../api/endpoint'
import './Chart.styles.scss'
import LineChart from '../LineChart/LineChart.component'

function Chart() {
  const dispatch = useAnalyticsDispatch()

  React.useEffect(() => {
    client(endpoint + '/countries').then(data => dispatch({
      type: 'resolvedCountries',
      payload: {
        countries: data.countries
      }
    }))
  }, [])

  return (
    <div className="chart-container">
      <LineChart />
    </div>
  )
}

export default Chart