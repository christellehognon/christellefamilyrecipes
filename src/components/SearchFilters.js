import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { recipes } from "../data"

const SearchFilters = ( {filteredRecipes, setFilteredRecipes }) => {
    const searches = ['Apéritif', 'Entrée', 'Plat', 'Dessert'];
    

    const filterBySearch = (event) => {
        const query = event.target.value.toLowerCase();

        var updatedList = filteredRecipes;
        if(query !== ""){
            updatedList = updatedList.filter((item) => {return item.slug.startsWith(query)})
            setFilteredRecipes(updatedList);
        }
        else {
            setFilteredRecipes(recipes);
        }
    };

    const filterByType = (event) => {
        const type = event.target.value;
        var updatedList = recipes.sort((a, b) => (a.slug.localeCompare(b.slug)));
        updatedList = updatedList.filter((item) => {return item.type.toLowerCase().indexOf(type.toLowerCase()) !== -1;})
            setFilteredRecipes(updatedList);
    };

    return (
        <div className="search-filters section">
            <h2>Filtrer par</h2>
            <div className="search-filters-container">
                { searches.map((search, index) => (<div className="search-item">
                    <button className="btn" value={search} style={{animationDelay: index * .1 + "s"}} onClick={(event) => filterByType(event)}>{search}</button>
                </div>)) }
            </div>
            <div className="search-box">
            <input type="text" placeholder="Recherche"  onChange={filterBySearch} />
                <button className="btn">
                <FontAwesomeIcon icon={faSearch} />
                </button>
                </div>
        </div>
    )
}

export default SearchFilters;