import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
    onChange: (value: string) => void;
    width?: string;
    textColor?: string;
    options: string[];
    optionColor?: string;
    value?: string;
}

// 텍스트 인풋 컴포넌트
class SelectField extends React.Component<Props> {

    // option props를 렌더링
    private renderOptions() {
        const {options, optionColor} = this.props;
        const optionItmes: ReactNode[] = [];
        options.forEach(
            (item: string, index: number) => {
                optionItmes.push(
                    <option value={item} style={{color: !!optionColor ? optionColor : '#000'}} key={'option' + index}>
                        {item}
                    </option>
                );
            }
        )
        return optionItmes;
    }

    render() {
        const {onChange, width, textColor, value} = this.props;
        return(
            <Select
            value={value}
            onChange={(e: React.FormEvent<HTMLSelectElement>) => onChange(e.currentTarget.value)}
            width={!!width ? width : '416'}
            textColor={!!textColor ? textColor : '#FFF'}>
                {this.renderOptions()}
            </Select>
        );
    }
}

// style
const Select = styled.select`
    width: ${(props:{width?: string, textColor?: string}) => `${props.width}px`};
    height: 38px;
    padding-left: 12px
    color: ${(props:{textColor?: string}) => `${props.textColor}`};;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 0 0 1px rgba(255, 255, 255, 0.55);
    outline: none;
    border: none;
    box-sizing: border-box;
    border-radius: 3px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #FFF;
    }
    :-ms-input-placeholder {
        color: #FFF;
    }
`;

export default SelectField;