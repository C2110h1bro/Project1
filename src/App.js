import logo from './logo.svg';
import './App.css';
import MasterLayout from './components/layouts/MasterLayout';
import Home from './components/pages/home';
import About from './components/pages/about';
import { Route, Routes } from 'react-router';
import Detail from './components/pages/detail';
import Shop from './components/pages/shop';
import { useSelector } from 'react-redux';
import Cart from './components/pages/cart';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MasterLayout Page={<Home />} />} />
        <Route path='about' element={<MasterLayout Page={<About />} />} />
        <Route path='cart' element={<MasterLayout Page={<Cart />} />} />
        <Route path='detail/:id' element={<MasterLayout Page={<Detail />} />} />
        <Route path='shop/:id' element={<MasterLayout Page={<Shop />} />} />
      </Routes>
    </div>
  );
}

export default App;
