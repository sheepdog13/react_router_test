import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Product from './page/Product';
import ProductInput from './page/ProductInput';
import Layout from './page/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:product' element={<ProductInput />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
