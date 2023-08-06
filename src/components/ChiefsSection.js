import ChiefCard from "./ChiefCard"
import { chiefs } from "../data"

export default function ChiefsSection(){
    
    return (
        <div className="section chiefs">
            <h1 className="title">Les Top-chefs</h1>
            <div className="top-chiefs-container">
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}