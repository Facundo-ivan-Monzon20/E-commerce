import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { httpGetAuthorization } from "../utils/httpFunctions"
import SubjectCards from "./SubjectCard"


const Carrito = () => {
    const [carrito, setcarrito] = useState([])

    const { userid } = useParams()

    const fetchCarrito = () => {
        httpGetAuthorization(`api/shoppingCartViewSet/`)
            .then((res) => setcarrito(res.data))
    }


    const usercarro = carrito.filter(item => item.usuario.id == userid).map(item => item.Product)

    const usercarroID = carrito.filter(item => item.usuario.id == userid).map(item => item.id)

    console.log(usercarroID)

    

    useEffect(fetchCarrito, [])

    return (
        <div>

            <h4>Tus compras</h4>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    usercarro.map((subjects) => {
                        return <SubjectCards subject={subjects}/>;
                    })

                }
                <form >
                    <button class="btn btn-danger m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg> Eliminar carrito</button>
                </form>
            </div>
        </div>
    )
}

export default Carrito;