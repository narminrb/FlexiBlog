import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/home'
import { useLocation } from 'react-router-dom'
import Layout from './layout'




const App = () => {
  const location = useLocation();
  const publicPath = ["/","/contact"]
  return (
 <>
 {
  publicPath.includes(location.pathname) && (
    <Layout>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
  </Routes>
  </Layout>
  )
 }
 </>
  )
}

export default App