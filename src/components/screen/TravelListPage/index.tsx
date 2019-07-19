import * as React from "react";
import TravelList from "../../organism/TravelList";
import SearchHeader from "../../organism/SearchHeader";

class TravelListpage extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: '#DDD', flex: 1, minHeight: '100vh'}}>
                <SearchHeader searchVisible={true}/>
                <TravelList/>
            </div>
        )
    }
}

export default TravelListpage;