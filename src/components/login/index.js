import React from "react";
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
  Typography,
} from "antd";

const { Footer, Content } = Layout;
const { Title } = Typography;

const LoginMoms = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className="height-100-p">
      <Content className="margin-25">
        <div className="site-layout-content height-100-p">
          <Row type="flex" justify="center" align="middle">
            <Col span={8}>
            <Title level={2} mark>
                Novaventa Moms
              </Title>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col span={24}>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  {...tailLayout}
                  name="remember"
                  valuePropName="checked"
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button>
                    Login wit Google
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Novaventa Moms ©2021 Created by Dmazo
      </Footer>
    </Layout>
  );
};

export default LoginMoms;
