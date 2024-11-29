import "./Contact.css";
import { useState } from "react";
import Header from "../../composants/header/Header";

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [object, setObject] = useState(null);
  const [message, setMessage] = useState(null);

  const values = {
    name,
    email,
    phone,
    object,
    message,
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b7266315-a253-432d-86e1-ae8c1b5eaad7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);

      setName("");
      setEmail("");
      setPhone("");
      setObject("");
      setMessage("");

      alert(res.message);
    }
  };

  return (
    <section className="formulaire-contact">
      <form onSubmit={onSubmit} className="formulaire-container">
        <div className="login-popup-title">
          <h1>Laissez-moi votre message</h1>
        </div>
        <div className="infos-inputs">
          <input
            name="name"
            onChange={(e) => setName(e.target.name)}
            type="text"
            placeholder="Votre nom et prénom"
            required
          />

          <input
            name="email"
            onChange={(e) => setEmail(e.target.email)}
            type="email"
            placeholder="Votre adresse messagerie"
            required
          />
          <input
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="votre n° téléphone"
            required
          />

          <textarea
            onChange={(e) => setEmail(e.target.value)}
            name="message"
            id=""
            cols="20"
            rows="10"
            placeholder="Taper votre message ici"
          ></textarea>
        </div>
        {/**6:32:33 type submit */}
        <button style={{marginBottom:"1rem"}} type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
