import React from "react";
import styled from "styled-components";

// 데이터가 없을 때 표시하는 텍스트
const NoDataItem: React.FC = () => {
    return(
        <NodataItemText>
            No cities found
        </NodataItemText>
    );
}

// style
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