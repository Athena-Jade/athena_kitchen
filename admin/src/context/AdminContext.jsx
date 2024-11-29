import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext(null);

const AdminContextProvider = (props) => {
  const url = "http://localhost:5000"; //url pour le backend

  const [token, setToken] = useState("");

  

  //eviter le rafraîchissement de la page dès que l'admin se connecte
  useEffect(()=>{
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  },[])


  const contextValue = {
    url,
    token,
    setToken,
  };


  return (
    <AdminContext.Provider value={contextValue}>
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
