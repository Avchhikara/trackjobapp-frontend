import React from "react";

import { Form, Button, Card, Input, Select, DatePicker } from "antd";

export class AddEntry extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      company_name: "",
      role: "",
      applied_on: "",
      stage: "applied",
    };
  }

  onAddEntry = () => {
    this.props.onAdd(...this.state);
  };

  onCancelEntry = () => {
    this.props.onCancel();
  };

  render() {
    // const [form] = Form.useForm();
    const { Option } = Select;
    const formLayout = {
      labelCol: { span: 6 },
    };
    const buttonLayout = {
      wrapperCol: { span: 14, offset: 4 },
    };
    return (
      <Card>
        <Form {...formLayout}>
          <Form.Item label="Company Name">
            <Input
              onChange={(e) => {
                this.setState({ company_name: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Role">
            <Input
              onChange={(e) => {
                this.setState({ role: e.target.value });
              }}
            />
          </Form.Item>
          <Form.Item label="Date Applied">
            <DatePicker
              onChange={(date, dateString) => {
                this.setState((prev) => ({
                  ...prev,
                  applied_on: dateString,
                }));
              }}
            />
          </Form.Item>
          <Form.Item label="Stage">
            <Select
              defaultValue="applied"
              style={{ width: 120 }}
              onChange={(val) => {
                this.setState((prev) => ({
                  ...prev,
                  stage: val,
                }));
              }}
            >
              <Option value="applied">Applied</Option>
              <Option value="interview">Interview</Option>
              <Option value="offer">Offer</Option>
              <Option value="accepted">Accepted</Option>
            </Select>
          </Form.Item>
          <Form.Item {...buttonLayout}>
            <Button type="primary" onClick={this.onAddEntry}>
              Add
            </Button>
            <Button
              type="text"
              style={{ marginLeft: "8px" }}
              onClick={this.onCancelEntry}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
