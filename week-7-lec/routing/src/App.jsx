import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
// import Dashboard from './components/Dashboard';
const Dashboard = React.lazy(() => import('./components/Dashboard'));
import Header from './components/Header';
import { Suspense } from 'react';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
