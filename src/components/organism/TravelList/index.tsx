import React, { ReactNode } from "react";
import { Travel, initialTravel } from "../../../model/Travel";
import { fetchTravelList, FetchTravelListAction } from "../../../store/action/Travel";
import { connect } from "react-redux";
import { RootState } from "../../../store/reducer";
import { Dispatch, bindActionCreators } from "redux";
import TravelListItem from "../TravelListItem";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router";
import { ROUTE_PATH } from "../../../constants/router";

type Props = {
    travels: Travel[]
    fetchTravelList(travels: Travel[]): FetchTravelListAction
} & RouteComponentProps

class TravelList extends React.Component<Props> {
    
    componentDidMount() {
        this.props.fetchTravelList([]);
    }

    private renderTravelItems = () => {
        const {travels, history} = this.props;
        const travelItems: ReactNode[] = [];
        travels.forEach(
            (item: Travel, index: number) => {
                travelItems.push(
                    <TravelListItem travel={item} 
                    key={'TravelListItem' + index}
                    onClick={() => {history.push(ROUTE_PATH.DETAIL_PAGE.replace(':travelId', item.id.toString()))}}/>
                );
            }
        )
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
    travels: state.travelReducer.travels
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ fetchTravelList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TravelList))