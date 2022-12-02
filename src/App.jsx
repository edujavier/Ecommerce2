
import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductId from './pages/ProductId';
import Purchases from './pages/Purchases';
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Container } from 'react-bootstrap';

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Container className='my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductId />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases />} />
          </Route>

        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
