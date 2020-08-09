/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { Row, Col } from 'react-bootstrap'
import './Indicator.styles.scss'
import { useAnalyticsState, useAnalyticsDispatch } from '../../context/AnalyticsContext'
import client from '../../utils/client'
import endpoint from '../../api/endpoint'

function Indicator () {
  const { confirmed, deaths, recovered } = useAnalyticsState()
  const dispatch = useAnalyticsDispatch()

  useEffect(() => {
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
  }, [])

  return (
    confirmed && <Row style={{ marginRight: '-5px' }}>
      <Col md={4}>
        <div className="grid-col">
          <div style={{ fontSize: 20 }}>Confirmed cases</div>
          <h2 style={{ color: 'rgb(189, 33, 48)' }}>
            <CountUp start={0} end={confirmed} duration={2} separator='.' />
          </h2>
        </div>
      </Col>
      <Col md={4}>
        <div className="grid-col">
          <div style={{ fontSize: 20 }}>Deaths</div>
          <h2 style={{ color: 'rgb(189, 189, 189)' }}>
            <CountUp start={0} end={deaths} duration={2} separator='.' />
          </h2>
        </div>
      </Col>
      <Col md={4}>
        <div className="grid-col">
          <div style={{ fontSize: 20 }}>Recovered</div>
          <h2 style={{ color: 'rgb(164, 201, 57)' }}>
            <CountUp start={0} end={recovered} duration={2} separator='.' />
          </h2>
        </div>
      </Col>
    </Row>
  )
}

export default Indicator