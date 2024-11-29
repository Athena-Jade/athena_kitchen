import "./About.css";
import { data } from "../../assets/data";
import { data_qui } from "../../assets/data";
import AboutItem from "../../composants/aboutItem/AboutItem";
import { useState } from "react";

const About = () => {
  const [infos, setInfos] = useState(true);
  const btnInfos = () => {
    setInfos(!infos);
  };

  return (
    <>
      <section className="about">
        <div className="about-container">
          <div className="box-about-gauche">
            <img src={data.propos} alt="" />
          </div>
          <div className="box-about-milieu">
            <h1>Qui suis-je?</h1>
            <button onClick={btnInfos}>Découvrez-moi</button>
          </div>
        </div>

        <section className="about-athena">
          <div className={infos ? "box-about-droite-cache" : ""}>
            {data_qui.map((item, index) => {
              return (
                <AboutItem
                  key={index}
                  image={item.image}
                  name={item.name}
                  descr1={item.descr1}
                  descr2={item.descr2}
                  descr3={item.descr3}
                  descr4={item.descr4}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
