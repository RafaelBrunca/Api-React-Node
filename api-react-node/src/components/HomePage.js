import { useNavigate } from "react-router";
import "./SearchStyle.css"
import React, { useEffect, useState } from 'react';

function HomePage() {

    const navigate = useNavigate()

    const [roupas, setRoupas] = useState([])
    const [searchItem, setSearchItem] = useState("");

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

    
    //Navegar para ver o item(Pagina estática)
    const handleItem = () => {
        navigate('/AppItem')
    }
    
    //função de Logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove o token do armazenamento local
        navigate('/AppLogin'); // Redireciona para a página de login
    };

    // Filtrar a lista de roupas com base no valor da pesquisa
    const filteredRoupas = roupas.filter(roupa =>
        roupa.nome.toLowerCase().includes(searchItem.toLowerCase())
    );
    
    return (
        <div className="HomePageMain">
            <div className="search-header">
                <h2>Procure seu produto</h2>
            </div>
            <div className="search-bar">
                <input
                    type="search"
                    placeholder="Pesquise pela peça de roupa..."
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
                {
                    filteredRoupas.map((roupa) => (
                        <span className="itens-roupa" key={roupa.id}>
                            <p>Item: {roupa.nome}</p>
                            <p>Preço: R${roupa.preco}</p>
                            <p>Quantidade: {roupa.estoque}</p>
                            <button onClick={handleItem} className="ver-item">Ver item</button>
                        </span>
                    ))
                }
            </div>
            <div className="botaoVoltar">
                <button onClick={handleLogout} className="return-button">Sair</button>
            </div>
        </div>
    );
}

export default HomePage