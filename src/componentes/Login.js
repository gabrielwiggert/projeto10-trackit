import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import UserContext from "./UserContext";
import logotipo from "./../assets/imgs/logotipo.png";

export default function Login () {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

	function fazerLogin (event) {
		event.preventDefault();

		const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
			email: email,
			password: senha
		});

        requisicao.then((response) => {
            setUserData([response.data.token, response.data.image]);
            console.log(response.data);
            alert("deu certo!");
            navigate("/habitos");
        });

        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
	}

    return (
        <>
            <Logo>
            <img src={logotipo} />
            </Logo>

            <form onSubmit={fazerLogin}>
                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Link>
        </>
    );
}

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
`;