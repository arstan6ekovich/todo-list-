import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Card from "./components/Card";
import Basket from "./components/Basket";
import Seacrh from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/card" element={<Card />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/search/:redName" element={<Seacrh />} />
      </Routes>
    </div>
  );
}

export default App;
