import "./Recipe.css";
import RecipeItem from "../recipeItem/RecipeItem";


import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";

//foodDisplay

const Recipe = ({ category }) => {
  const { recipe_details } = useContext(RecipeContext);
  return (
    <section className="recipe">
      <h1>Voici mes recettes 
        {/**/}

      </h1>

      <div className="recipe-display-list">
        {recipe_details.map((item, index) => {
          if (category === "Toutes" || category === item.category) {
            return (
              <>
                <RecipeItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  nombre={item.nombre}
                  image={item.image}
                  cuisson={item.cuisson}
                  preparation={item.preparation}            
                  ingredient1={item.ingredient1}
                  ingredient2={item.ingredient2}
                  ingredient3={item.ingredient3}
                  ingredient4={item.ingredient4}
                  ingredient5={item.ingredient5}
                  ingredient6={item.ingredient6}
                  ingredient7={item.ingredient7}
                  description1={item.description1}
                  description2={item.description2}
                  description3={item.description3}
                  description4={item.description4}
                  description5={item.description5}
                  description6={item.description6}
                  description7={item.description7}
                  category={item.category}
                />
              </>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Recipe;
