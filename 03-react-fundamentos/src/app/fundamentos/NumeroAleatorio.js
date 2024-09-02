import React from 'react'

export default function NumeroAleatorio() {
    
    const NumeroAleatorio = Math.floor(Math.random() * 1000) + 1

    return (

                <>
                    <h2>Número Aleatorio</h2>
                    <p>{NumeroAleatorio}</p>
                </>

    )
}   
