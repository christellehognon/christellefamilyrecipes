import { useLocation } from "react-router-dom"
import CustomImage from "../components/CustomImage"

export default function Recipe(){
    const location = useLocation();
    const recipe = location.state.recipe;
    
        return (
            <div className="recipe">
                <CustomImage imgSrc={recipe.image} pt="65%" alt={recipe.name}/>
                <div className="recipe-info">
                    <img className="author-img" src={recipe.authorImg} alt=""/>
                    <p className="recipe-title">{recipe.name}</p>
                    <div className="recipe-info-button">
                        <button className="recipe-btn">{recipe.season}</button>
                        <button className="recipe-btn">{recipe.difficulty}</button>
                        <button className="recipe-btn">{recipe.type}</button>
                        <button className="recipe-btn">{recipe.timeToCook}</button>
                        <button className="recipe-btn">{recipe.averagePrice}</button>
                    </div>
                    <div className="recipe-ingredients">Ingrédients: <ul >{recipe.ingredients.map((ingredient, index) => (<li key={index} className= "recipe-ingredients-li">{ ingredient }</li>))}</ul></div>
                    <p className="recipe-description">Descriptif: {recipe.description}</p>
                
                </div>
            </div>
        )
    }