import React from "react";

import { Form, Button, Card, Input, Select, DatePicker, message } from "antd";

interface IProps {
  onAdd: Function,
  onCancel: Function
}

interface IState {
  company_name: string,
  role: string,
  applied_on: string,
  stage: string,
}

export class AddEntry extends React.Component<IProps, IState> {
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
    if(this.state.company_name && this.state.role && this.state.applied_on){
      this.props.onAdd(this.state);
      this.resetForm();
      message.success("Entry has been created!");
    }
    else{
      message.warn("Please fill all the values in the form");
    }
  };

  onCancelEntry = () => {
    this.resetForm();
    this.props.onCancel();
  };

  resetForm = () => {
    this.setState({
      company_name: "",
      role: "",
      applied_on: "",
      stage: "applied"
    })
  }

  render() {
    // const [form] = Form.useForm();
    const { Option } = Select;
    const formLayout = {
      labelCol: { span: 6 },
    };
    const buttonLayout = {
      wrapperCol: { span: 14, offset: 4 },
    };

    const {company_name, role, applied_on, stage} = this.state;

    return (
      <Card>
        <Form {...formLayout}>
          <Form.Item label="Company Name">
            <Input
              required={true}
              onChange={(e) => {
                this.setState({ company_name: e.target.value });
              }}
              value={company_name}
            />
          </Form.Item>
          <Form.Item label="Role">
            <Input
              required={true}
              onChange={(e) => {
                this.setState({ role: e.target.value });
              }}
              value={role}
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
              value={stage}
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
