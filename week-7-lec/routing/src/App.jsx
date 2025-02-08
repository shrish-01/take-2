import React from 'react';
import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Landing from './components/Landing';
// import Dashboard from './components/Dashboard';
// const Dashboard = React.lazy(() => import('./components/Dashboard'));
// import Header from './components/Header';
// import { Suspense } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <Count count={count}/>
      <Buttons count={count} setCount={setCount}/>

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

function Count({count}) {
  return <div>{count}</div>
}

function Buttons({count, setCount}) {
  return (
    <div>
      <button onClick={
        function() {
          setCount(count + 1);
        }
      }>Increase</button>
      <button onClick={
        function() {
          setCount(count - 1);
        }
      }>Decrease</button>
    </div>
  )
}

export default App
