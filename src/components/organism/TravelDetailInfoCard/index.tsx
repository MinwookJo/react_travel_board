import React from "react";
import styled from "styled-components";
import { HOUSE_TYPE } from "../../../constants/travel";
import TravelCategoryShower from "../../molecule/TravelCategoryShower";
import TitleLabel from "../../molecule/TitleLabel";
import CircleGraph from "../../molecule/CircleGraph";
import { RouteComponentProps, withRouter } from "react-router";
import { ROUTE_PATH } from "../../../constants/router";

type Props = {
    id: number,
    city: string,
    country: string,
    continent: string,
    trip_average: number,
    housing_type: HOUSE_TYPE,
    housing_price: number,
    expenses_price: number,
    monthly_price_average: number
} & RouteComponentProps

class TravelDetailInfoCard extends React.Component<Props> {
    render() {
        const {id, city, continent, country, trip_average, 
            housing_price, housing_type, expenses_price, 
            monthly_price_average, history} = this.props;
        return(
            <TravelDetailInfoCardWrapper>
                <TravelInfoHeader>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TravelInfoTitle>{city + 'on a Budget'}</TravelInfoTitle>
                        <TravelInfoSubtitle>Based on trip</TravelInfoSubtitle>
                    </div>
                    <TravelUpdateUpdateButton onClick={() => {
                        history.push(ROUTE_PATH.UPDATE_PAGE.replace(':travelId', id.toString()))
                    }}>Update</TravelUpdateUpdateButton>
                </TravelInfoHeader>

                <TravelCategoryShower continent={continent} city={city} country={country}></TravelCategoryShower>
                <div style={{display: 'flex', flexDirection: 'column', padding: 40, width: 280}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <TitleLabel title={'Avg.Trip'} content={trip_average + ' Days'}></TitleLabel>
                        <div style={{paddingLeft: 40}}/>
                        <TitleLabel title={'Housing Type'} content={housing_type}></TitleLabel>
                    </div>
                    <div style={{paddingTop: 30}}/>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <TitleLabel title={'Housing'} content={housing_price + ' USD'}></TitleLabel>
                        <div style={{paddingLeft: 40}}/>
                        <TitleLabel title={'Expenses'} content={expenses_price + ' USD'}></TitleLabel>
                        <div style={{paddingLeft: 40}}/>
                        <TitleLabel title={'Monthly Avg.'} content={monthly_price_average + ' USD'} contentColor={'#3BC97B'}></TitleLabel>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <CircleGraph percent={4.3} subtitle={'Housing'}/>
                    <div style={{paddingLeft: 40}}/>
                    <CircleGraph percent={4.3} subtitle={'Food'}/>
                    <div style={{paddingLeft: 40}}/>
                    <CircleGraph percent={4.3} subtitle={'Life Quality'}/>
                </div>
            </TravelDetailInfoCardWrapper>
        );
    }
}

//style

const TravelDetailInfoCardWrapper = styled.div`
    width: 370px;
    height: 100%;
    background-color: #FFF;
    border-radius: 5px;
`;

const TravelInfoHeader = styled.div`
    width: 100%;
    height: 88px;
    border-radius: 5px 5px 0 0;
    background-color: #3BC97B;
    display: flex;
    flexDirection: row;
    justify-content: space-between
`;

const TravelInfoTitle = styled.div`
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    
    padding: 25px 25px 0 25px;
`;
const TravelInfoSubtitle = styled.div`
    color: #DEF7E9;
    font-size: 13px;
    font-weight: 400;
    
    padding: 0 25px 0 25px;
`;
const TravelUpdateUpdateButton = styled.button`
    width: 66px;
    height: 32px; 
    margin: 25px 25px 0 0;
    outline: none;
    border: none;
    background-color: #FFF;
    color: #3BC97B;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`
export default withRouter(TravelDetailInfoCard);