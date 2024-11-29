import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const List = ({ url }) => {
  //3) creer url backend
  //const url = "http://localhost:5000";

  //1) creer list avec useState
  const [list, setList] = useState([]);

  //2) récupérer la liste de tous les produits que j'ai ajoutés dans la bd
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    //console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  };

  
  //supprimer l'article  AVEC METHOD POST SINON NE FONCTIONNE PAS!!!!
  const deleteFood = async (foodId) => {
    // console.log(foodId);
    const response = await axios.post(`${url}/api/food/delete`, {
      id: foodId,
    });
    //mise à jour de la bdd
    await fetchList();

    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <h1>Voici la liste de vos recettes</h1>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return (
            <>
              <div key={index} className="list-table-format">
                <img src={`${url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>

                <p onClick={() => deleteFood(item._id)} className="cursor">
                  <FaTrash style={{ color: "rgb(224, 6, 43)" }} />
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default List;
