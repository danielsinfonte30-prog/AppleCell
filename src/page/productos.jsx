import Card from "../components/card.jsx"
import iphone17 from "../assets/iphone17.jpg"
import watch from "../assets/watch.jpg"
import "../csscomponents/productos.css"

const productos = [
  {
    title: "iPhone 17",
    description: "El iphone 17 es el ultimo modelo de Apple con una camara de mucho mejor calidad y un procesador mas rapido",
    image: iphone17,
  },
  {
    title: " Apple Watch Ultra 4",
    description: "El Apple Watch Ultra 4 es el reloj inteligente de Apple con una pantalla de mayor resolución y una batería de mayor duración",
    image: watch,
  },
]

function Productos(){
    return(
        <div className="productos">
            <h1>Productos</h1>
            <div className="produclista">
                {produclista.map((producto) => (
                    <Card key={producto.title} {...producto} />
                ))}
                </div>
          </section>
    )
}

export default Productos 