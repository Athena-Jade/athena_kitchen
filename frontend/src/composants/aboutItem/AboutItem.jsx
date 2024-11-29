import "./AboutItem.css";

const AboutItem = ({ name, image, descr1, descr2, descr3, descr4 }) => {
  return (
    <section className="about-item">
      <div className="about-item-container">
        <div className="box-about-item-gauche">
         
          <img src={image} alt="" />
          
        </div>
        <div className="box-about-item-droite">
           <h1>Bonjour à tous! <br /></h1><p> Je m'appelle {name}</p>
          <p>{descr1}</p>
          <p>{descr2}</p>
          <p>{descr3}</p>
          <p>{descr4}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutItem;
