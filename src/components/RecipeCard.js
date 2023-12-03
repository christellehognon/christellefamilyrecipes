import CustomImage from "./CustomImage"
import { Link } from "react-router-dom";

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
                <CustomImage imgSrc={recipe.image} pt="65%" alt={recipe.name}/>
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} />
                <p className="recipe-title">{recipe.name}</p>
                <div className="recipe-card-info-button">
                        <button className="recipe-btn">{recipe.season}</button>
                        <button className="recipe-btn">{recipe.difficulty}</button>
                        <button className="recipe-btn">{recipe.type}</button>
                        <button className="recipe-btn">{recipe.averagePrice}</button>
                    </div>
                <Link to={`/recipes/${recipe.slug}`} state={{ recipe: recipe }} className="view-btn">Voir la recette</Link>
            </div>
        </div>
    )
}