import React from "react";
import Loading from '../../../assets/loading.png';
import styled, { keyframes } from "styled-components";

type Props = {
    visible: boolean
}

// 비동기 실행시 사용되는 로딩
class LoadingImage extends React.Component<Props> {
    render() {
        const { visible } = this.props;
        return (
            <React.Fragment>
                {visible && (
                    <LoadingWrapper>
                        <LoadingImg
                            src={Loading}
                            alt={''}
                        />
                    </LoadingWrapper>
                )}
            </React.Fragment>
        );
    }
}


// style
const LoadingWrapper = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;

    background: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

// animation
const rotateKeyFrame = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingImg = styled.img`
    width: 5%;
    transition: transform 3s;
    animation: ${rotateKeyFrame} 3s infinite;
`

export default LoadingImage;