import React from "react";
import styled from "styled-components";

type Props = {
    continent: string,
    country: string,
    city: string
}

const TravelCategoryShower: React.FC<Props> = (props: Props) => {
    const {continent, city, country} = props;
    return(
        <TravelCategoryShowerWrapper>
            <div style={{paddingLeft: 20}}/>
            <TravelCategoryText>{'World'}</TravelCategoryText>
            <TravelCategoryArrow>></TravelCategoryArrow>
            <TravelCategoryText>{continent}</TravelCategoryText>
            <TravelCategoryArrow>></TravelCategoryArrow>
            <TravelCategoryText>{country}</TravelCategoryText>
            <TravelCategoryArrow>></TravelCategoryArrow>
            <TravelCategoryText>{city}</TravelCategoryText>
        </TravelCategoryShowerWrapper>
    );
}

// style
const TravelCategoryShowerWrapper = styled.div`
    display: flex;
    flex-direcetion: row;
    width: 100%;
    border-bottom: 1px solid;
    border-color: #CCC;
    height: 25px;
    align-items: center;
`

const TravelCategoryArrow = styled.div`
    color: #3AB96B;
    font-size: 9px;
    padding: 0 6px;
`
const TravelCategoryText = styled.div`
    color: #3BC97B;
    font-size: 12px;
    font-weight: 700
`
export default TravelCategoryShower;