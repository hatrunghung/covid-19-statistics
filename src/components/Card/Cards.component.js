import React from 'react'
import CountUp from 'react-countup'
import { Row, Col } from 'react-bootstrap'
import { useAnalyticsState } from '../../AnalyticsContext'

function Cards() {
  const { confirmed, deaths, recovered, critical } = useAnalyticsState()

  return (
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
            <div className="detail-card-container">
              <div>
                <span style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(218, 78, 91)'
                }}>
                  <CountUp start={0} end={confirmed - deaths - recovered - critical} duration={2} />
                </span>
                <br />
                Mildly infected cases
              </div>
              <div>
                <span style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(189, 33, 48)'
                }}>
                  <CountUp start={0} end={critical} duration={2} />
                </span>
                <br />
                Seriously infected cases
              </div>
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
            <div className="detail-card-container">
              <div>
                <span style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(164, 201, 57)'
                }}>
                  <CountUp start={0} end={recovered} duration={2} />
                </span>
                <br />
                Recovered / Discharged
              </div>
              <div>
                <span style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(189, 189, 189)'
                }}>
                  <CountUp start={0} end={deaths} duration={2} />
                </span>
                <br />
                Deaths
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Cards