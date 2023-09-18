import "./Init.css"
import { useNavigate } from "react-router";

function InitPage() {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/AppLogin')
    }

    return(
        <div className="initPage">
           <header>
                <h1>Bem-vindo ao Site de roupas do Projeto</h1>
            </header>
            <div className="container">
                <h2>Sobre nós</h2>
                <p>Somos uma loja virtual de roupas feita com Node e React.js</p>
            </div>
            <div className="botaoLogar">
                <button onClick={handleLogin} className="login-button">Logar no Site</button>
            </div>
        </div>
    )
}

export default InitPage