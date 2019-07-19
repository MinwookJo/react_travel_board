import React from "react";
import styled from "styled-components";

type Props = {
    price: number
}

// 가격 표시 라벨
const PriceLabel: React.FC<Props> = (props: Props) => {
    const {price} = props;
    return(
        <PriceTextLabel>
            {price + 'USD'}
        </PriceTextLabel>
    );
}

// style
const PriceTextLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3BC97B;
    background-color: #DAF6E7;
    width: 73px;
    height: 27px;
    font-weight: 700;
    font-size: 1.15em;
    border-radius: 3px;
`;

export default PriceLabel;