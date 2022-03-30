import styled from "styled-components";

import TrackIt from "./../assets/imgs/TrackIt.png";

export default function Header() {
    return(
        <HeaderElements>
            <img src={TrackIt} />
            <img src={TrackIt} />
        </HeaderElements>
    );
}

const HeaderElements = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 15px;
    align-items: center;
    background-color: #126BA5;
`;