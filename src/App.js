
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Supplier from "./pages/Supplier";
import Detail from "./pages/Detail";
import UpdateSupplier from "./pages/Updatesupplier";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="UpdateSupplier" element={<UpdateSupplier />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    

    </div>
  );
}

export default App;
