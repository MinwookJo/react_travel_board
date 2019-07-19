import React from "react";
import SearchHeader from "../../organism/SearchHeader";
import TravelAddForm, { TravelAddFormType } from "./components/TravelAddForm";

class TravelAddPage extends React.Component {

    onSubmit(travel: TravelAddFormType) {
        console.log('MJ', travel);
    }

    render() {
        return(
            <div style={{flex: 1}}>
                <SearchHeader searchVisible={false}/>
                <div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                    <TravelAddForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default TravelAddPage;