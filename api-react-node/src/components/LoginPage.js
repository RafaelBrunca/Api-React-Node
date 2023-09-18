import "./FormStyle.css"

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getToken } from "../functions/tokenGen.js";
/*import refreshToken from "../functions/refreshToken.js";*/

function LoginPage() {

    const [values, setValues] = useState({
        nome: '',
        senha: ''
    })

    const [error, setError] = useState('');

    const navigate = useNavigate()
    
    function handleChange(event) {
        const { name, value } = event.target
        setValues(prevValues => ({
            ...prevValues, [name]: value
        })
        )
    }

    useEffect(() => {
        const token = localStorage.getItem('token'); // Verifica se o token está presente no armazenamento local
        if (!token) {
            navigate('/AppLogin');
        }
    }, [navigate]);

    const handleBackInit = () => {
        navigate('/')
    }

    return (
        <form onSubmit={async (event) => {
            event.preventDefault()
            try {
                const token = await getToken(values.nome, values.senha)
                if (token && values.nome === 'rafael' && values.senha === '!Ih$n8zh') {
                    navigate('/AppHome')
                    localStorage.setItem('token', token)
                } else {
                    setError('Credenciais inválidas');
                }
            } catch (error) {
                console.log('Erro encontrado:', error)
            }
        }}
        >
            <div className="card">
                <div className="card-header">
                    <h2>Faça seu Login</h2>
                </div>
                <div className="card-content">
                    <div className="card-content-area">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            name="nome"
                            value={values.nome}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="card-content-area">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            value={values.senha}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="card-footer">
                    <button value="login" className="submit">Entrar</button>
                </div>
                <div className="card-footer">
                    <button onClick={handleBackInit} className="submit">Voltar a pagina de inicio</button>
                </div>
                {error && <div className="error-message">{error}</div>}
            </div> 
        </form>
    )
}

export default LoginPage