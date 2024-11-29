import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./composants/navbar/Navbar";
import Add from "./pages/add/Add";
import List from "./pages/list/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import LoginAdmin from "./composants/loginAdmin/LoginAdmin";


const App = () => {
  const url = "http://localhost:5000";
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div>
        <ToastContainer />
 
        <Navbar setShowLogin={setShowLogin} />
      
        {showLogin ? <LoginAdmin setShowLogin={setShowLogin} /> : <> </>}

        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
