import React from 'react';
import styled from 'styled-components';
import { Button as AntdButton } from 'antd';
import { colors } from '../../../theme/colors';

type SecondaryButtonProps = {
    height?: string;
    width?: string;
    color?: string;
    fontcolor?: string;
    title?: string;
    classname?: string;
    marginleft?: string;
    icon?: any;
    type?: any;
    onClick?: () => void;
};

const Button = styled(AntdButton)<SecondaryButtonProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ color }) => color};
    color: ${({ fontcolor }) => fontcolor};
    margin-left: ${({ marginleft }) => marginleft || '0px'};
    box-shadow: 0 5px 10px 2px rgba(88, 103, 221, 0.19) !important;
    border-radius: 0.25rem;
    font-size: 13px;
    text-align: center;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: 'hidden';
    text-overflow: 'ellipsis';
    border-radius: 168px;
`;

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
    title,
    color = colors.softBlue,
    width = '85px',
    height = '38px',
    marginleft,
    fontcolor = colors.white,
    classname,
    icon,
    type,
    onClick,
}: SecondaryButtonProps) => {
    return (
        <Button
            type={type}
            icon={icon}
            width={width}
            color={color}
            height={height}
            onClick={onClick}
            className={classname}
            marginleft={marginleft}
            fontcolor={fontcolor}>
            {title}
        </Button>
    );
};

export default SecondaryButton;
