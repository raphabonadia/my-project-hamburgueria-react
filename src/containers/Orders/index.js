import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import Snack from "../../assets/snack.svg"
import Trash from "../../assets/trash.svg"
import { Container, Image, H1, Button, User } from "./styles"

function Orders() {
  
  const [ newOrder, setNewOrder] = useState([]);
  const history = useHistory()

   
    useEffect(() => {
      async function fetNewOrders() {

        const {data:allOrdersListed } = await axios.get("http://localhost:3001/orders")
        setNewOrder(allOrdersListed)
      }

      fetNewOrders()

    },[])

    async function deleteClient(orderId){
      await axios.delete(`http://localhost:3001/orders/${orderId}`)

      const orderDelete = newOrder.filter(order => order.id !== orderId)
      setNewOrder(orderDelete);
    }

    function goBackPage(){
      history.push("/")
    }

  return (
    <Container>
      <Image alt="imagem-lanche" src={Snack} />

      <H1> Pedidos</H1>

      

      <ul>
        {newOrder.map(order => (
          <User key={order.id}>
           <p> {order.orders}</p>
           <p> {order.clientName}</p>
           <p> {order.status}</p>
           <button onClick={ ()=>deleteClient(order.id)}><img src={Trash} alt="lata-de-lixo"/></button>
           </User>
        ))

        }

      </ul>
      <Button onClick={goBackPage}>Voltar</Button>
    </Container>
  )

}

export default Orders

