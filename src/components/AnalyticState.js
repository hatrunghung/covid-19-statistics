/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Container } from 'react-bootstrap'
import GridIndicator from './GridIndicator/GridIndicator.component'
import Chart from './Chart/Chart.component'

function AnalyticsState() {
  return (
    <Container>
      <GridIndicator />
      <Chart />
    </Container>
  )
}

export default AnalyticsState