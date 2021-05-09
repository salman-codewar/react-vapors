import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { Spin as AntdSpin } from 'antd';
import { ROUTES } from '../../constants';
import AppContext from '../../AppContext';
import { Logo } from '../../assets/images';
import { colors } from '../../theme/colors';
import SignIn from '../../components/atoms/signIn';
import { RouteProps, RouterProps } from 'react-router-dom';

type LandingPageProps = RouterProps & RouteProps;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const LeftContainer = styled.div`
  padding: 26px 50px;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  @media (max-width: 1300px) {
    padding: 15px 30px;
  }

  @media (max-width: 950px) {
    padding: 15px 15px;
  }

  @media (max-width: 786px) {
    width: 100%;
    padding: 0px 75px;
  }

  @media (max-width: 550px) {
    width: 100%;
    padding: 15px;
  }
`;

const RightContainer = styled.div`
  width: 45%;
  background-color: ${colors.brand};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 786px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-family: inherit;
  font-size: 46px;
  margin-top: 0px;
  margin-bottom: 26px;
  font-weight: 600;
  line-height: 1.2px;
  color: ${colors.white};
`;

const Spin = styled(AntdSpin)`
  min-height: 100vh;
  min-width: 100vh;
`;
const LandingPage: FC<LandingPageProps> = ({ history }: LandingPageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(AppContext);
  const onClickSignIn = () => {
    if (!loggedIn) {
      setLoggedIn(() => true);
      history.push(ROUTES.DASHBOARD);
    }
  };

  return (
    <Spin spinning={isLoading}>
      <Wrapper>
        <LeftContainer>
          <Logo width={200} height={200} color={colors.brand} />
          <SignIn setIsLoading={setIsLoading} onClickSignIn={onClickSignIn} />
        </LeftContainer>
        <RightContainer>
          <Title>React Vapors</Title>
        </RightContainer>
      </Wrapper>
    </Spin>
  );
};

export default LandingPage;
