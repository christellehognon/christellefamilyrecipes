import { Link } from "react-router-dom";
export default function CustomImage({imgSrc, pt, alt, slug, recipe}){
    const hasImage = imgSrc.length > 0;
    if(!hasImage) {
        alt = "Image bientôt disponible";
    }
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <Link to={`/recipes/${slug}`} state={{ recipe: recipe }}className="view-btn">
            <img src={imgSrc} alt={alt}/>
            </Link>
        </div>
    )
}