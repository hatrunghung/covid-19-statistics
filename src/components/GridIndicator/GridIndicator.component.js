import React from 'react'
import Indicator from '../Indicator/Indicator.component'
import './GridIndicator.styles.scss'
import Cards from '../Card/Cards.component'

function GridIndicator() {
  return (
    <React.Fragment>
      <Indicator />
      <Cards />
    </React.Fragment>
  )
}

export default GridIndicator