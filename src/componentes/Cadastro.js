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

            <Form>
                <form onSubmit={fazerLogin}>
                    <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required />
                    <input type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} required />
                    <input type="url" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)} required />
                    <button type="submit">Cadastrar</button>
                </form>
            </Form>

            <Cadastro>
                <Link to="/">
                    <h1>Já tem uma conta? Faça login!</h1>
                </Link>
            </Cadastro>
        </>
    );
}

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    margin-bottom: 30px;
`;

const Cadastro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a:link {
        text-decoration: none;
        text-decoration: black;
    }

    h1 {
        color: #52B6FF;
        text-decoration: underline;
    }
`;

const Form = styled.div`
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    input {
        border-width: 1px;
        border-color: #D4D4D4;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        width: 80vw;
        height: 45px;
        margin-bottom: 6px;
        font-family: 'Lexend Deca', sans-serif;
    }

    input::placeholder {
        padding-left: 11px;
        font-size: 20px;
        color: #DBDBDB;
    }

    button {
        border-style: none;
        border-radius: 5px;
        margin-bottom: 15px;
        width: 80vw;
        height: 45px;
        background-color: #52B6FF;
        color: white;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
    }
`;