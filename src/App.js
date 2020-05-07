/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';

import { AnalyticsProvider } from './context/AnalyticsContext'
import AnalyticsState from './components/AnalyticState';
import Header from './components/Header/Header.component';

function App() {
  return (
    <AnalyticsProvider>
      <div className="App">
        <Header />
        <AnalyticsState />
      </div>
    </AnalyticsProvider>
  );
}

export default App;
