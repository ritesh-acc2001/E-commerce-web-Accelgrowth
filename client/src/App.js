import './App.css';
import MyCart from './component/MyCart/MyCart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" />
          <Route path="mycart" element={< MyCart/>} />
      </Routes>
    </BrowserRouter>
        {/* <MyCart/> */}

    </div>
  );
}

export default App;
