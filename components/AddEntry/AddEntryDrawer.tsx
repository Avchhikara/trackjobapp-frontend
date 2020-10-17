import React, { useState } from "react";
import { Drawer, Button } from "antd";

import { AddEntry } from "./AddEntry";

import { CREATE_ENTRY_URL } from './../../utils/urls';

export default (props) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onAdd = ({ company_name, role, applied_on, stage }) => {
    console.log("Adding values", company_name, role, applied_on, stage);
    props.addData(company_name, role, applied_on, stage);
    //Make HTTP req, show message, close model, show values
    fetch(CREATE_ENTRY_URL, {
      method: "POST",
      body: JSON.stringify({
        company_name, 
        name: role,
        applied_on,
        stage
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
    onClose();
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} className="add-job-drawer-btn">
        Add Job to Track
      </Button>
      <Drawer
        title="Add Job Applied"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={700}
      >
        <AddEntry onAdd={onAdd} onCancel={onClose} />
      </Drawer>
    </>
  );
};
