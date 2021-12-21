import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { httpGet, httpGetAuthorization } from "../../utils/httpFunctions"



const DetalleCompra = () => {
  const [Vendedor, setvendedor] = useState([])

  const [Compra, setCompra] = useState({})

  const [userData, setUserData] = useState({})

  const [ProductCompra, setProductCompra] = useState({})

  const { id } = useParams()

  
  useEffect(() => {
    httpGetAuthorization('api/me').then((res) => setUserData(res.data))
  }, [])


  const fetchDetalleCompra = () => {
    httpGet(`api/CartItemViewSet/${id}/`)
      .then((res) => setCompra(res.data))
  }

  useEffect(fetchDetalleCompra, [])

  const fetchDetalleCompra2 = () => {
    httpGet(`api/CartItemViewSet/${id}/`)
      .then((res) => setProductCompra(res.data.Product))
  }

  useEffect(fetchDetalleCompra2, [])


  const IdProduct = ProductCompra.id



  const fetchvendedor = () => {
    httpGet(`api/CartItemViewSet/${id}/`)
      .then((res) => setvendedor(res.data.Product.usuario))
  }

  useEffect(fetchvendedor, [])

  return (
    <form>
      <label>
        Datos del vendedor:
        <ul>
          <li> Id: {Vendedor.id} </li>
          <li> Nombre y Apellido: {Vendedor.first_name} {Vendedor.last_name}</li>
          <li> Nombre de usuario: {Vendedor.username}</li>
          <li> Email: {Vendedor.email}</li>

        </ul>
      </label>

      <label>
        Datos del Comprador:
        <ul>
          <li> Id: {userData.id}</li>
          <li> Nombre y Apellido: {userData.first_name} {userData.last_name}</li>
          <li> Nombre de usuario: {userData.username}</li>
          <li> Email: {userData.email}</li>

        </ul>
      </label>
      <label>
        Detalles de la Compra:
        <ul>
          <li> Id: {Compra.id}</li>
          <li> Producto: {ProductCompra.name}
            <ul>
              <li>Categoria: {ProductCompra.category}</li>
              <li>precio: {ProductCompra.price}</li>
            </ul>
          </li>
          <li> Fecha de compra: {Compra.created_at}</li>
        </ul>
      </label>
    </form>
  )

}

export default DetalleCompra;