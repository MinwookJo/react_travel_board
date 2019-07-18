import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import TravelList from "../../organism/TravelList";

class TravelListpage extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: '#DDD', flex: 1}}>
                <TravelList/>
            </div>
        )
    }
}

export default TravelListpage;