import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    background-color: pink;
`

const Featured = () => {
    return(
        <Wrapper>
            MAIN SKETCH AREA
        </Wrapper>
    )

}

export default Featured