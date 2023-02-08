import "./App.css";
import { useEffect, useState } from "react";
import video from "./video/food.mp4";
import search from "./img/look.png";
import Component from "./Component";

function App() {
  const API_ID = "e2985b4a";
  const API_KEY = "ef90ceea514b2e0f3eb98ede3fdf7b12";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setmyRecipes] = useState([]);
  const [wordSubmitted, setwordSubmitted] = useState("avocado");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await response.json();
      setmyRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setwordSubmitted(mySearch);
  };

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a recipe</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input
            className="search"
            placeholder="Search..."
            onChange={myRecipeSearch}
            value={mySearch}
          ></input>
          <button className="searchBtn">
            <img src={search} className="icons" alt="btn" width="45px" />
          </button>
        </form>
      </div>

      <div className="container"></div>

      <div className="recipe">
        {myRecipes.map((element) => (
          <Component
            key={
              element.recipe.label +
              element.recipe.image +
              element.recipe.calories
            }
            label={element.recipe.label}
            image={element.recipe.image}
            cal={element.recipe.calories}
            ingredientLines={element.recipe.ingredientLines}
            dishType={element.recipe.dishType}
            dietLabels={element.recipe.dietLabels}
            cuisineType={element.recipe.cuisineType}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
