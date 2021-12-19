import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { httpGet, httpGetAuthorization, httpPostAuthorization } from '../../utils/httpFunctions'
import { Link } from 'react-router-dom'

const DetailProduct = () => {

    const [products, setProducts] = useState([])
    const [userData, setUserData] = useState({})
    const [numberProduct, setNumberProduct] = useState(0)

    const { id } = useParams()

    const fetchProducts = () => {
        httpGet(`api/product/${id}`)
            .then((res) => setProducts(res.data))
    }

    useEffect(fetchProducts, [])

    useEffect(() => {
        httpGetAuthorization('api/me').then((res) => setUserData(res.data))
    }, [])


    const createCarrito = (e) => {
        e.preventDefault()
        httpPostAuthorization('api/CartItemViewSet/', { Product: id, "usuario": userData.id })
            .then(window.alert("Su producto se guardo correctamente"))
    }



    return (
        <div >
            <Link to={`/Navbar/carrito/${userData.username}/${userData.id}`}><button type="button" class="btn agregar btn-lg btn-block mt-2 w-100"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg> Ver mi carrito {numberProduct}</button></Link>

            <h1>{products.name}</h1>
            <h1>{products.category}</h1>
            <h1>{products.description}</h1>
            <h1>{products.price}</h1>
            <h1>{products.features}</h1>
            <h1>{products.offerPercentage}</h1>



            <form onSubmit={createCarrito}>
                <div class="btn agregar btn-lg btn-block mt-2 w-100">
                    <button type="submit" class="btn btn-primary m-2 "

                        onClick={() => setNumberProduct(numberProduct + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg> Agregar al Carrito </button>
                </div>
            </form>

        </div>)

}

export default DetailProduct