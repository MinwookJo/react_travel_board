import React from "react";
import styled from "styled-components";
import InputField from "../../atom/InputField";
import { RootState } from "../../../store/reducer";
import { Dispatch, bindActionCreators } from "redux";
import {changeSerachCity, ChangeSearchCity} from "../../../store/action/Search/index"
import { connect } from "react-redux";

type Props = {
    city: string,
    changeSerachCity(city: string): ChangeSearchCity,
    searchVisible: boolean
}

// 헤더, 검색
class SearchHeader extends React.Component<Props> {
    private renderSearchHeader() {
        const {searchVisible, changeSerachCity} = this.props;
        if(searchVisible) {
            return (
                <SearchHeaderPart>
                    <div style={{width: '90%', display: 'flex', flexDirection: 'row'}}>
                        <InputField onChange={(v: string) => changeSerachCity(v)} placeholder={'Serach City'}/>
                    </div>
                </SearchHeaderPart>
            )
        } else {
            return
        }
    }

    render() {
        return(
            <SearchHeaderBackgroundWrapper>
                <DefaultHeaderPart>
                    <div style={{width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <DefaultHeaderContent>
                            <DefaultHeaderIcon/>
                            <DefaultHeaderTitle>Venture Cost</DefaultHeaderTitle>
                        </DefaultHeaderContent>
                        <DefaultHeaderContent>
                            <DefaultMenuText>Explore</DefaultMenuText>
                            <DefaultMenuText>Users</DefaultMenuText>
                            <DefaultMenuText>Donate</DefaultMenuText>
                        </DefaultHeaderContent>
                    </div>
                </DefaultHeaderPart>
                {this.renderSearchHeader()}
            </SearchHeaderBackgroundWrapper>
        );
    }
}


// style
const SearchHeaderBackgroundWrapper  = styled.div`
    background-color: #3BC97B;
    width: 100%;
    margin-bottom: 30px
`;

const DefaultHeaderPart = styled.div`
    background-color: #3BC97B;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
`;

const DefaultHeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 55;
`;

const DefaultHeaderIcon = styled.div`
    width: 55px;
    height: 55px;
    background-color: #FFF;
    border-radius: 100%;
    margin-right: 15px
`;

const DefaultHeaderTitle = styled.div`
    color: #FFF;
    font-size: 17px;
    font-weight: 400
`

const DefaultMenuText = styled.div`
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    margin-left: 40px;
    @media (max-width: 500px) {
        margin-left: 10px;
    }
`

const SearchHeaderPart = styled.div`
    background-color: #3BC97B;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
`;

// redux
const mapStateToProps = (state: RootState) => ({
    city: state.searchReducer.city
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ changeSerachCity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);