import React, { ReactNode } from "react";
import { Travel } from "../../../model/Travel";
import { fetchTravelList, FetchTravelListAction } from "../../../store/action/Travel";
import { changeSerachCity, ChangeSearchCity } from "../../../store/action/Search";
import { connect } from "react-redux";
import { RootState } from "../../../store/reducer";
import { Dispatch, bindActionCreators } from "redux";
import TravelListItem from "../TravelListItem";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { ROUTE_PATH } from "../../../constants/router";
import NoDataItem from "../../molecule/NoDataItem";
import { fetchTravel } from "../../../api/Travel";

type Props = {
    travels: Travel[],
    city: string,
    changeSerachCity(city: string): ChangeSearchCity,
    fetchTravelList(travels: Travel[]): FetchTravelListAction,
} & RouteComponentProps

// 여행정보 리스트
class TravelList extends React.Component<Props> {
    componentWillMount() {
        fetchTravel().then(
            (travels: Travel[]) => {      
                this.props.fetchTravelList(travels);
            }
        )
    }

    private renderTravelItems = () => {
        const {travels, city, history} = this.props;
        // filter로 키워드가 있는 아이템만 가져옴
        const filterdList: Travel[] = travels.filter(
            (element: Travel) => {
                const lowerTemp = element.city.toLocaleLowerCase();
                return (lowerTemp).includes(city.toLocaleLowerCase())
            }
        )
        // 가져온 아이템으로 렌더링
        const travelItems: ReactNode[] = [];
        filterdList.forEach(
            (item: Travel, index: number) => {
                travelItems.push(
                    <TravelListItem travel={item} 
                    key={'TravelListItem' + index}
                    onClick={() => {history.push(ROUTE_PATH.DETAIL_PAGE.replace(':travelId', item.id.toString()))}}/>
                );
            }
        )
        // 아이템이 없으면 텍스트 렌더링
        if(travelItems.length < 1) {
            travelItems.push(
                <NoDataItem key={'empty'}/>
            );
        }
        return (
            <TravelListItemWrapper>{travelItems}</TravelListItemWrapper>
        );
    }

    render() {
        return(
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                {this.renderTravelItems()}
            </div>
        );
    }
}

// style
const TravelListItemWrapper = styled.div`
    display: flex;
    flex-direction: row
    flex-wrap: wrap;
    width: 1140px;
    @media (max-width: 1200px) {
        width: 100%;
        justify-content: center;
    }
`;

// redux
const mapStateToProps = (state: RootState) => ({
    travels: state.travelReducer.travels,
    city: state.searchReducer.city
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fetchTravelList, changeSerachCity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TravelList))