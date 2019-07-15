import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { ROUTE_PATH } from "../../../constants/router";

type Props = RouteComponentProps<{travelId: string}> & {

}

class TravelDetailPage extends React.Component<Props> {
    render() {
        const {travelId} = this.props.match.params;
        return(
            <div onClick={() => {this.props.history.push(ROUTE_PATH.UPDATE_PAGE.replace(':travelId', travelId))}}>
                Travel Detail Page
            </div>
        );
    }
}

export default withRouter(TravelDetailPage);