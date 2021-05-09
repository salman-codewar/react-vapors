import React from "react";
import styled from "styled-components";
import { Button as AntdButton } from "antd";
import { colors } from "../../../theme/colors";

interface IPrimaryButtonProps {
  title?: string;
  width?: string;
  height?: string;
  color?: string;
  fontcolor?: string;
  colorswap?: boolean;
  onClick?: () => void;
}

const Button = styled(AntdButton)<IPrimaryButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
  color: ${({ fontcolor }) => fontcolor};
  border: 2px solid #ffe37a;
  box-sizing: border-box;
  box-shadow: 0px 0px 24px rgba(255, 239, 169, 0.5),
    inset 0px 0px 12px rgba(255, 255, 255, 0.4);
  border-radius: 168px;
  font-size: 16px;
  font-style: 'bold';
  text-align: center;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: "hidden";
  text-overflow: "ellipsis";
  cursor: pointer;
  :colorswap {
    color: ${({ colorswap, fontcolor, color }) =>
      colorswap ? color : fontcolor};
    background-color: ${({ colorswap, fontcolor, color }) =>
      colorswap ? fontcolor : color};
  }
`;

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  title,
  width = "120px",
  height = "700px",
  color = `${colors.white}`,
  fontcolor = `${colors.black}`,
  colorswap,
  onClick,
}: IPrimaryButtonProps) => {
  return (
    <Button
      width={width}
      color={color}
      height={height}
      onClick={onClick}
      fontcolor={fontcolor}
      colorswap={colorswap}
      shape="round"
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
