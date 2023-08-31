import { galeria } from "../config/database"

const Galeria = () =>{
    return(
        <section>
            {
                galeria.map((img)=>(
                    <section>
                        <h1>{img.nombre}</h1>
                        <img src={img.img} alt="" />
                    <a href={img.enlace}>{img.nombre}</a>
                    </section>
                ))
            }
        </section>
    )
}
export default Galeria