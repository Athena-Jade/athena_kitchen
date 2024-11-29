import "./Header.css";
import { data } from "../../assets/data";
const Header = ({ img }) => {
  return (
    <section className="header">
      <div className="header-container">
        <div className="box-img-header">
          <img src={data.img_header} alt="" />
        </div>
        <div className="box-droite">
          <h1>Bienvenu sur Athena's kitchen</h1>
          <h3>Je cuisine des délicieuses recettes sucrées et salées</h3>
        </div>
      </div>
    </section>
  );
};

export default Header;
