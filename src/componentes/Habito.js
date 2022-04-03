import styled from "styled-components";

export default function Habito(props) {
    const { habitName, habitDays } = props;
    return (
        <SavedHabit>
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
        </SavedHabit>
    );
}

const SavedHabit = styled.div`
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    height: 91px;
    padding: 13px;
    margin-top: 18px;
    
    h1 {
        color: #666666;
        margin-bottom: 8px;
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