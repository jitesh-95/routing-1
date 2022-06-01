import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* use this  */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        {/* or this */}
        {/* <Route path="/products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;

// / not mandatory
// for nested info we need 3 changes
// 1. parent route should accept all info from url using *
// 2. wrap child with parent and remove duplicate path info
// 3. use Outlet tag where you want to show the cild info
