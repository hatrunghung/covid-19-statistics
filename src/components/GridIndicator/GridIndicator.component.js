import React from 'react'
import { Container } from 'react-bootstrap'
import Indicator from '../Indicator/Indicator.component'
import './GridIndicator.styles.scss'
import Cards from '../Card/Cards.component'

function GridIndicator() {
  return (
    <Container>
      <Indicator />
      <Cards />
    </Container>
  )
}

export default GridIndicator