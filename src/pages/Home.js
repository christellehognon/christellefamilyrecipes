import ChiefsSection from "../components/ChiefsSection";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data";

export default function Home(){
    recipes.sort(() => Math.random() - 0.5)
const recipesLimited  = [];
 for (let i = 0; i < 6; i++) {
    recipesLimited.push(recipes[i]);
}
    return (
        <div>
            <div>
                <div className="recipes-container">
                {recipesLimited.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
                </div>
            </div>
            <div>
                <ChiefsSection />
            </div>
        </div>
    )
}