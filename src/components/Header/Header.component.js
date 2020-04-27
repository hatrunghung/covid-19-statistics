import React from 'react'
import './Header.styles.scss'
import { useAnalyticsState } from '../../AnalyticsContext'
import formatDate from '../../utils/formatDate'

function Header() {
  const { lastUpdate } = useAnalyticsState()

  return (
    <div className="header">
      <div>
        <p className="content-widget">COVID-19 Monitor</p>
      </div>
      <div>
        <p className="content-widget">
          Last update: { lastUpdate ? new Date(lastUpdate).toDateString() : formatDate(new Date())}
        </p>
      </div>
    </div>
  )
}

export default Header