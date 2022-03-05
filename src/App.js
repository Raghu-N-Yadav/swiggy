
import './App.css';
// import Home from './Components/Home';
import HomeContainer from './Container/HomeContainer';
import RestaurantContainer from './Container/RestaurantContainer';
import { Routes, Route } from "react-router-dom";
import ItemContainer from './Container/ItemContainer';
import CheckoutContainer from './Container/CheckoutContainer';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="restaurants/:location" element={<RestaurantContainer />} />
        <Route path="item" element={<ItemContainer />} />
        <Route path="checkout" element={<CheckoutContainer />} />

      </Routes>
    </div>
  );
}

export default App;
