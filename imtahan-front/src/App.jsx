import MainLayout from "./Layouts/MainLayout";
import AddPage from "./Pages/AddPage";
import Basket from "./Pages/Basket";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import "./assest/reset.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addpage" element={<AddPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
