import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

import UserContext from "./UserContext";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const { progress, setProgress } = useContext(UserContext);

    return(
        <Bottom>
            <Link to="/Habitos">
                <h1>Habitos</h1>
            </Link>
            <Link to="/Hoje">
                <Div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar value={progress} text={`Hoje`} />
                </Div>
            </Link>
            <Link to="/Historico">
                <h1>Histórico</h1>
            </Link>
        </Bottom>
    );
}

const Div = styled.div`
`;

const Bottom = styled.div`
    position: fixed;
    bottom: 0px;
    background-color: white;
    height: 70px;
    width: 100vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 31px;
    padding-right: 31px;

    h1 {
        color: #52B6FF;
    }

    a:link {
        text-decoration: none;
    }
`;