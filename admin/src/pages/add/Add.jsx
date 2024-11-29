import "./Add.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  

  const [image, setImage] = useState(false);

 
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Sucrées",
  });

  
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
 
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("nombre", Number(data.nombre));
    formData.append("image", image);
    formData.append("cuisson", Number(data.cuisson));
    formData.append("preparation", Number(data.preparation));
    formData.append("ingredient1", Array(data.ingredient1));
    formData.append("ingredient2", Array(data.ingredient2));
    formData.append("ingredient3", Array(data.ingredient3));
    formData.append("ingredient4", Array(data.ingredient4));
    formData.append("ingredient5", Array(data.ingredient5));
    formData.append("ingredient6", Array(data.ingredient6));
    formData.append("ingredient7", Array(data.ingredient7));
    formData.append("description1", Array(data.description1));
    formData.append("description2", Array(data.description2));
    formData.append("description3", Array(data.description3));
    formData.append("description4", Array(data.description4));
    formData.append("description5", Array(data.description5));
    formData.append("description6", Array(data.description6));
    formData.append("category", data.category);

  
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        nombre: "",
        cuisson: "",
        preparation: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
        ingredient6: "",
        ingredient7: "",
        description1: "",
        description2: "",
        description3: "",
        description4: "",
        description5: "",
        description6: "",
        description7: "",
        category: "Sucrées",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
 // console.log(data);


  return (
    <>
      {/** 1) creer le formulaire */}
      <div className="add">
       
        {/** 8) onSubmitHandler */}
        <form onSubmit={onSubmitHandler} className="form-admin">
           <h1>Ajouter vos recettes</h1>
          <div className="add-img-upload flex-col">
            <p style={{ color: "black" }}>Téléchargez votre image</p>
            <label htmlFor="image">
              {/** 3 image preview */}
              <img
                style={{ cursor: "pointer" }}
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="add image"
              />
            </label>
            {/*2) input onChange */}
            <input
              onChange={(event) => setImage(event.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>

          <div className="add-product-name flex-col">
            <p style={{ color: "black" }}>Nom de la recette</p>
            {/** 6) ajouter onChangeHander et value */}
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="nom recette"
            />
          </div>

          <p style={{ color: "black" }}>Nombre de personne </p>
          <input
            style={{ padding: "0.25rem" }}
            onChange={onChangeHandler}
            value={data.nombre}
            type="number"
            name="nombre"
            placeholder="nombre personne"
          />

          <p style={{ color: "black" }}>Temps de preparation</p>
          <input
            style={{ padding: "0.25rem" }}
            onChange={onChangeHandler}
            value={data.preparation}
            type="number"
            name="preparation"
            placeholder="temps préparation"
          />

          <p style={{ color: "black" }}>Temps de cuisson</p>
          <input
            style={{ padding: "0.25rem" }}
            onChange={onChangeHandler}
            value={data.cuisson}
            type="number"
            name="cuisson"
            placeholder="temps cuisson"
          />

          <div className="add-product-description flex-col">
            <p style={{ color: "black" }}>Ingredients</p>
            {/** 6) ajouter onChangeHander et value */}
            <textarea
              onChange={onChangeHandler}
              value={data.ingredient1}
              name="ingredient1"
              rows="2"
              placeholder="ingredient1"
              required
            ></textarea>

            <textarea
              onChange={onChangeHandler}
              value={data.ingredient2}
              name="ingredient2"
              rows="2"
              placeholder="ingredient2"
              required
            ></textarea>

            <textarea
              onChange={onChangeHandler}
              value={data.ingredient3}
              name="ingredient3"
              rows="2"
              placeholder="ingredient3"
              required
            ></textarea>

            <textarea
              onChange={onChangeHandler}
              value={data.ingredient4}
              name="ingredient4"
              rows="2"
              placeholder="ingredient4"
              required
            ></textarea>

            <textarea
              onChange={onChangeHandler}
              value={data.ingredient5}
              name="ingredient5"
              rows="2"
              placeholder="ingredient5"
            ></textarea>

            <textarea
              onChange={onChangeHandler}
              value={data.ingredient6}
              name="ingredient6"
              rows="2"
              placeholder="ingredient6"
            ></textarea>

            <textarea
              onChange={onChangeHandler}
              value={data.ingredient7}
              name="ingredient7"
              rows="2"
              placeholder="ingredient7"
            ></textarea>

            <p style={{ color: "black" }}>Description 1</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description1}
              name="description1"
              rows="4"
              placeholder="description1"
              required
            ></textarea>

            <p style={{ color: "black" }}>Description 2</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description2}
              name="description2"
              rows="4"
              placeholder="description2"
              required
            ></textarea>

            <p style={{ color: "black" }}>Description 3</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description3}
              name="description3"
              rows="4"
              placeholder="description3"
              required
            ></textarea>

            <p style={{ color: "black" }}>Description 4</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description4}
              name="description4"
              rows="4"
              placeholder="description4"
              required
            ></textarea>

            <p style={{ color: "black" }}>Description 5</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description5}
              name="description5"
              rows="4"
              placeholder="description5"
            ></textarea>

            <p style={{ color: "black" }}>Description 6</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description6}
              name="description6"
              rows="4"
              placeholder="description6"
            ></textarea>

            <p style={{ color: "black" }}>Description 7</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description7}
              name="description7"
              rows="4"
              placeholder="description7"
            ></textarea>
          </div>

          <div className="add-category">
            <div className="add-category ">
              <p style={{ margin: "1rem", color: "black" }}>
                Sélectionner la catégorie
              </p>{" "}
              {/** 6) ajouter onChangeHander */}
              <select onChange={onChangeHandler} name="category">
                <option value="Sucrées">Recettes sucrées</option>
                <option value="Salées">Recettes salées</option>
              </select>
            </div>
          </div>

          <button className="add-btn" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
