import * as React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import './login.scss';

interface IProps extends FormComponentProps {
  form: any;
}

function Login(props: IProps) {
  const { getFieldDecorator } = props.form;

  function handleSubmit(e:any) {
    e.preventDefault();
    props.form.validateFields((err: any, values: any): void => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
    });
  }

  return(
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create<IProps>()(Login)