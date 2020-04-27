import React from 'react'
import { Col } from 'react-bootstrap'
import './Indicator.styles.scss'

function Indicator ({
  indicationStatement,
  indicationStatusNumber,
  color
}) {
  return (
    <Col md={4}>
      <div className="grid-col">
        <div style={{ fontSize: 20 }}>{indicationStatement}</div>
        <h2 style={{ color: color }}>{indicationStatusNumber}</h2>
      </div>
    </Col>
  )
}

export default Indicator