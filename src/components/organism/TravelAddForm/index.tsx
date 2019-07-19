import React from "react";
import styled from "styled-components";
import { HOUSE_TYPE } from "../../../constants/travel";
import { required } from "../../../utils/validator";
import InputField from "../../atom/InputField";
import SelectField from "../../atom/SelectField";
import { TravelAddFormType } from "../../../model/Travel";

type Props = {
    onComplete: (value: TravelAddFormType) => void;
}

type State = {
    // field 마다 에러, 폼 정보를 state로 가짐
    error: {
        city: string,
        country: string,
        continent: string,
        trip_average: string,
        housing_type: string,
        housing_price: string,
        expenses_price: string,
        monthly_price_average: string,
        image_url: string,
        rate: string
    }
} & TravelAddFormType

// state 초기값
const initialState: State = {
    city: '',
    country: '',
    continent: '',
    trip_average: 0,
    housing_type: HOUSE_TYPE.GUEST_HOUSE,
    housing_price: 0,
    expenses_price: 0,
    monthly_price_average: 0,
    image_url: '',
    rate: 0,
    error: {
        city: '',
        country: '',
        continent: '',
        trip_average: '',
        housing_type: '',
        housing_price: '',
        expenses_price: '',
        monthly_price_average: '',
        image_url: '',
        rate: '', 
    }
}

class TravelAddForm extends React.Component<Props, State> {
    state = initialState;
    
    // 유효값 검사
    private onValidator(onComplete: () => void) {
        const {city, continent, country, trip_average,
            housing_price, housing_type, expenses_price,
            image_url, rate, error} = this.state;
        try{
            if(!required(city)) {
                error.city = 'Invalid city';
                throw new Error(error.city);
            }
            if(!required(continent)) {
                error.continent = 'Invalid continent';
                throw new Error(error.continent);
            }
            if(!required(country)) {
                error.country = 'Invalid country';
                throw new Error(error.country);
            }
            if(!required(trip_average)) {
                error.trip_average = 'Invalid trip_average';
                throw new Error(error.trip_average);
            }
            if(!required(housing_price)) {
                error.housing_price = 'Invalid housing_price';
                throw new Error(error.housing_price);
            }
            if(!required(housing_type)) {
                error.housing_type = 'Invalid housing_type';
                throw new Error(error.housing_type);
            }
            if(!required(expenses_price)) {
                error.expenses_price = 'Invalid expenses_price';
                throw new Error(error.expenses_price);
            }
            if(!required(image_url)) {
                error.image_url = 'Invalid image_url';
                throw new Error(error.image_url);
            }
            if(!required(rate) || rate > 5 || rate < 0) {
                error.rate = 'Invalid rate';
                throw new Error(error.rate);
            }
            !!onComplete && onComplete();
        } catch(error) {
            alert(error);
        }
    }

    render() {
        const {onComplete} = this.props;
        const {city, continent, country, trip_average,
             housing_price, housing_type, expenses_price,
             image_url, rate} = this.state;
        return(
            <TravelPostForm>
                <div style={{width: '90%', color: '#FFF', fontSize: 17, display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                    <InputField onChange={(value: string) => this.setState({city: value})} placeholder={'city'}/>
                    <FormPadding/>

                    <InputField onChange={(value: string) => this.setState({continent: value})} placeholder={'continent'}/>
                    <FormPadding/>

                    <InputField onChange={(value: string) => this.setState({country: value})} placeholder={'country'}/>
                    <FormPadding/>

                    <InputField onChange={(value: string) => this.setState({trip_average: Number(value)})} 
                    placeholder={'trip average time cost'} type={'number'}/>
                    <FormPadding/>

                    <SelectField onChange={(value: string) => {
                        switch(value) {
                            case HOUSE_TYPE.HOTEL:
                                this.setState({housing_type: HOUSE_TYPE.HOTEL});
                                break;
                            case HOUSE_TYPE.APARTMENT:
                                this.setState({housing_type: HOUSE_TYPE.APARTMENT});
                                break;   
                            default :
                                this.setState({housing_type: HOUSE_TYPE.GUEST_HOUSE});
                                break;
                        }
                    }} options={[HOUSE_TYPE.GUEST_HOUSE, HOUSE_TYPE.APARTMENT, HOUSE_TYPE.HOTEL]}/>
                    <FormPadding/>

                    <InputField onChange={(value: string) => this.setState({housing_price: Number(value)})} 
                    placeholder={'house price'} type={'number'}/>
                    <FormPadding/>

                    <InputField onChange={(value: string) => this.setState({expenses_price: Number(value)})} 
                    placeholder={'expenses price'} type={'number'}/>
                    <FormPadding/>

                    <InputField onChange={(value: string) => this.setState({image_url: value})} 
                    placeholder={'image url'}/>
                    <FormPadding/>

                    <InputField onChange={(value: string) => this.setState({rate: Number(value)})} 
                    placeholder={'rate'}
                    type={'number'}/>
                    <FormPadding/>
                    
                    <SubmitButton onClick={() => {
                        const value: TravelAddFormType = {
                            city: city,
                            country: country,
                            continent: continent,
                            trip_average: trip_average,
                            housing_type: housing_type,
                            housing_price: housing_price,
                            expenses_price: expenses_price,
                            monthly_price_average: expenses_price + housing_price,
                            image_url: image_url,
                            rate: rate,
                        }
                        this.onValidator(() => onComplete(value));
                    }}>Add</SubmitButton>
                </div>
            </TravelPostForm>
        );
    }
}

// style
const TravelPostForm = styled.div`
    background-color: #3BC97B;
    width: 446px;
    height: 607px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FormPadding = styled.div`
    padding-top: 20px
`;

const SubmitButton = styled.button`
    width: 120px;
    height: 32px;
    background-color: #FFF;
    color: #3BC97B;
    border-radius: 3px;
    border: none;
    outline: none;
    cursor: pointer 
`

export default TravelAddForm;
