import React from "react";
import styled from "styled-components";
import CircleImage from "../../../assets/circle.png";

type Props = {
    percent: number,
    subtitle: string
}

const CircleGraph: React.FC<Props> = (props: Props) => {
    const {percent, subtitle} = props;
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <TravelDetailCircleGraph background={CircleImage}>
                {percent.toString()}
            </TravelDetailCircleGraph>
            <span style={{fontSize: 11, color: '#90D011', fontWeight: 900,}}>{subtitle}</span>
        </div>
    );
}


const TravelDetailCircleGraph = styled.div`
    width: 54px;
    height: 54px;
    
    background: ${(props:{background: string}) => `url(${props.background}) no-repeat top center`};
    background-size: 100% 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: #90D011;
    font-size: 15;
    font-weight: 900
`;

export default CircleGraph;