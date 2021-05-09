import React from 'react';
import { Menu, Layout } from 'antd';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import { Logo } from '../../../assets/images';
import { DashboardOutlined } from '@ant-design/icons';
import { RouteProps, RouterProps } from 'react-router-dom';
import { ROUTES } from '../../../constants';

const { Sider } = Layout;
type ISiderProps = RouteProps & RouterProps;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 0px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.darkGrayish};

  @media (max-width: 980px) {
    .logoWrapper {
      display: none;
    }
  }
`;

const SideMenu = styled(Sider)`
  height: 100vh !important;
  position: fixed !important;
  left: 0 !important;
  background: none !important;
  overflow-y: scroll !important;
  z-index: 2 !important;
  backgroundcolor: ${colors.blackRock};
`;

const PrimaryLayoutSider: React.FC<ISiderProps> = ({ history }: ISiderProps) => {
  const onClickMenuItem = (name: string) => history.push(name);

  return (
    <SideMenu width={255} collapsed={false} collapsedWidth="0">
      <Menu mode="inline" theme={'dark'} style={{ width: 256, height: '100%', background: colors.blackRock }}>
        <LogoWrapper>
          <Logo width={43} height={43} color={colors.white} />
        </LogoWrapper>
        <Menu.Item
          className="menuItemDashboard"
          onClick={() => onClickMenuItem(ROUTES.DASHBOARD)}
          icon={<DashboardOutlined />}
        >
          Dashboard
        </Menu.Item>
      </Menu>
    </SideMenu>
  );
};

export default PrimaryLayoutSider;
