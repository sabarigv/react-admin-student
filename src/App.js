import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Login";
import Portal from "./Portal";
import Dashboard from './Dashboard';
import User from './User';
import Product from './Product';
import Createuser from './Createuser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />} >
        <Route path="/portal/dashboard" element={<Dashboard />} />
        <Route path="/portal/users" element={<User />} />
        <Route path="/portal/users/create" element={<Createuser />} />
        <Route path="/portal/products" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
