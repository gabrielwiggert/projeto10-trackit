import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import logotipo from "./../assets/imgs/logotipo.png";

export default function Login () {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

	function fazerLogin (event) {
		event.preventDefault();

		const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: nome,
            image: foto,
            password: senha
        });

        requisicao.then((response) => {
            console.log(response.data);
            alert("deu certo!");
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
                <input type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} required />
                <input type="url" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <h1>Já tem uma conta? Faça login!</h1>
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