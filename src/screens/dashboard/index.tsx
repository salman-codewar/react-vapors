import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { colors } from '../../theme/colors';

const Wrapper = styled.div`
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  margin: 0px 12px 12px 12px;
`;

const Content = styled.div`
  display: block;
  text-align: center;
  h1 {
    font-size: 44px;
    font-weight: 800;
    background: -webkit-linear-gradient(#72c6eb, #3a3d4e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Dashboard: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Welcome React Vapors Dashboard.</h1>
      </Content>
    </Wrapper>
  );
};

export default withRouter(Dashboard);
