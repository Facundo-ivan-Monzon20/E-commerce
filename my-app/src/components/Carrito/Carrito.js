import { useEffect, useState } from "react"
import { httpGetAuthorization } from "../../utils/httpFunctions"
import SubjectCards from "../SubjectCard"
import Deletecarrito from "./deletecarrito"
import Deletecarritocomplet from "./deletecarritocompleto"


const Carrito = () => {
    const [userData, setUserData] = useState({})
    const [userDataCarrito, setUserDataCarrito] = useState([])


    useEffect(() => {
        httpGetAuthorization('api/me').then((res) => setUserData(res.data))
    }, [])


    useEffect(() => {
        httpGetAuthorization('api/me').then((res) => setUserDataCarrito(res.data.shoppingCart))
    }, [])


    const usercarritoid = userDataCarrito.map(item => item.id)


    return (
        <div>

            <h4>Estas son tus compras {userData.first_name} {userData.last_name}</h4>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                {userDataCarrito.map((subjects) => {
                    return (<div>
                        <SubjectCards subject={subjects.Product} />
                        <Deletecarrito id={subjects.id} />

                    </div>)
                })}



                <Deletecarritocomplet
                    ids={usercarritoid} />



            </div>

        </div>

    )
}

export default Carrito;