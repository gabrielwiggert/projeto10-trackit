import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import CreateHabit from "./CreateHabit";
import UserContext from "./UserContext";

function montarCreateHabit(newHabit) {
    if (newHabit == "enabled") {
        return (
            <CreateHabit />
        );
    }
    else {
        return null;
    }
}

export default function Habitos() {
    const { userData, setUserData } = useContext(UserContext);
    const { newHabit, setNewHabit } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${userData[0]}`
        }
    }
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        requisicao.then((response) => {
            console.log(response.data);
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
                        <h1>Meus hábitos</h1>
                        <button onClick={() => {setNewHabit("enabled")}}>
                            +
                        </button>
                    </SubHeader>
                    
                    {montarCreateHabit(newHabit)}
                </AddHabit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </MeusHabitos>
            <Footer />
        </FullScreen>
    );
}

const FullScreen = styled.div`
    height: 100vh;
    background-color: #DBDBDB;
`;

const SubHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AddHabit = styled.div`
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