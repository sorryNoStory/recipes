import check from "./check.png";

function Component({
  label,
  image,
  cal,
  ingredientLines,
  dishType,
  dietLabels,
  cuisineType,
}) {
  return (
    <div className="recipeAll">
      <h2>{label}</h2>
      <img className="recipeImg" src={image} alt="recipeImg" />
      <p className="cal">{cal.toFixed()} calories</p>
      <ul className="list">
        {ingredientLines.map((ingredient) => (
          <li>
            {" "}
            <img src={check} className="icon" alt="icon" width="25px" />{" "}
            {ingredient}
          </li>
        ))}
      </ul>
      <div className="recipeAdd">
        <p>{dishType}</p>
        <p>{dietLabels}</p>
        <p>{cuisineType}</p>
      </div>
    </div>
  );
}

export default Component;
