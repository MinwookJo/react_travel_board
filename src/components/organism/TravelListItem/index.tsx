import React from "react";
import styled from "styled-components";
import { Travel } from "../../../model/Travel";
import PriceLabel from "../../atom/PriceLabel";
import PriceHorizontalGraph from "../../molecule/PriceHorizontalGraph";
import { Dispatch, bindActionCreators } from "redux";
import { deleteTravel, DeleteTravelAction } from "../../../store/action/Travel";
import { connect } from "react-redux";
import { deleteTravelCall } from "../../../api/Travel";

type Props = {
    travel: Travel;
    onClick: () => void;
    deleteTravel(id: number): DeleteTravelAction,
    toggleLoading: (flag: boolean) => void;
}

// 여행점보 리스트에 아이템
class TravelListItem extends React.Component<Props> {

    private onClickDeleteButton() {
        const {id} = this.props.travel;
        const {toggleLoading, deleteTravel} = this.props;
        toggleLoading(true);
        deleteTravelCall(id).then(
            () => {
                deleteTravel(id);
            }
        ).catch(
            (err) => {
                alert('Fail to Delete');
                console.log(err);
            }
        ).finally(() => {
            toggleLoading(false);
        });
    }

    render() {
        const {city, country, monthly_price_average, rate} = this.props.travel;
        const {onClick} = this.props;
        return(
            <TravelListItemCard>
                <TravelListImage background={this.props.travel.image_url} onClick={() => onClick()}>
                    <CityText>{city}</CityText>
                    <CountryText>{country}</CountryText>
                </TravelListImage>
                
                <div style={{padding: 5}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                        <TravelDeleteButton onClick={() => this.onClickDeleteButton()}>delete</TravelDeleteButton>
                    </div>
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
  @media (max-width: 700px) {
      margin: 0
  };
`;

const TravelListImage = styled.div`
    width: 100%;
    height: 208px;
    border-radius: 5px 5px 0 0;
    background: ${(props:{background: string}) => `url(${props.background}) no-repeat top center`};
    background-size: 100% 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer
`;

const TravelDeleteButton = styled.button`
    color: #F00;
    border: solid 1px;
    border-color: #F00;
    background-color: #FFF;
    width: 50px;
    height: 30px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    border-radius: 3px;
    outline: none;
`

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

// redux
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ deleteTravel }, dispatch);

export default connect(null, mapDispatchToProps)(TravelListItem);