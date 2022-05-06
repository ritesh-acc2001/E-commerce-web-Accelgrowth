import './App.css';
import MyCart from './component/MyCart/MyCart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './component/ContactUS/ContactUs';

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
      <ContactUs/>

    </div>
  );
}

export default App;
