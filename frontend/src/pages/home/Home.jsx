import "./Home.css";
import Header from "../../composants/header/Header";
import { useState } from "react";
import ExploreMenu from "../../composants/exploreMenu/ExploreMenu";
import Recipe from "../../composants/recipe/Recipe";

const Home = () => {
  const [category, setCategory] = useState("Toutes");
  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />
      {/** ExploreMenu */}

      <Recipe category={category} />
      {/** FoodDisplay */}
    </div>
  );
};

export default Home;
