import React, { useContext } from 'react';
import { Layout, message } from 'antd';
import styled from 'styled-components';
import AppContext from '../../../AppContext';
import PrimaryButton from '../primaryButton';
import { colors } from '../../../theme/colors';
import { deleteSession, getSession } from '../../../helpers';

const { Header } = Layout;

const Wrapper = styled(Header)`
  box-shadow: 0 1px 15px 1px rgb(69 65 78 / 10%);
  padding: 0px 25px;
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.blackRock};
  align-items: center;
  height: 79px;
  h4 {
    color: ${colors.white};
    margin-right: 8px;
  }

  @media (min-width: 981px) {
    .icon {
      display: none;
      color: ${({ color }) => color};
    }
    .leftImageWrapper {
      display: none;
      max-height: 50px;
    }
  }

  @media (max-width: 980px) {
    background-color: ${colors.blackRock};
    justify-content: space-between;
    height: 60px;

    .rightImageWrapper {
      display: none;
    }
  }
`;

const PrimaryLayoutHeader = () => {
  const { setLoggedIn } = useContext(AppContext);
  const logout = () => {
    //TODO: Reset session
    deleteSession();
    setLoggedIn(false);
    message.success('Logged out successfully');
  };

  return (
    <Wrapper>
      <h4>{`${getSession().email}`}</h4>
      <PrimaryButton
        width="98px"
        height="38px"
        title="Logout"
        onClick={logout}
        color={colors.lightYellow}
        fontcolor={colors.black}
      />
    </Wrapper>
  );
};

export default PrimaryLayoutHeader;
