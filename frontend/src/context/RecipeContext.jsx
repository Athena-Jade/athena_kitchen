import { createContext, useEffect, useState } from "react";
import { menu_list } from "../assets/data";
import { img_recipe } from "../assets/data";
import axios from "axios"


export const RecipeContext = createContext(null)
const RecipeContextProvider =(props) =>{
const url="http://localhost:5000"

   //remplace recipe_details du fichier data.js
    const[recipe_details, setRecipeDetails]=useState([])
     //fonction permettant de récupérer les recettes que j'ai tapées dans dossier admin
    const fetchRecipeList= async ( )=>{
        const response = await axios.get(url +"/api/food/list")
        setRecipeDetails(response.data.data)
    }

    useEffect(()=>{
        async function loadData(){
         await fetchRecipeList()
        }
        loadData()
        
    },[])








    const contextValue ={
        menu_list,
        img_recipe,
        url,
        recipe_details,
        setRecipeDetails
      
        
    }



    return(<RecipeContext.Provider value={contextValue}>
        {props.children}
    </RecipeContext.Provider>)
}

export default RecipeContextProvider;