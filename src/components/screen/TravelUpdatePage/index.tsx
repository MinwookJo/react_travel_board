import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";

type Props = RouteComponentProps<{travelId: string}> & {
    
}

class TravelUpdatePage extends React.Component<Props> {
    render() {
        return(
            <div onClick={() => {
                console.log(this.props.match.params.travelId);
            }}>
                Travel Update Page
            </div>
        );
    }
}

export default withRouter(TravelUpdatePage);