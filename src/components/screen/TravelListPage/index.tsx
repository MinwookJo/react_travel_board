import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { ROUTE_PATH } from "../../../constants/router";

type Props = RouteComponentProps & {

}

class TravelListpage extends React.Component<Props> {
    render() {
        return(
            <div onClick={() => {this.props.history.push(ROUTE_PATH.DETAIL_PAGE.replace(':travelId', '1'))}}>
                Travel List page
            </div>
        )
    }
}

export default withRouter(TravelListpage);