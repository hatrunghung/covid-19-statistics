/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';

import { AnalyticsProvider } from './context/AnalyticsContext'
import Header from './components/Header/Header.component';
import AnalyticState from './components/AnalyticState'

function App() {
  return (
    <AnalyticsProvider>
      <div className="App">
        <Header />
        <AnalyticState />
      </div>
    </AnalyticsProvider>
  );
}

export default App;
