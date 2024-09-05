'use - client'


import axios from 'axios'
import { useEffect } from 'react'
import Pagina from '../components/Pagina'

export default function page() {

    useEffect(() => {
         axios.get('https://dummyjson.com/users')
        .then(resposta => {
            console.resposta(response.data.users)
        })        
    })




  return (
    <Pagina titulo="Consumo de API's">
      
    </Pagina>
  )
}

