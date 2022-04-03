import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Historico() {
    return (
        <FullScreen>
            <Header />
            <MeusHabitos>
                <AddHabit>
                    <SubHeader>
                        <h1>Histórico</h1>
                    </SubHeader>
                </AddHabit>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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