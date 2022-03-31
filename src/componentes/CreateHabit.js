import { useState } from "react";
import styled from "styled-components";

export default function CreateHabit() {
    const [habit, setHabit] = useState("");
	//const [days, setDays] = useState("");
    return (
            <Form>
                <form onSubmit={saveHabit(habit)}>
                    <input type="text" placeholder="nome do habito" value={habit} onChange={e => setHabit(e.target.value)} required />
                    <br />

                    <input type="checkbox" placeholder="D" />
                    <input type="checkbox" placeholder="S" />
                    <input type="checkbox" placeholder="T" />
                    <input type="checkbox" placeholder="Q" />
                    <input type="checkbox" placeholder="Q" />
                    <input type="checkbox" placeholder="S" />
                    <input type="checkbox" placeholder="S" />

                    <button type="submit">Salvar</button>
                </form>
            </Form>
    );
}

function saveHabit(habit) {
}

const Form = styled.div`
`;