import "./LoginAdmin.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import axios from "axios";


const LoginAdmin = ({ setShowLogin }) => {
  const { url, setToken } = useContext(AdminContext);
  
  // const [currState, setCurrState] = useState("Login");
  const [currState, setCurrState] = useState("connectez-vous");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  //verifier que je peux taper sur les inputs
  // useEffect(()=>{
  //   console.log("login");
  // },[data])

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);


  const onLogin = async (event) => {
    event.preventDefault(); //eviter que la page se rafraîchisse
    let newUrl = url;
    // if (currState === "Login") {
      if (currState === "connectez-vous"){
      //si l'user se connecte sur le site
      newUrl += "/api/auth/login";
    } else {
      newUrl += "/api/auth/register"; //si l'user n'est pas connecté, il est renvoyé à formulaire register
    }

    //call  api et register admin, login admin dans mongoDb
    const response = await axios.post(newUrl, data);
    if (response.data.success) {    
      setToken(response.data.token);//sauvegarder le token de l'admin
      localStorage.setItem("token", response.data.token); //enregistrer le token de l'admin dans local storage. je suis bien connectée

      setShowLogin(false); //cacher login page que je n'ai plus besoin
    } else {
      alert(response.data.message);
    }
  };

  
  return (
    <>
      <div className="login-popup">      
        <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2> 
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="cross icon"
            />
          </div>
          <div className="login-popup-inputs">
            {currState === "connectez-vous" ? (
              <></>
            ) : (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="votre nom"
                required
              />
            )}

            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="votre messagerie"
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="votre mot de passe"
              required
            />
          </div>
      
          <button type="submit">
            {/* {currState === "Sign Up" ? "Create account" : "Login"} */}
            {currState === "créer un compte" ? "Créer un compte" : "Connectez-vous"}
          </button>
        
          {/* {currState === "Login" ? ( */}
          {currState === "connectez-vous" ? (
            <p>
              Vous n'avez pas de compte?
              {/* <span onClick={() => setCurrState("Sign Up")}> Créer votre compte</span> */}
              <span onClick={() => setCurrState("créer un compte")}> Créer votre compte</span>
            </p>
          ) : (
            <p>
              Vous avez déjà un compte?
              {/* <span onClick={() => setCurrState("Login")}> Connectez-vous</span> */}
              <span onClick={() => setCurrState("connectez-vous")}> Connectez-vous</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginAdmin;
