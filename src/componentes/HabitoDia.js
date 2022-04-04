import styled from "styled-components";
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import UserContext from "./UserContext";

export default function HabitoDia(props) {
    const { habitName, done, habitId, currentSequence, highestSequence } = props;
    const { userData, setUserData } = useContext(UserContext);
    const { refresh, setRefresh } = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${userData[0]}`
        }
    }

    return (
        <SavedHabit>
            <HabitData>
                <h1>{habitName}</h1>
                <h2>Sequência atual: {currentSequence} dias <br/>
                    Seu recorde: {highestSequence} dias</h2>
            </HabitData>
            <CheckMark enabled={done}>
                <h3 onClick={() => {markDone()}}>✓</h3>
            </CheckMark>
        </SavedHabit>
    );

    function markDone() {
        if (!done) {
            //useEffect(() => {
                const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`, {}, config);
            
                //requisicao.then(() => {setRefresh("check")});

                requisicao.catch((err) => {
                    console.log(err);
                    alert(err);
                });
            //}, []);
        }
        else {
            //useEffect(() => {
                const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`, {}, config);

                //requisicao.then(() => {setRefresh("uncheck")});

                requisicao.catch((err) => {
                    console.log(err);
                    alert(err);
                });
            //}, []);
        }
    }
}

const SavedHabit = styled.div`
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 91px;
    padding: 13px;
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    
    h1 {
        color: #666666;
        margin-bottom: 8px;
    }

    h2 {
        font-size: 13px;
        color: #666666;
    }
`;

const HabitData = styled.div`
`;

const CheckMark = styled.div`
    border-radius: 5px;
    
    background-color: ${props => props.enabled ? "#8FC549" : "#E7E7E7"};
    margin-right: 13px;
    width: 69px;
    height: 69px;

    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-size: 50px;
        color: white;
    }
`;