import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { httpGet } from '../../utils/httpFunctions'

const DetailProduct = () => {

    const [products, setProducts] = useState([])

    const { id } = useParams()

    const fetchProducts = () => {
        httpGet(`api/product/${id}`)
            .then((res) => setProducts(res.data))
    }

    useEffect(fetchProducts, [])

    return (
        <div>
            <h1>{products.name}</h1>
            <h1>{products.category}</h1>
            <h1>{products.description}</h1>
            <h1>{products.price}</h1>
            <h1>{products.features}</h1>
            <h1>{products.offerPercentage}</h1>

        </div>)

}

export default DetailProduct