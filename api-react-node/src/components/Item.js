import "./item.css"
import { useNavigate } from "react-router";
import React, { useEffect, useState } from 'react';

function Item() {

    const navigate = useNavigate()

    const [roupas, setRoupas] = useState([])

    useEffect(() => { //Executa após a requisição
        async function listarRoupas() {
            const token = localStorage.getItem('token')
            const response = await fetch('http://localhost:3050/roupas', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                }
            })

            const res = await response.json()
            const lista = await res.roupas
            setRoupas(lista)
            console.log(roupas)
        }

        listarRoupas()
    }, [roupas])    

    const handlevoltar = () => {
        navigate('/AppHome')
    }

    return(
        <div className="container">
            <div className="item-header">
                <h1>Produto: {roupas.nome}</h1>
            </div>
            <div className="item-price">
                <p>Preço: R${roupas.preco}</p>
            </div>
            <div className="item-price">
                <p>Quantidade em estoque: {roupas.estoque}</p>
            </div>
            <div className="item-button">
                <button onClick={handlevoltar} className="return-button">Voltar para pagina Home</button>
            </div>
        </div>
    );
}

export default Item;