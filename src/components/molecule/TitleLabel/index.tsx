import React from 'react';
import styled from 'styled-components';

type Props = {
    title: string,
    content: string,
    contentColor?: string
}

// 머릿말과 내용으로 구성된 라벨 
const TitleLabel: React.FC<Props> = (props: Props) => {
    const {title, content, contentColor} = props;
    return(
        <TitlelabelWrapper>
            <TitleLabelTitle>
                {title}
            </TitleLabelTitle>
            <TitleLabelContent textColor={contentColor || '#677983'}>
                {content}
            </TitleLabelContent>
        </TitlelabelWrapper>
    );
}

// style
const TitlelabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleLabelTitle = styled.div`
    color: #B1C3CD;
    font-size: 13px;
    font-weight: 400
`;

const TitleLabelContent = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${(props:{textColor?: string}) => `${props.textColor}`};
`;

export default TitleLabel;