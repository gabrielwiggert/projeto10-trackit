import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import axios from "axios";

import UserContext from "./UserContext";

let selected = [false, false, false, false, false, false, false];

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
                        <Day enabled={selected[0]}>
                            <button onClick={(e) => {trataDias(e,"0")}}>D</button>
                        </Day>
                        <Day enabled={selected[1]}>
                            <button onClick={(e) => {trataDias(e,"1")}}>S</button>
                        </Day>
                        <Day enabled={selected[2]}>
                            <button onClick={(e) => {trataDias(e,"2")}}>T</button>
                        </Day>
                        <Day enabled={selected[3]}>
                            <button onClick={(e) => {trataDias(e,"3")}}>Q</button>
                        </Day>
                        <Day enabled={selected[4]}>
                            <button onClick={(e) => {trataDias(e,"4")}}>Q</button>
                        </Day>
                        <Day enabled={selected[5]}>
                            <button onClick={(e) => {trataDias(e,"5")}}>S</button>
                        </Day>
                        <Day enabled={selected[6]}>
                            <button onClick={(e) => {trataDias(e,"6")}}>S</button>
                        </Day>
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
        if (!days.includes(dia)) {
            selected[dia] = true;
            setDays([...days, dia]);
        }
        else if (days.includes(dia)) {
            selected[dia] = false;
            let dias = days;

            if (dias.length) {
                dias.pop(dia);
                setDays(...dias);
                if (!dias.length) {
                    setDays([]);
                }
            }
            else {
                setDays([]);
            }
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
`;

const Days = styled.div`
    display: flex;
`;

const Day = styled.div`
    button {
        width: 30px;
        height: 30px;
        margin-right: 5px;

        border-width: 1px;
        border-color: #D4D4D4;
        background-color: ${props => props.enabled ? "#CFCFCF" : "white"};
        border-radius: 5px;
        border: 1px solid #D5D5D5;
        margin-bottom: 6px;
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 20px;
        text-align: center;
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