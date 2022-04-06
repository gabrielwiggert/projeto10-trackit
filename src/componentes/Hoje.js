import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import HabitoDia from "./HabitoDia";
import UserContext from "./UserContext";

var dayjs = require('dayjs');
//import dayjs from 'dayjs' // ES 2015
dayjs().format();

const day = dayjs().date();
const month = dayjs().month();
const weekDay = dayjs().day();
const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

export default function Hoje() {
    const { habits, setHabits } = useContext(UserContext);
    const { temHabito, setTemHabito } = useContext(UserContext);
    const { userData, setUserData } = useContext(UserContext);
    const { progress, setProgress } = useContext(UserContext);
    const { refresh, setRefresh } = useContext(UserContext);
    setRefresh(false);

    let habitsDone = 0;
    let numHabits = 0;
    let percentage = 0;
    habits.forEach((habit) => {
        if (habit.done) {
            habitsDone++;
            numHabits++;
        }
        else {numHabits++}
    });

    const config = {
        headers: {
            "Authorization": `Bearer ${userData[0]}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        requisicao.then((response) => {
            console.log(response.data);

            if ((response.data).length != 0) {
                setHabits(response.data);
                setTemHabito(true);
            }
        });
    
        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
    }, []);

    return (
        <FullScreen>
            <Header />
            <MeusHabitos>
                <AddHabit>
                    <SubHeader>
                        <h1>{weekDays[weekDay]}, {day}/{month+1}</h1>
                    </SubHeader>
                    {habitsDone ? doneRender() : nothingDoneRender()}
                </AddHabit>
                {temHabito ? renderHabits() : noHabitRender()}
            </MeusHabitos>
            <Footer />
        </FullScreen>
    );

    function doneRender() {
        percentage = (habitsDone / numHabits)*100;
        setProgress(percentage);
        
        return(
            <Percentage enabled={habitsDone}>
                <h2>{percentage.toFixed(2)} % dos hábitos concluídos</h2>
            </Percentage>
        );
    }

    function nothingDoneRender() {
        return(
            <h2>Nenhum hábito concluído ainda</h2>
        );
    }

    function noHabitRender() {
        return(
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        );
    }

    function renderHabits() {
        return(
            <>
                {habits.map(habit => <HabitoDia key={habit.id} habitName={habit.name} done={habit.done} habitId={habit.id} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}/>)}
            </>
            );
    }
}

const FullScreen = styled.div`
    height: 100vh;
    background-color: #DBDBDB;
`;

const Percentage = styled.div`
    h2 {
        padding-top: 8px;
        color: ${props => props.enabled ? "#8FC549" : "#BABABA"};
        font-size: 18px;
    }
`;

const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;

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

const AddHabit = styled.div`
`;

const MeusHabitos = styled.div`
    margin-top: 25px;
    margin-left: 17px;
    margin-right: 17px;

    h1 {
        color: #126BA5;
        font-size: 23px;
    }

    p {
        padding-top: 30px;
        color: #666666;
        font-size: 18px;
    }
`;