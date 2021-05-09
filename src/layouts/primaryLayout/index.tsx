import React from 'react';
import styled from 'styled-components';
import { Layout, Breadcrumb } from 'antd';
import { RouteProps } from 'react-router';
import { RouterProps } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import PrimaryLayoutSider from '../../components/molecules/primaryLayoutSider';
import PrimaryLayoutFooter from '../../components/molecules/primaryLayoutFooter';
import PrimaryLayoutHeader from '../../components/molecules/primaryLayoutHeader';

const { Content } = Layout;

const ContentTitleConatiner = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    display: inline-block;
    text-transform: lowercase;
    :first-letter {
      text-transform: uppercase;
    }
  }
  @media (max-width: 550px) {
    padding: 12px;
  }
`;

type PrimaryLayoutProps = RouteProps & RouterProps;

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ history, children }: PrimaryLayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <PrimaryLayoutSider history={history} />
      <Layout
        style={{
          marginLeft: 255
        }}
      >
        <PrimaryLayoutHeader />
        <Content style={{ zIndex: 1 }}>
          <ContentTitleConatiner>
            <Breadcrumb.Item>
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb separator={' / '}>
              {history.location.pathname
                .split('/')
                .map((item, index) => item && <Breadcrumb.Item key={index}>{`${item}`}</Breadcrumb.Item>)}
            </Breadcrumb>
          </ContentTitleConatiner>
          {children}
        </Content>
        <PrimaryLayoutFooter />
      </Layout>
    </Layout>
  );
};

export default PrimaryLayout;
