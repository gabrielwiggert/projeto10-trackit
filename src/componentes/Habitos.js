import { useContext } from "react";
import axios from "axios";

import Header from "./Header";
import UserContext from "./UserContext";

export default function Habitos() {
    const { userData, setUserData } = useContext(UserContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${userData[0]}`
        }
    }
    
    const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

    requisicao.then((response) => {
        console.log(response.data);
        alert("deu certo!");
    });

    requisicao.catch((err) => {
        console.log(err);
        alert(err);
    });

    return (
        <Header />
    );
}