import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Product from './page/Product';
import Homedesc from './page/Homedesc';
import ProductInput from './page/ProductInput';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<Homedesc />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:product' element={<ProductInput />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
