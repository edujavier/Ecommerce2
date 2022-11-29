
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

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
        </Route>

      </Routes>
    </HashRouter>
  )
}

export default App
