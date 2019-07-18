import React from "react";
import styled from "styled-components";

type Props = {
    placeholder?: string;
    onChange: (value: string) => void;
}

// 텍스트 인풋 컴포넌트
class InputField extends React.Component<Props> {
    render() {
        const {placeholder, onChange} = this.props;
        return(
            <Input placeholder={placeholder} onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}/>
        );
    }
}

const Input = styled.input`
    width: 416px;
    height: 38px;
    padding-left: 12px;
    color: #FFF;
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