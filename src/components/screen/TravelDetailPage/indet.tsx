import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import SearchHeader from "../../organism/SearchHeader";
import styled from "styled-components";
import { fetchTravelDetailCall } from "../../../api/Travel";
import { Travel, initialTravel } from "../../../model/Travel";
import LoadingImage from "../../molecule/LoadingImage";
import TravelDetailInfoCard from "../../organism/TravelDetailInfoCard";

type Props = RouteComponentProps<{travelId: string}> & {

}

type State = {
    travel: Travel,
    loadingVisible: boolean
}

const initialState: State = {
    travel: initialTravel,
    loadingVisible: false
}

// onClick={() => {this.props.history.push(ROUTE_PATH.UPDATE_PAGE.replace(':travelId', travelId))}}
class TravelDetailPage extends React.Component<Props, State> {
    state = initialState;

    componentWillMount() {
        const {travelId} = this.props.match.params;
        this.setState({loadingVisible: true});
        fetchTravelDetailCall(Number(travelId)).then(
            (travel: Travel) => {
                this.setState({travel: travel});
            }
        ).catch((err) => {
            console.log(err);
        }).finally(() => {
            this.setState({loadingVisible: false});
        })
    }

    render() {
        const {image_url, city, country, continent, trip_average, 
            housing_price, housing_type, expenses_price, 
            monthly_price_average, id} = this.state.travel;
        const {loadingVisible} = this.state;
        return(
            <div style={{backgroundColor: '#DDD', width: '100vw', height: '100vh'}}>
                <SearchHeader searchVisible={false}/>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <TravelDetailWrapper>
                        <TravelDetailInfoCard id={id} city={city} country={country} continent={continent} 
                        trip_average={trip_average} housing_price={housing_price} expenses_price={expenses_price} 
                        housing_type={housing_type} monthly_price_average={monthly_price_average}/>

                        <TravelDetailImageCard background={image_url}>
                            <DetailCityText>
                                {city}
                            </DetailCityText>
                            <DetailCountryText>
                                {country}
                            </DetailCountryText>
                        </TravelDetailImageCard>

                    </TravelDetailWrapper>
                </div>
                <LoadingImage visible={loadingVisible}/>
            </div>
        );
    }
}

const TravelDetailWrapper = styled.div`
    width: 1140px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const TravelDetailImageCard = styled.div`
    width: 755px;
    height: 100%;
    
    background: ${(props:{background: string}) => `url(${props.background}) no-repeat top center`};
    background-size: 100% 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const DetailCityText = styled.div`
    font-size: 37px;
    font-weight: 900;
    color: #FFF
`;

const DetailCountryText = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #FFF
`

export default withRouter(TravelDetailPage);