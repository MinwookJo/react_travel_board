import React from "react";
import styled from "styled-components";

const NoDataItem: React.FC = () => {
    return(
        <NodataItemText>
            No cities found
        </NodataItemText>
    );
}

const NodataItemText = styled.div`
    color: #AAA;
    font-size: 14px;
    font-weight: 700;

    width: 100%;
    display: flex;
    justify-content: center;
    height: 100vh
`;

export default NoDataItem;