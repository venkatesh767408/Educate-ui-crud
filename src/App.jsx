import React from 'react'
import EducateDashboard from './pages/EducateDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EducateDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App