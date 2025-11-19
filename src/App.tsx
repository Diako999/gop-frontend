import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useAppStore } from "./store/useAppStore";
import Home from './pages/Home';
import Product from './pages/Product';
import Seller from './pages/Seller';
import Layout from './components/Layout';
import './App.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/product/:id' element= {<Product/>}/>
          <Route path='/seller/:id' element={<Seller/>}/>

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}

export default App;
