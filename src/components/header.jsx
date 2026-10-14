
import { Link } from "react-router-dom"
import "../csscomponents/header.css"
import logo from "../assets/logo.jpg";
function Header()  {
    return (
        <header>
            <div className= "logo">
                <img src={logo} alt="Logo de AppleCell" />
                <h1 className="brand-title">AppleCell</h1>
            </div>

            <nav>
                <Link to="/">Home</Link> 
                <Link to="/productos">Productos</Link>
                <Link to="/contacto">Contactos</Link>
            </nav>
        </header>
    )
}

export default Header 