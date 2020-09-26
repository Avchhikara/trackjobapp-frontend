import React from "react";

import { Form, Button, Card } from "antd";

import { AutoCompleteInput } from "./AutoCompleteInput";
import DateApplied from "./DateApplied";
import StageSelect from "./StageSelect";
import RoleInput from "./RoleInput";

export const AddEntry = (props) => {
  const [form] = Form.useForm();
  const formLayout = {
    labelCol: { span: 6 },
  };
  const buttonLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };

  const onAddEntry = () => {
    props.onAdd();
  };

  const onCancelEntry = () => {
    props.onAdd();
  };

  return (
    <Card>
      <Form {...formLayout} form={form}>
        <Form.Item label="Company Name">
          <AutoCompleteInput />
        </Form.Item>
        <Form.Item label="Role">
          <RoleInput />
        </Form.Item>
        <Form.Item label="Date Applied">
          <DateApplied />
        </Form.Item>
        <Form.Item label="Stage">
          <StageSelect />
        </Form.Item>
        <Form.Item {...buttonLayout}>
          <Button type="primary" onClick={onAddEntry}>
            Add
          </Button>
          <Button
            type="text"
            style={{ marginLeft: "8px" }}
            onClick={onCancelEntry}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
