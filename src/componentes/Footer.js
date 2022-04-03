import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <Bottom>
            <h1>Habitos</h1>
            <Link to="/Hoje">
                <h1>Hoje</h1>
            </Link>
            <h1>Histórico</h1>
        </Bottom>
    );
}

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