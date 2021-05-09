import React from 'react';
import { Input, Form } from 'antd';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import { MESSAGES } from '../../../constants/index';
import PrimaryButton from '../../molecules/primaryButton';
import { saveSession } from '../../../helpers';

type SignInProps = {
  setIsLoading: (status: boolean) => void;
  onClickSignIn: () => void;
};

const Wrapper = styled.div`
  width: calc(100% - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px 75px;

  @media (max-width: 1300px) {
    padding: 0px 35px;
    width: calc(100% - 70px);
  }

  @media (max-width: 950px) {
    padding: 8px 20px;
    width: calc(100% - 40px);
  }

  @media (max-width: 786px) {
    padding: 18px 30px;
    width: calc(100% - 60px);
  }

  @media (max-width: 550px) {
    padding: 15px;
    width: calc(100% - 30px);
  }

  @media (max-width: 400px) {
    padding: 5px;
    width: calc(100% - 10px);
  }

  .form {
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .inputWrapper {
    width: 100%;
    align-items: center;
    margin-bottom: 12px;
    border-radius: 24px;
    .input {
      height: 48px;
      font-size: 18px;
      padding: 0px 18px;
      border-radius: 44px;
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
      }
    }
    .ant-form-item-explain.ant-form-item-explain-error {
      padding: 8px 18px;
    }
  }

  .checkbox {
    height: 18px;
    width: 18px;
  }
`;

const SignIn: React.FC<SignInProps> = ({ setIsLoading, onClickSignIn }: SignInProps) => {
  const [form] = Form.useForm();

  async function handleSubmit() {
    //TODO: Call login query
    const formFields = form.getFieldsValue();
    saveSession({ email: formFields.email });
    setIsLoading(false);
    onClickSignIn();
  }

  return (
    <Wrapper>
      <Form.Provider onFormFinish={handleSubmit}>
        <Form className="form" form={form} layout="vertical">
          <Form.Item
            name="email"
            className="inputWrapper"
            rules={[
              {
                type: 'email'
              },
              {
                required: true,
                message: MESSAGES.REQUIRED_FIELD
              }
            ]}
          >
            <Input className="input" placeholder={'Email'} type={'email'} size={'large'} />
          </Form.Item>
          <Form.Item
            className="inputWrapper"
            name="password"
            rules={[
              {
                required: true,
                message: MESSAGES.REQUIRED_FIELD
              }
            ]}
          >
            <Input.Password
              size={'large'}
              className="input"
              placeholder={'Password'}
              visibilityToggle={true}
              onPressEnter={form.submit}
            />
          </Form.Item>
        </Form>
      </Form.Provider>

      <PrimaryButton
        height="50px"
        width="122px"
        title={'Sign In'}
        onClick={form.submit}
        fontcolor={colors.black}
        color={colors.lightYellow}
      />
    </Wrapper>
  );
};

export default SignIn;
