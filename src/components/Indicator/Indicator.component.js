import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Indicator.styles.scss'
import { useAnalyticsState } from '../../AnalyticsContext'

function Indicator () {
  const { confirmed, deaths, recovered } = useAnalyticsState()
  return (
    <Row style={{ marginRight: '-5px' }}>
      <Col md={4}>
        <div className="grid-col">
          <div style={{ fontSize: 20 }}>Confirmed cases</div>
          <h2 style={{ color: 'rgb(189, 33, 48)' }}>{confirmed}</h2>
        </div>
      </Col>
      <Col md={4}>
        <div className="grid-col">
          <div style={{ fontSize: 20 }}>Deaths</div>
          <h2 style={{ color: 'rgb(189, 189, 189)' }}>{deaths}</h2>
        </div>
      </Col>
      <Col md={4}>
        <div className="grid-col">
          <div style={{ fontSize: 20 }}>Recovered</div>
          <h2 style={{ color: 'rgb(164, 201, 57)' }}>{recovered}</h2>
        </div>
      </Col>
    </Row>
  )
}

export default Indicator