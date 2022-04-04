import styled from "styled-components";
import { useContext } from "react";
import axios from "axios";

import UserContext from "./UserContext";
import trash from "./../assets/imgs/trash.png";

export default function Habito(props) {
    const { userData, setUserData } = useContext(UserContext);
    const { habitName, habitDays, habitId } = props;

    const config = {
        headers: {
            "Authorization": `Bearer ${userData[0]}`
        }
    }

    return (
        <SavedHabit>
            <Container>
                <h1>{habitName}</h1>

                <Days>
                    <button >D</button>
                    <button >S</button>
                    <button >T</button>
                    <button >Q</button>
                    <button >Q</button>
                    <button >S</button>
                    <button >S</button>
                </Days>
            </Container>
            <img src={trash} onClick={() => deleteHabit()}/>
        </SavedHabit>
    );

    function deleteHabit() {
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, config);

        requisicao.then((response) => {
            console.log(response.data);
        });

        requisicao.catch((err) => {
            console.log(err);
            alert(err);
        });
    }
}

const Container = styled.div`
`;

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

    img {
        height: 13px;
    }
`;

const Days = styled.div`
    display: flex;
    button {
        width: 30px;
        height: 30px;
        margin-right: 5px;

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