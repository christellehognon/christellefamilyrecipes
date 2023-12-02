import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">ChristelleFamillyRecipes</p>
            </div>
            <div className="footer-section">
                <p className="title">Contactez moi</p>
                <p>christellefamilyrecipes@gmail.com</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p><Link to="https://www.instagram.com/christellefamilyrecipes/#">Instagram</Link></p>
            </div>
            <div className="footer-section">
                <p>
                    <Link to="/mentions-legales" className="copyright">Mentions Légales</Link>
                </p>
            </div>
        </div>
    )
}