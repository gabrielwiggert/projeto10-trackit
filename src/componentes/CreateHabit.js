import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";

import UserContext from "./UserContext";

export default function CreateHabit() {
    const { newHabit, setNewHabit } = useContext(UserContext);

    const [habit, setHabit] = useState("");
	//const [days, setDays] = useState("");
    return (
            <Form2>
                <form onSubmit={saveHabit(habit)}>
                    <input type="text" placeholder="nome do habito" value={habit} onChange={e => setHabit(e.target.value)} required />
                    <br />

                    <Days>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </Days>

                    <Buttons>
                        <button onClick={() => {setNewHabit(null)}}>Cancelar</button>
                        <button type="submit">Salvar</button>
                    </Buttons>
                </form>
            </Form2>
    );
}

function saveHabit(habit) {
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
    }
`;

const Buttons = styled.div`
    display: flex;
`;