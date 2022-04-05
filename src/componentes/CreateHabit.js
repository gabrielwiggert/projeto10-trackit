import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import axios from "axios";
import React from 'react'
import { render } from 'react-dom'
import { ThreeDots } from 'react-loader-spinner'

import UserContext from "./UserContext";

let selected = [false, false, false, false, false, false, false];

export default function CreateHabit() {
    const { newHabit, setNewHabit } = useContext(UserContext);
    const { days, setDays } = useContext(UserContext);
    const { userData, setUserData } = useContext(UserContext);
    const [habit, setHabit] = useState("");
    const [loading, setLoading] = useState(false);
    const config = {
        headers: {
            "Authorization": `Bearer ${userData[0]}`
        }
    }
    console.log(days);

    return (
            <Form2>
                <form onSubmit={(event) => {saveHabit(event, habit, days)}}>
                    <input type="text" placeholder="nome do habito" value={habit} onChange={e => setHabit(e.target.value)} required disabled={loading}/>
                    <br />
                    <Days>
                        <Day enabled={selected[0]}>
                            <button onClick={(e) => {trataDias(e,"0")}} disabled={loading}>D</button>
                        </Day>
                        <Day enabled={selected[1]}>
                            <button onClick={(e) => {trataDias(e,"1")}} disabled={loading}>S</button>
                        </Day>
                        <Day enabled={selected[2]}>
                            <button onClick={(e) => {trataDias(e,"2")}} disabled={loading}>T</button>
                        </Day>
                        <Day enabled={selected[3]}>
                            <button onClick={(e) => {trataDias(e,"3")}} disabled={loading}>Q</button>
                        </Day>
                        <Day enabled={selected[4]}>
                            <button onClick={(e) => {trataDias(e,"4")}} disabled={loading}>Q</button>
                        </Day>
                        <Day enabled={selected[5]}>
                            <button onClick={(e) => {trataDias(e,"5")}} disabled={loading}>S</button>
                        </Day>
                        <Day enabled={selected[6]}>
                            <button onClick={(e) => {trataDias(e,"6")}} disabled={loading}>S</button>
                        </Day>
                    </Days>

                    <Buttons>
                        <button onClick={() => {setNewHabit(null)}} disabled={loading}>Cancelar</button>
                        {loading ? <button disabled><ThreeDots color="#fff" height={'1.8rem'} width={'100%'} /></button> : <button type="submit">Salvar</button>}
                    </Buttons>
                </form>
            </Form2>
    );

    function trataDias(e, dia) {
        e.preventDefault();
        if (!days.includes(dia)) {
            selected[parseInt(dia)] = true;
            setDays([...days, dia]);
        }
        else if (days.includes(dia)) {
            selected[parseInt(dia)] = false;
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
        
        setLoading(true);

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

    input:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    button:disabled{
        background: grey;
        color: darkgray;
        opacity: 0.2;
        cursor: progress;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
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
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        padding-left: 11px;
    }

    input::placeholder {
        padding-left: 11px;
        font-size: 20px;
        color: #DBDBDB;
    }
`;

const Days = styled.div`
    display: flex;
    justify-content: flex-start;
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
        margin-top: 5px;
        width: 84px;
        height: 35px;
        margin-right: 5px;

        font-size: 16px;
        border: none;
        border-radius: 4.63636px;
    }

    button:last-child {
        background-color: #52B6FF;
        color: white;
    }

    button:first-child {
        background-color: white;
        color: #52B6FF;
    }
`;