/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Line } from 'react-chartjs-2'
import { useAnalyticsDispatch, useAnalyticsState } from '../../context/AnalyticsContext'
import endpoint from '../../api/endpoint'
import client from '../../utils/client'

function LineChart() {
  const { dailyData } = useAnalyticsState()
  const dispatch = useAnalyticsDispatch()

  React.useEffect(() => {
    client(endpoint + '/daily').then(data => dispatch({
      type: 'resolvedDailyData',
      payload: {
        dailyData: data
      }
    }))
  }, [])

  return (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [{
          data: dailyData.map(data => data.confirmed.total),
          label: 'Confirmed',
          borderColor: 'rgb(189, 33, 48)',
          fill: true
        }, {
          data: dailyData.map(data => data.deaths.total),
          label: 'Deaths',
          borderColor: 'rgb(189, 189, 189)',
          fill: true
        }, {
          data: dailyData.map(data => data.recovered.total),
          label: 'Recovered',
          borderColor: 'rgb(164, 201, 57)',
          fill: true
        }]
      }}
    />
  )
}

export default LineChart