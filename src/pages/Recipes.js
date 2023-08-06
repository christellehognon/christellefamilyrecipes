import React, { useState } from 'react'
import RecipeCard from "../components/RecipeCard"
import SearchFilters from "../components/SearchFilters"
import { recipes } from "../data"

export default function Recipes(){
    const recipesSorted = recipes.sort((a, b) => (a.slug.localeCompare(b.slug)));
    const [filteredRecipes, setFilteredRecipes] = useState(recipesSorted);
    return (
        <div>
            <SearchFilters filteredRecipes = { filteredRecipes} setFilteredRecipes = { setFilteredRecipes }/>
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.slug} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}