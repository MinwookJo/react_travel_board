import React from "react";
import styled from "styled-components";
import InputField from "../../atom/InputField";
import { RootState } from "../../../store/reducer";
import { Dispatch, bindActionCreators } from "redux";
import {changeSerachCity, ChangeSearchCity} from "../../../store/action/Search/index"
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { ROUTE_PATH } from "../../../constants/router";

type Props = {
    city: string,
    changeSerachCity(city: string): ChangeSearchCity,
    searchVisible: boolean
} & RouteComponentProps

// 헤더, 검색 상단 바 searchVisible로 검색창 표시 선택
class SearchHeader extends React.Component<Props> {
    
    // searchVisible에 따라 검색 바를 렌더링하는 함수
    private renderSearchHeader() {
        const {searchVisible, changeSerachCity, history} = this.props;
        if(searchVisible) {
            return (
                <SearchHeaderPart>
                    <div style={{width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <InputField onChange={(v: string) => changeSerachCity(v)} placeholder={'Serach City'}/>
                        <AddTravelButton onClick={() => history.push(ROUTE_PATH.ADD_PAGE)}>Add</AddTravelButton>
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
                        <DefaultHeaderContent onClick={() => this.props.history.push(ROUTE_PATH.LIST_PAGE)}>
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
    cursor: pointer;
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

const AddTravelButton = styled.button`
    width: 66px;
    height: 32px;
    background-color: #FFF;
    color: #3BC97B;
    border-radius: 3px;
    border: none;
    outline: none;
    cursor: pointer
`;

// redux
const mapStateToProps = (state: RootState) => ({
    city: state.searchReducer.city
});
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ changeSerachCity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchHeader));