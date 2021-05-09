import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';

const { Footer } = Layout;

const Wrapper = styled(Footer)`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  @media (max-width: 980px) {
    height: 80px;
    padding: 7px 20px;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const CopyRightText = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0px;
  color: ${colors.blackRock};

  @media (max-width: 980px) {
    margin-top: 5px;
  }
`;

const PrimaryLayoutFooter: React.FC = () => {
  return (
    <Wrapper>
      <CopyRightText>© 2021 React Vapors.</CopyRightText>
    </Wrapper>
  );
};

export default PrimaryLayoutFooter;
