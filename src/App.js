
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
