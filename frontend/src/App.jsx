import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
 import CreateTasks from './pages/CreateTasks';
import ShowTask from './pages/ShowTask';
import EditTask from './pages/EditTask';
import DeleteTask from './pages/DeleteTask'; 

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tasks/create' element={<CreateTasks />} />
      <Route path='/tasks/details/:id' element={<ShowTask />} />
      <Route path='/tasks/edit/:id' element={<EditTask />} />
      <Route path='/tasks/delete/:id' element={<DeleteTask />} /> 
    </Routes>
    </>
  );
};

export default App;

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 */