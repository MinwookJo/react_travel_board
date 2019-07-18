import React from "react";
import styled from "styled-components";

type Props = {
    rate: number
}

class PriceHorizontalGraph extends React.Component<Props> {
    render() {
        const {rate} = this.props;
        return(
            <div style={{marginTop: 10}}>
                <PriceGrapghEmptyPart>
                    <PriceGraphFillPart percente={(rate / 5) * 100}/>
                </PriceGrapghEmptyPart>
                <RateText>{'Rated ' + rate + ' based on Review'}</RateText>
            </div>
        );
    }
}

const PriceGraphFillPart = styled.div`
    width: ${(props:{percente: number}) => `${props.percente}%`};
    height: 5px;
    background-color: #72DA83;
    
`;
const PriceGrapghEmptyPart = styled.div`
    width: 100%;
    height: 5px;
    background-color: #EAF2F6;
`;

const RateText = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #B1C3CD;
    font-size: 11.9px;
`;

export default PriceHorizontalGraph;