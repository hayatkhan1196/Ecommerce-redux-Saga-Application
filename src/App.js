import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import TestA from "./Components/TestA";
function App() {
  return (
    <div className="App">
      <Header />

      <TestA />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
