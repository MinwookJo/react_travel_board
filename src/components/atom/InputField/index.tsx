import React from "react";
import styled from "styled-components";

type Props = {
    placeholder?: string;
    onChange: (value: string) => void;
    width?: string;
    textColor?: string;
    type?: string;
    value?: string;
}

// 텍스트 인풋 컴포넌트
class InputField extends React.Component<Props> {
    render() {
        const {placeholder, onChange, width, textColor, type, value} = this.props;
        return(
            <Input placeholder={placeholder} 
            value={value}
            onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
            width={!!width ? width : '416'}
            textColor={!!textColor ? textColor : '#FFF'}
            type={type || 'text'}/>
        );
    }
}

// style
const Input = styled.input`
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

export default InputField;