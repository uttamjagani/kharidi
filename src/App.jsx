import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ecart from './pages/Ecart'
import Footer from './components/Footer'
import Productpage from './pages/Productpage'
import { Provider } from 'react-redux'
import store from './redux/Store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Ecart />} />
            <Route path='/product/:id' element={<Productpage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App