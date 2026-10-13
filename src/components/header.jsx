
import { Link } from "react-router-dom"
import "../csscomponents/header.css"

function Header()  {
    return (
        <header>
            <div classname= "logo">
                <img src={logo} alt= "Logo de AppleCell"/>
                <h1>AppleCell</h1>
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