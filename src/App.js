import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlets } from "./components/layouts/Outlets";
import { Home } from "./components/home/home";
import { ListCategory } from "./pages/categories/list-category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Outlets />}>
            <Route path="/list-category" element={<ListCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
