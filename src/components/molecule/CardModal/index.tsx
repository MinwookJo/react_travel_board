import React from "react";
import styled from "styled-components";

type Props ={
    message: string,
    visible: boolean,
    onClick: () => void;
}

class CardModal extends React.Component<Props> {

    private renderModal() {
        const {message, onClick, visible} = this.props;
        if(visible) {
            return (
                <ModalBackground>
                    <ModalCard>
                        <ModalMessage>{message}</ModalMessage>
                        <ModalButton onClick={onClick}>
                            OK
                        </ModalButton>
                    </ModalCard>
                </ModalBackground>
            )
        } else {
            return null;
        }
    }

    render() {
        return(
            <React.Fragment>
                {this.renderModal()}
            </React.Fragment>
        );
    }
}

const ModalBackground = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 101;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalCard = styled.div`
    background-color: #FFF;
    width: 330px;
    height: 200px;
    border: 1px solid;
    border-color: #CCC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ModalMessage = styled.div`
    color: #333;
    font-size: 17px;
    font-weight: 700;
    padding-bottom: 30px
`;

const ModalButton = styled.button`
    width: 66px;
    height: 32px;
    background-color: #3BC97B;
    color: #FFF;
    border-radius: 3px;
    border: none;
    outline: none;
    cursor: pointer;
`

export default CardModal;
