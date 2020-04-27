import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useAnalyticsState } from '../../AnalyticsContext'
import Indicator from '../Indicator/Indicator.component'
import './GridIndicator.styles.scss'

function GridIndicator() {
  const { confirmed, deaths, recovered } = useAnalyticsState()

  return (
    <Container>
      <Row style={{ marginRight: '-5px' }}>
        <Indicator
          indicationStatement={"Confirmed cases"}
          indicationStatusNumber={confirmed}
          color={"rgb(189, 33, 48)"}
        />
        <Indicator
          indicationStatement={"Deaths"}
          indicationStatusNumber={deaths}
          color={"rgb(189, 189, 189)"}
        />
        <Indicator
          indicationStatement={"Recovered"}
          indicationStatusNumber={recovered}
          color={"rgb(164, 201, 57)"}
        />
      </Row>
      <Row style={{ marginRight: '-15px' }}>
        <Col md={6} style={{
          textAlign: 'center',
          paddingLeft: 0,
          paddingRight: 0
        }}>
          <div className="cases-indicator">
            <div className="grid-col">
              <div style={{ fontSize: 20 }}>Active cases:</div>
              <div>
                <h2 style={{ color: 'rgb(255,255,255)' }}>{confirmed - deaths - recovered}</h2>
                <div>Currently infected patients</div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} style={{
          textAlign: 'center',
          paddingLeft: 0,
          paddingRight: 0
        }}>
          <div className="cases-indicator">
            <div className="grid-col">
              <div style={{ fontSize: 20 }}>Close cases:</div>
              <div>
                <h2 style={{ color: 'rgb(255,255,255)' }}>{deaths + recovered}</h2>
                <div>Currently closed cases</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default GridIndicator