import React from "react";
import SearchHeader from "../../organism/SearchHeader";
import TravelAddForm from "../../organism/TravelAddForm";
import { insertTravelCall } from "../../../api/Travel";
import { Travel, TravelAddFormType } from "../../../model/Travel";
import { RootState } from "../../../store/reducer";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {insertTravel, InsertTravelAction} from "../../../store/action/Travel";
import LoadingImage from "../../molecule/LoadingImage";
import { withRouter, RouteComponentProps } from "react-router";
import { ROUTE_PATH } from "../../../constants/router";

type Props = {
    insertTravel(travel: Travel): InsertTravelAction,
} & RouteComponentProps

type State = {
    loadingVisible: boolean    
}

const initialState: State = {
    loadingVisible: false
}

class TravelAddPage extends React.Component<Props, State> {
    state = initialState;

    // 유효값 검사 후 실행될 함수
    onComplete = (travelForm: TravelAddFormType) => {
        const {history} = this.props;
        this.setState({loadingVisible: true});
        insertTravelCall(travelForm).then(
            (travelData: Travel) => {
                this.props.insertTravel(travelData);
                history.push(ROUTE_PATH.LIST_PAGE);
            }
        ).catch(
            (err) => {
                alert('Fail to Add Travel');
            }
        ).finally(
            () => {
                this.setState({loadingVisible: false});
            }
        )
    }

    render() {
        const {loadingVisible} = this.state;
        return(
            <div style={{flex: 1}}>
                <SearchHeader searchVisible={false}/>
                <div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                    <TravelAddForm onComplete={this.onComplete}/>
                </div>
                <LoadingImage visible={loadingVisible}/>
            </div>
        );
    }
}

// redux
const mapStateToProps = (state: RootState) => ({
    travels: state.travelReducer.travels,
    city: state.searchReducer.city
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ insertTravel }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TravelAddPage));
