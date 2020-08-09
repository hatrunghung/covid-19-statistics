/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import CountUp from 'react-countup'
import { Row, Col } from 'react-bootstrap'
import { useAnalyticsState, useAnalyticsDispatch } from '../../context/AnalyticsContext'
import client from '../../utils/client'
import criticalCaseEndpoint from '../../api/criticalCaseEndpoint'

function Cards() {
  const { confirmed, deaths, recovered, critical } = useAnalyticsState()
  const dispatch = useAnalyticsDispatch()

  useEffect(() => {
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
              <h2 style={{ color: 'rgb(255,255,255)' }}>
                <CountUp start={0} end={confirmed - deaths - recovered} duration={2} separator='.' />
              </h2>
              <div>Currently infected patients</div>
            </div>
            <div className="detail-card-container">
              <div>
                <span style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(218, 78, 91)'
                }}>
                  <CountUp start={0} end={confirmed - deaths - recovered - critical} duration={2} separator='.' />
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
                  <CountUp start={0} end={critical} duration={2} separator='.' />
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
              <h2 style={{ color: 'rgb(255,255,255)' }}>
                <CountUp start={0} end={deaths + recovered} duration={2} separator='.' />
              </h2>
              <div>Currently closed cases</div>
            </div>
            <div className="detail-card-container">
              <div>
                <span style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'rgb(164, 201, 57)'
                }}>
                  <CountUp start={0} end={recovered} duration={2} separator='.' />
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
                  <CountUp start={0} end={deaths} duration={2} separator='.' />
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