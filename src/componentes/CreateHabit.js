import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import axios from "axios";

import UserContext from "./UserContext";

export default function CreateHabit() {
    const { newHabit, setNewHabit } = useContext(UserContext);
    const { days, setDays } = useContext(UserContext);
    const { userData, setUserData } = useContext(UserContext);
    const [habit, setHabit] = useState("");
    const config = {
        headers: {
            "Authorization": `Bearer ${userData[0]}`
        }
    }
    console.log(days);

    return (
            <Form2>
                <form onSubmit={(event) => {saveHabit(event, habit, days)}}>
                    <input type="text" placeholder="nome do habito" value={habit} onChange={e => setHabit(e.target.value)} required />
                    <br />
                    <Days>
                        <button onClick={(e) => {trataDias(e,"1")}}>D</button>
                        <button onClick={(e) => {trataDias(e,"2")}}>S</button>
                        <button onClick={(e) => {trataDias(e,"3")}}>T</button>
                        <button onClick={(e) => {trataDias(e,"4")}}>Q</button>
                        <button onClick={(e) => {trataDias(e,"5")}}>Q</button>
                        <button onClick={(e) => {trataDias(e,"6")}}>S</button>
                        <button onClick={(e) => {trataDias(e,"7")}}>S</button>
                    </Days>

                    <Buttons>
                        <button onClick={() => {setNewHabit(null)}}>Cancelar</button>
                        <button type="submit">Salvar</button>
                    </Buttons>
                </form>
            </Form2>
    );

    function trataDias(e, dia) {
        e.preventDefault();
        if (!days.includes(dia)) { //FAZER IMPLEMENT DE TROCAR A COR DO BOTAO
            setDays([...days, dia]);
        }
        if(days.includes(dia)) {
            days.pop(dia);
        }
    }

    function saveHabit(event, habit, days) {
        event.preventDefault();
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            name: habit,
            days: days
        }, config);

    requisicao.then((response) => {
        console.log(response.data);
    });

    requisicao.catch((err) => {
        console.log(err);
        alert(err);
    });

    setNewHabit(null);
    }
}

const Form2 = styled.div`
    background-color: white;
    height: 180px;
    padding: 15px;
    margin-top: 20px;
    border-radius: 5px;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
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
        border-width: 1px;
        border-color: #D4D4D4;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        margin-bottom: 6px;
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 20px;
        text-align: center;
    }
`;

const Days = styled.div`
    display: flex;
    button {
        width: 30px;
        height: 30px;
        margin-right: 5px;
    }
`;

const Buttons = styled.div`
    display: flex;

    button {
        width: 40px;
        height: 35px;

        background-color: #52B6FF;
        color: white;
        font-size: 27px;
        border: none;
        border-radius: 4.63636px;
    }
`;