import React from "react";
import styled from "styled-components";
import { Travel } from "../../../model/Travel";
import PriceLabel from "../../atom/PriceLabel";
import PriceHorizontalGraph from "../../molecule/PriceHorizontalGraph";

type Props = {
    travel: Travel;
    onClick: () => void;
}

// 여행점보 리스트에 아이템
class TravelListItem extends React.Component<Props> {
    render() {
        const {city, country, monthly_price_average, rate} = this.props.travel;
        const {onClick} = this.props;
        return(
            <TravelListItemCard onClick={() => onClick()}>
                <TravelListImage background={this.props.travel.image_url}>
                    <CityText>{city}</CityText>
                    <CountryText>{country}</CountryText>
                </TravelListImage>
                <div style={{padding: 18}}>
                    <PriceLabel price={monthly_price_average}/>
                    <PriceHorizontalGraph rate={rate}/>
                </div>
            </TravelListItemCard>
        );
    }
}

// style
const TravelListItemCard = styled.div`
  width: 370px;
  height: 310px;
  margin: 0 10px 10px 0;
  background-color: #FFF;
  border-radius: 5px;
  cursor: pointer
  @media (max-width: 700px) {
      margin: 0
  };
`;

const TravelListImage = styled.div`
    width: 100%;
    height: 208px;
    border-radius: 5px 0;
    background: ${(props:{background: string}) => `url(${props.background}) no-repeat top center`};
    background-size: 100% 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CityText = styled.div`
    font-size: 1.8em;
    font-weight: 700;
    letter-spacing: -.015em;
    color: #FFF
`;

const CountryText = styled.div`
    font-size: 1.1em;
    font-weight: 500;
    color: #FFF
`;

export default TravelListItem;