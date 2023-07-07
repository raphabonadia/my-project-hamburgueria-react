import React, {useState, useRef} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import Logo from "../../assets/logo.svg"

import { Container, Image, H1, InputLabel, Input, Button } from "./styles"

function App() {
  
  const [ newOrder, setNewOrder] = useState([]);
  const history = useHistory()
  const inputOrders = useRef()
  const inputClientName = useRef()

   
    async function addNewOrder(){

       const {data: allOrders} = await axios.post("http://localhost:3001/orders", 
         {orders: inputOrders.current.value, clientName: inputClientName.current.value });
      
       setNewOrder([...newOrder, allOrders ]);

      history.push("/pedidos")
    }

  
  return (
    <Container>
      <Image alt="logo-imagem" src={Logo} />

      <H1>Faça seu pedido !</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrders} placeholder="1 coca-cola, 1 X-Salada" />

      <InputLabel>Cliente</InputLabel>
      <Input ref={inputClientName} placeholder="Nome" />

      <Button onClick={addNewOrder}>
        Novo Pedido
        </Button>

      
    </Container>
  )

}

export default App

