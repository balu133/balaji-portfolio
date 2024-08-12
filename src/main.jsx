import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import Support from './components/Support.jsx'
import SuccessPage from './components/SuccessPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
       <Routes>
          <Route path='/' element={<Layout />}>
            <Route  path='' element={<App />} /> 
            <Route path='/about' element={<About />} />
            <Route path='/support' element={<Support />}/>
          </Route>
          <Route path='/success' element={<SuccessPage />}/>
       </Routes>
    </HashRouter>
  </React.StrictMode>,
)
