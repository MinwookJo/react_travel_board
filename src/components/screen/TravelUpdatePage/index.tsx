import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import SearchHeader from "../../organism/SearchHeader";
import LoadingImage from "../../molecule/LoadingImage";
import TravelUpdateForm from "../../organism/TravelUpdateForm";
import { TravelUpdateFormType, Travel } from "../../../model/Travel";
import { updateTravelCall } from "../../../api/Travel";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import {updateTravel, UpdateTravelAction} from "../../../store/action/Travel";
import { ROUTE_PATH } from "../../../constants/router";

type Props = RouteComponentProps<{travelId: string}> & {
    updateTravel(travel: Travel): UpdateTravelAction,
}

type State = {
    loadingVisible: boolean
}

const initialState: State = {
    loadingVisible: false
}

class TravelUpdatePage extends React.Component<Props, State> {
    state = initialState;

    // 유효값 검사 후 실행될 함수
    onComplete = (travelForm: TravelUpdateFormType) => {
        const {travelId} = this.props.match.params;
        const {updateTravel, history} = this.props;
        this.setState({loadingVisible: true});
        updateTravelCall(Number(travelId), travelForm).then(
            (travel: Travel) => {
                updateTravel(travel);
                history.push(ROUTE_PATH.LIST_PAGE);
            }
        ).catch((err) => {
            console.log(err);
        }).finally(
            () => {
                this.setState({loadingVisible: false});
            }
        )
    }

    render() {
        const {loadingVisible} = this.state;
        const {travelId} = this.props.match.params;
        return(
            <div style={{flex: 1}}>
                <SearchHeader searchVisible={false}/>
                <div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                    <TravelUpdateForm onComplete={this.onComplete} travelId={Number(travelId)}/>
                </div>
                <LoadingImage visible={loadingVisible}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ updateTravel }, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(TravelUpdatePage));